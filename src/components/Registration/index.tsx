// eslint-disable-next-line import/order
import checkFieldsValidity from '../../utils/react-hook-form/check-fields-validity'
import { block } from 'million/react'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FirstStepInputs, FirstStepKeys, SecondStepInputs, SecondStepKeys } from './types'

import Colors from '../../shared/colors'
import Paths from '../../shared/paths'
import Status from '../../shared/status'

import isErrorWithMessage from '../../utils/is-error-with-message'

import { selectAuthData, selectAuthStatus } from '../../redux/slices/auth/selectors'
import { fetchAuthRegistration } from '../../redux/slices/auth/slice'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import Button from '../Button'
import CustomNavLink from '../CustomLink'
import Error from '../Error'
import IconButton from '../IconButton'
import ArrowBackIcon from '../Icons/ArrowIBackIcon'
import Logo from '../Logo'

import FirstStepRegistration from './RegistrationFirstStep'
import RegistrationNavigation from './RegistrationNavigation'
import SecondStepRegistration from './RegistrationSecondStep'
import StyledRegistration, { StyledStep } from './styles'

type RegistrationProps = React.ComponentPropsWithoutRef<'div'>

type FormRegisterValues = FirstStepInputs & SecondStepInputs

const MAX_STEPS = 2

const Registration: React.FC<RegistrationProps> = block(({ ...props }) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const authData = useAppSelector(selectAuthData)
	const status = useAppSelector(selectAuthStatus)

	const [error, setError] = useState<null | string>(null)
	const [currentStep, setCurrentStep] = useState(1)
	const [agreeIsChecked, setAgreeIsChecked] = useState(false)

	const isAuth = !!authData
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
	// FIX: After success registration and redirect to profile page, got error https://github.com/facebook/react/issues/18178

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

			// TODO: FIX: throwing error

			if ('token' in data) {
				localStorage.setItem('token', data.token)

				navigate(Paths.profile.dynamic(data.id))
			} else throw ''
		} catch (_err) {
			const err = isErrorWithMessage(_err) ? _err.errorMessage : 'Произошла неизвестная ошибка'

			setError(err)
		}
	}

	// Handlers

	const handleClickBackStep: React.MouseEventHandler<HTMLButtonElement> = () =>
		currentStep > 1 && setCurrentStep((p) => p - 1)

	const handleClickNextStep: React.MouseEventHandler<HTMLButtonElement> = () =>
		!isLastStep && setCurrentStep((p) => p + 1)

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault()
		handleDirtySubmit(onSubmit)()
	}

	// TODO: FIX: take useEffect out in page part
	useEffect(() => {
		if (isAuth) {
			navigate(Paths.profile.dynamic(authData.id))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAuth, navigate])

	return (
		<StyledRegistration {...props}>
			<CustomNavLink className="header__logo" to={Paths.home}>
				<Logo />
			</CustomNavLink>
			<RegistrationNavigation />
			<form onSubmit={handleSubmit}>
				<div className="registration__step-info">
					<IconButton
						disabled={!(currentStep > 1)}
						onClick={handleClickBackStep}
						className="registration__step-info--back-button"
					>
						<ArrowBackIcon size="100px" color={Colors.BLUE_WISH} />
					</IconButton>
					<span>
						Шаг {currentStep} из {MAX_STEPS}
					</span>
				</div>
				{/* On unmount we lose our register, so we need to use display hidden */}
				{/* TODO: FIX: dont use inline styles in reason that cant be adaptive for small screens styles */}
				<StyledStep $isActive={currentStep === 1}>
					<FirstStepRegistration register={register} watch={watch} errors={errors} />
				</StyledStep>
				<StyledStep $isActive={currentStep === 2}>
					<SecondStepRegistration register={register} errors={errors} />
				</StyledStep>
				{currentStep === MAX_STEPS && (
					<div className="registration--agree">
						{/* TODO: Create checkbox component */}
						<input type="checkbox" checked={agreeIsChecked} onChange={() => setAgreeIsChecked((p) => !p)} />
						Согласны с
						<CustomNavLink to={Paths.termsAndConditions} className="registration--agree__navlink">
							правилами и условиями
						</CustomNavLink>
					</div>
				)}
				{error !== null && <Error className="registration--error">{error}</Error>}
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
		</StyledRegistration>
	)
})

export default Registration
