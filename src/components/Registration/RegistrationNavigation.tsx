import React from 'react'
import { useNavigate } from 'react-router-dom'

import Paths from '../../shared/paths'

import Button from '../Button'

const RegistrationNavigation: React.FC = () => {
	const navigate = useNavigate()

	return (
		<nav className="registration__navigation">
			<Button
				onClick={() => navigate(Paths.login)}
				variant="contained"
				className="registration__navigation__button"
			>
				Войти
			</Button>
			<Button disabled variant="text" className="registration__navigation__button">
				Регистрация
			</Button>
		</nav>
	)
}

export default RegistrationNavigation
