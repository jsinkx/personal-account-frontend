import { block } from 'million/react'
import React from 'react'
import type { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import { StyledErrorInStep, StyledInput } from '../styles'

type RegistrationFirstStepProps = {
	register: UseFormRegister<FirstStepInputs & SecondStepInputs>
	watch: UseFormWatch<FirstStepInputs & SecondStepInputs>
	errors: FieldErrors<FirstStepInputs & SecondStepInputs>
}

const RegistrationFirstStep: React.FC<RegistrationFirstStepProps> = block(({ register, watch, errors }) => {
	const passwordMatchValidation = (value: string) => value === watch('password') || 'Пароли не совпадают'

	const LOGIN_PATTERN = /[a-z0-9_]/
	const PASSWORD_PATTERN = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/

	const EMAIL_PATTERN =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	// TODO: Add availability check for login from server with debounce
	return (
		<>
			{errors.login?.message && <StyledErrorInStep> {errors.login.message} </StyledErrorInStep>}
			<StyledInput
				{...register('login', {
					required: 'Введите логин',
					pattern: {
						value: LOGIN_PATTERN,
						message: 'Логин должен содержать только латинские буквы и цифры',
					},
				})}
				placeholder="Логин"
				autoComplete="login"
				height="45px"
			/>
			{errors.email?.message && <StyledErrorInStep> {errors.email.message} </StyledErrorInStep>}
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
			{errors.password?.message && <StyledErrorInStep> {errors.password.message} </StyledErrorInStep>}
			<StyledInput
				{...register('password', {
					required: 'Введите пароль',
					pattern: {
						value: PASSWORD_PATTERN,
						message: 'Пароль может содержать латинские буквы, цифры и спецсимволы',
					},
				})}
				type="password"
				placeholder="Пароль"
				autoComplete="new-password"
				height="45px"
			/>
			{errors.passwordConfirm?.message && (
				<StyledErrorInStep> {errors.passwordConfirm.message} </StyledErrorInStep>
			)}
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
})

export default RegistrationFirstStep
