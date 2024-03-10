/* eslint-disable @typescript-eslint/no-unused-expressions */

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import Button from '../Button'

import FirstStepRegistration from './FirstStepRegistration'
import SecondStepRegistration from './SecondStepRegistration'
import StyledRegistration, { StyledStep } from './styles'

type RegistrationProps = React.ComponentPropsWithoutRef<'div'>

// {
//     "login": str,  # [a-z0-9_]{4,32}
//     "password": str,  # ((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})
//     "email": str,  # ^(.+)@(.+)\.(.+)$
//     "first_name": str,  # [А-Я]{1}[а-я ]{1,255}
//     "last_name": str,  # [А-Я]{1}[а-я ]{1,255}
//     "patronymic": str,  # [А-Я]{1}[а-я ]{1,255}
//     "birthday": str  # (19|20)\d\d-((0[1-9]|1[012])-(0[1-9]|[12]\d)|(0[13-9]|1[012])-30|(0[13578]|1[02])-31)
// }

type FormRegisterValues = FirstStepInputs & SecondStepInputs

const MAX_STEPS = 2

const Registration: React.FC<RegistrationProps> = ({ ...props }) => {
	const {
		register,
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
			birthday: '',
		},
	})
	const [currentStep, setCurrentStep] = useState(1)

	// const checkValidity = async () => {
	// 	let isValid = false

	// 	switch (currentStep) {
	// 		case 1:
	// 			isValid = await trigger(['login', 'email', 'password', 'passwordConfirm'])
	// 			break
	// 		case 2:
	// 			isValid = await trigger(['firstName', 'lastName'])
	// 			break
	// 		default:
	// 			isValid = false
	// 	}

	// 	return isValid
	// }

	// const [agreeIsChecked, setAgreeIsChecked] = useState(false)

	const isLastStep = currentStep === MAX_STEPS

	const onSubmit: SubmitHandler<FormRegisterValues> = (data) => console.log(data)

	const handleClickBackStep: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()
		currentStep > 1 && setCurrentStep((p) => p - 1)
	}

	const handleClickNextStep: React.MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault()
		!isLastStep && setCurrentStep((p) => p + 1)
	}

	console.log('Errors', errors)

	return (
		<StyledRegistration {...props}>
			<h2> Регистрация </h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="registration__step-info">
					<Button
						disabled={!(currentStep > 1)}
						onClick={handleClickBackStep}
						variant="text"
						className="registration__buttons--back-button"
					>
						{'<'}
					</Button>
					<span>
						Шаг {currentStep} из {MAX_STEPS}
					</span>
				</div>
				{/* On unmount we lose our register, so we need to use display hidden */}
				{/* TODO: FIX: dont use inline styles in reason that cant be adaptive for small screens styles */}
				{/* TODO: error showing */}
				<StyledStep $isActive={currentStep === 1}>
					<FirstStepRegistration register={register} />
				</StyledStep>
				<StyledStep $isActive={currentStep === 2}>
					<SecondStepRegistration register={register} />
				</StyledStep>
				{/* TODO: disable button, if fields on current step are not valid */}
				{/* TODO: FIX: all buttons with any tipe in form submit */}
				<Button
					disabled={currentStep === MAX_STEPS && !isValid}
					type={isLastStep ? 'submit' : 'button'}
					onClick={handleClickNextStep}
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
