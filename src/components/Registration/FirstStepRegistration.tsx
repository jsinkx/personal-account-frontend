import React from 'react'
import type { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import Error from '../Error'

import { StyledInput } from './styles'

type FirstStepRegistrationProps = {
	register: UseFormRegister<FirstStepInputs & SecondStepInputs>
	watch: UseFormWatch<FirstStepInputs & SecondStepInputs>
	errors: FieldErrors<FirstStepInputs & SecondStepInputs>
}

const FirstStepRegistration: React.FC<FirstStepRegistrationProps> = ({ register, watch, errors }) => {
	const passwordMatchValidation = (value: string) => value === watch('password') || 'Пароли не совпадают'
	const EMAIL_PATTERN = /\S+@\S+\.\S+/
	return (
		<>
			{errors.login?.message && <Error> {errors.login.message} </Error>}
			<StyledInput
				{...register('login', { required: 'Введите логин' })}
				placeholder="Логин"
				autoComplete="login"
				height="45px"
			/>
			{errors.email?.message && <Error> {errors.email.message} </Error>}
			<StyledInput
				{...register('email', {
					required: 'Введите почту',
					pattern: {
						value: EMAIL_PATTERN,
						message: 'Введите корректную почту',
					},
				})}
				type="email"
				placeholder="Email"
				autoComplete="email"
				height="45px"
			/>
			{errors.password?.message && <Error> {errors.password.message} </Error>}
			<StyledInput
				{...register('password', { required: 'Введите пароль' })}
				type="password"
				placeholder="Пароль"
				autoComplete="new-password"
				height="45px"
			/>
			{errors.passwordConfirm?.message && <Error> {errors.passwordConfirm.message} </Error>}
			<StyledInput
				{...register('passwordConfirm', {
					required: 'Введите подтверждение пароля',
					validate: passwordMatchValidation,
				})}
				type="password"
				placeholder="Подведите пароль"
				autoComplete="new-password"
				height="45px"
			/>
		</>
	)
}

export default FirstStepRegistration
