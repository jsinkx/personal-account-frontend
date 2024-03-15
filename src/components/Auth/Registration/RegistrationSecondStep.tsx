import { block } from 'million/react'
import React from 'react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import { StyledErrorInStep, StyledInput } from '../styles'

type RegistrationSecondStepProps = {
	register: UseFormRegister<FirstStepInputs & SecondStepInputs>
	errors: FieldErrors<FirstStepInputs & SecondStepInputs>
}

const RegistrationSecondStep: React.FC<RegistrationSecondStepProps> = block(({ register, errors }) => {
	const ONLY_LETTERS_PATTERN = /[А-ЯЁ]{1}[а-яё]/
	return (
		<>
			{errors.firstName?.message && <StyledErrorInStep> {errors.firstName.message} </StyledErrorInStep>}
			<StyledInput
				{...register('firstName', {
					required: 'Введите имя',
					pattern: {
						value: ONLY_LETTERS_PATTERN,
						message: 'Имя должно содержать только русские буквы и начинаться с заглавной буквы',
					},
				})}
				placeholder="Имя"
				autoComplete="firstName"
				height="45px"
			/>

			{errors.lastName?.message && <StyledErrorInStep> {errors.lastName.message} </StyledErrorInStep>}
			<StyledInput
				{...register('lastName', {
					required: 'Введите фамилию',
					pattern: {
						value: ONLY_LETTERS_PATTERN,
						message: 'Фамилия должна содержать только русские буквы и начинаться с заглавной буквы',
					},
				})}
				placeholder="Фамилия"
				autoComplete="lastName"
				height="45px"
			/>
			{errors.patronymic?.message && <StyledErrorInStep> {errors.patronymic.message} </StyledErrorInStep>}
			<StyledInput
				{...register('patronymic', {
					pattern: {
						value: ONLY_LETTERS_PATTERN,
						message: 'Отчество должно содержать только русские буквы и начинаться с заглавной буквы',
					},
				})}
				placeholder="Отчество"
				autoComplete="patronymic"
				height="45px"
			/>
		</>
	)
})

export default RegistrationSecondStep
