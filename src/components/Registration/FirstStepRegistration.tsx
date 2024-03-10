import React from 'react'
import type { UseFormRegister } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import { StyledInput } from './styles'

type FirstStepRegistrationProps = {
	register: UseFormRegister<FirstStepInputs & SecondStepInputs>
}

const FirstStepRegistration: React.FC<FirstStepRegistrationProps> = ({ register }) => {
	return (
		<>
			<StyledInput height="45px" placeholder="Логин" {...register('login', { required: 'Введите логин' })} />
			<StyledInput
				type="email"
				height="45px"
				placeholder="Email"
				{...register('email', { required: 'Введите почту' })}
			/>
			<StyledInput
				type="password"
				height="45px"
				placeholder="Пароль"
				{...register('password', { required: 'Введите пароль' })}
			/>
			<StyledInput
				height="45px"
				placeholder="Подведите пароль"
				type="password"
				{...register('passwordConfirm', { required: 'Введите подтверждение пароля' })}
			/>
		</>
	)
}

export default FirstStepRegistration
