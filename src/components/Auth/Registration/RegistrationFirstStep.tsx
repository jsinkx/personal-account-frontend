import React, { useCallback, useState } from 'react'
import type {
	FieldErrors,
	UseFormGetValues,
	UseFormRegister,
	UseFormTrigger,
	UseFormWatch,
} from 'react-hook-form'

import { AxiosError } from 'axios'
import { block } from 'million/react'
import { throttle } from 'throttle-debounce'

import axios from '@shared/axios'
import {
	EMAIL_UNCORRECTED_MESSAGE,
	LOGIN_BAD_PATTERN_MESSAGE,
	PASSWORDS_DOESNT_MATCH_MESSAGE,
	PASSWORD_BAD_PATTERN_MESSAGE,
	PASSWORD_CONFIRMATION_MISSED_MESSAGE,
} from '@shared/messages/registration-messages'
import { EMAIL_PATTERN, LOGIN_PATTERN, PASSWORD_PATTERN } from '@shared/regex-patterns'

import { StyledErrorInStep, StyledInput } from '../styles'
import { FormRegistrationValues } from './types'

type RegistrationFirstStepProps = {
	register: UseFormRegister<FormRegistrationValues>
	watch: UseFormWatch<FormRegistrationValues>
	getFieldState: UseFormTrigger<FormRegistrationValues>
	getValues: UseFormGetValues<FormRegistrationValues>
	errors: FieldErrors<FormRegistrationValues>
	handleCheckValidity: React.ChangeEventHandler<HTMLInputElement>
}

const THROTTLE_LOGIN_CHECK_TIME = 2 * 1000

const RegistrationFirstStep: React.FC<RegistrationFirstStepProps> = block(
	({ register, watch, getFieldState, getValues, errors, handleCheckValidity }) => {
		const [loginAvailabilityMessage, setLoginAvailabilityMessage] = useState('')

		const passwordMatchValidation = (value: string) =>
			value === watch('password') || PASSWORDS_DOESNT_MATCH_MESSAGE

		// eslint-disable-next-line react-hooks/exhaustive-deps
		const throttledCheckLoginAvailability = useCallback(
			throttle(THROTTLE_LOGIN_CHECK_TIME, async () => {
				const isValidLogin = await getFieldState('login')

				if (isValidLogin) {
					try {
						const { data } = await axios(`/account/login/check?login=${getValues('login')}`)

						console.log(data) // Backend is fucking piece of shit, always returns 500 error with any result, WTF
					} catch (err) {
						setLoginAvailabilityMessage((err as AxiosError<{ message: string }>).response?.data?.message as string)
					}
				} else {
					setLoginAvailabilityMessage('')
				}
			}),
			[],
		)

		const handleChangeLoginInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
			handleCheckValidity(event)

			throttledCheckLoginAvailability()
		}

		return (
			<>
				{loginAvailabilityMessage && (
					<div className="auth__login__availability-message"> {loginAvailabilityMessage} </div>
				)}
				{errors.login?.message && <StyledErrorInStep> {errors.login.message} </StyledErrorInStep>}
				<StyledInput
					{...register('login', {
						required: 'Введите логин',
						pattern: {
							value: LOGIN_PATTERN,
							message: LOGIN_BAD_PATTERN_MESSAGE,
						},
						onChange: handleChangeLoginInput,
					})}
					placeholder="Логин"
					autoComplete="login"
					className="auth__login__input"
				/>

				{errors.email?.message && <StyledErrorInStep> {errors.email.message} </StyledErrorInStep>}
				<StyledInput
					{...register('email', {
						required: 'Введите почту',
						pattern: {
							value: EMAIL_PATTERN,
							message: EMAIL_UNCORRECTED_MESSAGE,
						},
						onChange: handleCheckValidity,
					})}
					type="email"
					placeholder="Email"
					autoComplete="email"
					className="auth__email__input"
				/>
				{errors.password?.message && <StyledErrorInStep> {errors.password.message} </StyledErrorInStep>}
				<StyledInput
					{...register('password', {
						required: 'Введите пароль',
						pattern: {
							value: PASSWORD_PATTERN,
							message: PASSWORD_BAD_PATTERN_MESSAGE,
						},
						onChange: handleCheckValidity,
					})}
					type="password"
					placeholder="Пароль"
					autoComplete="new-password"
				/>
				{errors.passwordConfirm?.message && (
					<StyledErrorInStep> {errors.passwordConfirm.message} </StyledErrorInStep>
				)}
				<StyledInput
					{...register('passwordConfirm', {
						required: PASSWORD_CONFIRMATION_MISSED_MESSAGE,
						validate: passwordMatchValidation,
						onChange: handleCheckValidity,
					})}
					type="password"
					placeholder="Подведите пароль"
					autoComplete="new-password"
				/>
			</>
		)
	},
)

export default RegistrationFirstStep
