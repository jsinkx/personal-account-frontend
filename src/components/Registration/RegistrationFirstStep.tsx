import { block } from 'million/react'
import React from 'react'
import type { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import { StyledErrorInStep, StyledInput } from './styles'

type RegistrationFirstStepProps = {
	register: UseFormRegister<FirstStepInputs & SecondStepInputs>
	watch: UseFormWatch<FirstStepInputs & SecondStepInputs>
	errors: FieldErrors<FirstStepInputs & SecondStepInputs>
}

const RegistrationFirstStep: React.FC<RegistrationFirstStepProps> = block(({ register, watch, errors }) => {
	const passwordMatchValidation = (value: string) => value === watch('password') || 'Пароли не совпадают'

	const EMAIL_PATTERN =
		/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

	// TODO: Add availability check for login from server with debounce
	return (
		<>
			{errors.login?.message && <StyledErrorInStep> {errors.login.message} </StyledErrorInStep>}
			<StyledInput
				{...register('login', { required: 'Введите логин' })}
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
				{...register('password', { required: 'Введите пароль' })}
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
