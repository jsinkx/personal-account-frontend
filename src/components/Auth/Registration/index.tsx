// eslint-disable-next-line import/order
import checkFieldsValidity from '../../../utils/react-hook-form/check-fields-validity'
import { block } from 'million/react'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FirstStepInputs, FirstStepKeys, SecondStepInputs, SecondStepKeys } from './types'

import Paths from '../../../shared/paths'
import Status from '../../../shared/status'

import isErrorWithMessage from '../../../utils/is-error-with-message'

import { selectAuthStatus } from '../../../redux/slices/auth/selectors'
import { fetchAuthRegistration } from '../../../redux/slices/auth/slice'

import useAppDispatch from '../../../hooks/useAppDispatch'
import useAppSelector from '../../../hooks/useAppSelector'

import Button from '../../Button'
import Error from '../../Error'
import AuthNavigation from '../AuthNavigation'
import AuthSaveUser from '../AuthSaveUser'
import AuthServiceAgree from '../AuthServiceAgree'
import StyledAuth, { StyledStep } from '../styles'

import FirstStepRegistration from './RegistrationFirstStep'
import SecondStepRegistration from './RegistrationSecondStep'
import StepInfo from './StepInfo'

type RegistrationProps = React.ComponentPropsWithoutRef<'div'>

type FormRegisterValues = FirstStepInputs & SecondStepInputs

const MAX_STEPS = 2

const Registration: React.FC<RegistrationProps> = block(({ ...props }) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const status = useAppSelector(selectAuthStatus)

	const [error, setError] = useState<null | string>(null)
	const [currentStep, setCurrentStep] = useState(1)
	const [agreeIsChecked, setAgreeIsChecked] = useState(false)
	const [saveUserIsChecked, setSaveUserIsChecked] = useState(false)

	const isLastStep = currentStep === MAX_STEPS

	const {
		register,
		watch,
		handleSubmit: handleDirtySubmit,
		formState: { isValid, errors },
	} = useForm<FormRegisterValues>({
		mode: 'onChange',
		defaultValues: {
			login: '',
			email: '',
			password: '',
			passwordConfirm: '',
			firstName: '',
			lastName: '',
			patronymic: '',
		},
	})

	const checkValidity = (step: number) => {
		const errorFields = Object.keys(errors)

		switch (step) {
			case 1:
				const firstStepFields: FirstStepKeys = ['login', 'email', 'password', 'passwordConfirm']

				return checkFieldsValidity(firstStepFields, errorFields, watch)
			case 2:
				const secondStepFields: SecondStepKeys = ['firstName', 'lastName', 'patronymic']

				return checkFieldsValidity(secondStepFields, errorFields, watch)
			default:
				return false
		}
	}

	const isDisabledButton =
		status === Status.LOADING || currentStep === MAX_STEPS
			? !isValid || !agreeIsChecked
			: !checkValidity(currentStep)

	// FIX: NEED FAST PERFORMANCE BUG FIX, BAD RENDER ON CHANGE VALUES !!!

	const onSubmit: SubmitHandler<FormRegisterValues> = async (values) => {
		const { login, password, email, patronymic } = values
		const registrationBody = {
			login,
			password,
			email,
			first_name: values.firstName,
			last_name: values.lastName,
			patronymic,
		}

		try {
			const data = await dispatch(fetchAuthRegistration(registrationBody)).unwrap()

			if ('token' in data)
				saveUserIsChecked
					? localStorage.setItem('token', data.token)
					: sessionStorage.setItem('token', data.token)

			navigate(Paths.profile.dynamic(data.id))
		} catch (_err) {
			const err = isErrorWithMessage(_err) ? _err.errorMessage : 'Произошла неизвестная ошибка'

			setError(err)
		}
	}

	// Handlers

	const handleClickStepBack: React.MouseEventHandler<HTMLButtonElement> = () =>
		currentStep > 1 && setCurrentStep((p) => p - 1)

	const handleClickNextStep: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()

		!isLastStep && setCurrentStep((p) => p + 1)
	}
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()

		handleDirtySubmit(onSubmit)()
	}

	return (
		<StyledAuth {...props}>
			<AuthNavigation />
			<form onSubmit={handleSubmit}>
				{/* On unmount we lose our register, so we need to use display hidden */}
				<StepInfo maxSteps={MAX_STEPS} currentStep={currentStep} handleClickStepBack={handleClickStepBack} />
				<StyledStep $isActive={currentStep === 1}>
					<FirstStepRegistration register={register} watch={watch} errors={errors} />
				</StyledStep>
				<StyledStep $isActive={currentStep === 2}>
					<SecondStepRegistration register={register} errors={errors} />
				</StyledStep>
				{currentStep === MAX_STEPS && (
					<div className="auth__parameters">
						<AuthServiceAgree agreeIsChecked={agreeIsChecked} setAgreeIsChecked={setAgreeIsChecked} />
						<AuthSaveUser saveUserIsChecked={saveUserIsChecked} setSaveUserIsChecked={setSaveUserIsChecked} />
					</div>
				)}
				{error !== null && <Error className="auth--error">{error}</Error>}
				<Button
					onClick={!isLastStep ? handleClickNextStep : undefined}
					disabled={isDisabledButton}
					type={isLastStep ? 'submit' : 'button'}
					width="100%"
					height="45px"
				>
					{isLastStep ? 'Зарегистрироваться' : 'Далее'}
				</Button>
			</form>
		</StyledAuth>
	)
})

export default Registration
