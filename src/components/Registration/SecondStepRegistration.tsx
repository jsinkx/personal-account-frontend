import React from 'react'
import type { UseFormRegister } from 'react-hook-form'

import { FirstStepInputs, SecondStepInputs } from './types'

import { StyledInput } from './styles'

type SecondStepRegistrationProps = {
	register: UseFormRegister<FirstStepInputs & SecondStepInputs>
}

const SecondStepRegistration: React.FC<SecondStepRegistrationProps> = ({ register }) => {
	return (
		<>
			<StyledInput height="45px" placeholder="Имя" {...register('firstName', { required: 'Введите имя' })} />
			<StyledInput
				height="45px"
				placeholder="Фамилия"
				{...register('lastName', { required: 'Введите фамилию' })}
			/>
			<StyledInput height="45px" placeholder="Отчество" {...register('patronymic')} />
			<StyledInput height="45px" placeholder="День рождения" {...register('birthday')} />
		</>
	)
}

export default SecondStepRegistration
