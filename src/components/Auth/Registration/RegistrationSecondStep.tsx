import React from 'react'
import type { FieldErrors, UseFormRegister } from 'react-hook-form'

import { block } from 'million/react'

import {
	FIRST_NAME_BAD_PATTERN_MESSAGE,
	LAST_NAME_BAD_PATTERN_MESSAGE,
	PATRONYMIC_BAD_PATTERN_MESSAGE,
} from '@shared/messages/registration-messages'
import { NAME_PATTERN } from '@shared/regex-patterns'

import { StyledErrorInStep, StyledInput } from '../styles'
import { FormRegistrationValues } from './types'

type RegistrationSecondStepProps = {
	register: UseFormRegister<FormRegistrationValues>
	errors: FieldErrors<FormRegistrationValues>
	handleCheckValidity: React.ChangeEventHandler<HTMLInputElement>
}

const RegistrationSecondStep: React.FC<RegistrationSecondStepProps> = block(
	({ register, errors, handleCheckValidity }) => {
		return (
			<>
				{errors.firstName?.message && <StyledErrorInStep> {errors.firstName.message} </StyledErrorInStep>}
				<StyledInput
					{...register('firstName', {
						required: 'Введите имя',
						pattern: {
							value: NAME_PATTERN,
							message: FIRST_NAME_BAD_PATTERN_MESSAGE,
						},
						onChange: handleCheckValidity,
					})}
					placeholder="Имя"
					autoComplete="firstName"
				/>

				{errors.lastName?.message && <StyledErrorInStep> {errors.lastName.message} </StyledErrorInStep>}
				<StyledInput
					{...register('lastName', {
						required: 'Введите фамилию',
						pattern: {
							value: NAME_PATTERN,
							message: LAST_NAME_BAD_PATTERN_MESSAGE,
						},
						onChange: handleCheckValidity,
					})}
					placeholder="Фамилия"
					autoComplete="lastName"
				/>
				{errors.patronymic?.message && <StyledErrorInStep> {errors.patronymic.message} </StyledErrorInStep>}
				<StyledInput
					{...register('patronymic', {
						pattern: {
							value: NAME_PATTERN,
							message: PATRONYMIC_BAD_PATTERN_MESSAGE,
						},
						onChange: handleCheckValidity,
					})}
					placeholder="Отчество"
					autoComplete="patronymic"
				/>
			</>
		)
	},
)

export default RegistrationSecondStep
