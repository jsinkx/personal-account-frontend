// eslint-disable-next-line import/order
import checkFieldsValidity from '../../utils/react-hook-form/check-fields-validity'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { FirstStepInputs, FirstStepKeys, SecondStepInputs, SecondStepKeys } from './types'

import Colors from '../../shared/colors'
import Paths from '../../shared/paths'

import { fetchAuthRegistration } from '../../redux/slices/auth/slice'

import useAppDispatch from '../../hooks/useAppDispatch'

import Button from '../Button'
import CustomNavLink from '../CustomLink'
import IconButton from '../IconButton'
import ArrowBackIcon from '../Icons/ArrowIBackIcon'
import Logo from '../Logo'

import FirstStepRegistration from './FirstStepRegistration'
import SecondStepRegistration from './SecondStepRegistration'
import StyledRegistration, { StyledStep } from './styles'

type RegistrationProps = React.ComponentPropsWithoutRef<'div'>

type FormRegisterValues = FirstStepInputs & SecondStepInputs

const MAX_STEPS = 2

const Registration: React.FC<RegistrationProps> = ({ ...props }) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const {
		register,
		watch,
		handleSubmit,
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
	const [currentStep, setCurrentStep] = useState(1)

	const [agreeIsChecked, setAgreeIsChecked] = useState(false)

	const isLastStep = currentStep === MAX_STEPS

	// Help functions

	// TODO: FIX: Stop event preventDefault for all buttons inside form

	const onSubmit: SubmitHandler<FormRegisterValues> = (data) => {
		const registrationBody = {
			login: data.login,
			password: data.password,
			email: data.email,
			first_name: data.firstName,
			last_name: data.lastName,
			patronymic: data.patronymic,
		}

		dispatch(fetchAuthRegistration(registrationBody))
	}

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

	// Handlers

	const handleClickBackStep: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()
		currentStep > 1 && setCurrentStep((p) => p - 1)
	}

	const handleClickNextStep: React.MouseEventHandler<HTMLButtonElement> = () =>
		!isLastStep && setCurrentStep((p) => p + 1)

	return (
		<StyledRegistration {...props}>
			<CustomNavLink className="header__logo" to={Paths.home}>
				<Logo />
			</CustomNavLink>
			<nav className="registration__navigation">
				<Button
					onClick={() => navigate(Paths.login)}
					variant="contained"
					className="registration__navigation__button"
				>
					Войти
				</Button>
				<Button disabled variant="text" className="registration__navigation__button">
					Регистрация
				</Button>
			</nav>
			<form onSubmit={handleSubmit(onSubmit)}>
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

				<Button
					onClick={handleClickNextStep}
					disabled={currentStep === MAX_STEPS ? !isValid || !agreeIsChecked : !checkValidity(currentStep)}
					type={isLastStep ? 'submit' : 'button'}
					width="100%"
					height="45px"
				>
					{isLastStep ? 'Зарегистрироваться' : 'Далее'}
				</Button>
			</form>
		</StyledRegistration>
	)
}

export default Registration
