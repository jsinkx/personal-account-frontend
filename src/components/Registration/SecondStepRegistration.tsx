import React from 'react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import Error from '../Error'

import { StyledInput } from './styles'

type SecondStepRegistrationProps = {
	register: UseFormRegister<FirstStepInputs & SecondStepInputs>
	errors: FieldErrors<FirstStepInputs & SecondStepInputs>
}

const SecondStepRegistration: React.FC<SecondStepRegistrationProps> = ({ register, errors }) => {
	const ONLY_LETTERS_PATTERN = /^[A-Za-z]+$/i

	return (
		<>
			{errors.firstName?.message && <Error> {errors.firstName.message} </Error>}
			<StyledInput
				{...register('firstName', {
					required: 'Введите имя',
					pattern: {
						value: ONLY_LETTERS_PATTERN,
						message: 'Имя должно содержать только буквы',
					},
				})}
				placeholder="Имя"
				autoComplete="firstName"
				height="45px"
			/>

			{errors.lastName?.message && <Error> {errors.lastName.message} </Error>}
			<StyledInput
				{...register('lastName', {
					required: 'Введите фамилию',
					pattern: {
						value: ONLY_LETTERS_PATTERN,
						message: 'Фамилия должна содержать только буквы',
					},
				})}
				placeholder="Фамилия"
				autoComplete="lastName"
				height="45px"
			/>
			{errors.patronymic?.message && <Error> {errors.patronymic.message} </Error>}
			<StyledInput
				{...register('patronymic', {
					pattern: {
						value: ONLY_LETTERS_PATTERN,
						message: 'Отчество должно содержать только буквы',
					},
				})}
				placeholder="Отчество"
				autoComplete="patronymic"
				height="45px"
			/>
		</>
	)
}

export default SecondStepRegistration
