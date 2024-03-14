import React from 'react'
import { useNavigate } from 'react-router-dom'

import Paths from '../../shared/paths'

import Button from '../Button'

const LoginNavigation: React.FC = () => {
	const navigate = useNavigate()

	return (
		<nav className="login__navigation">
			<Button
				disabled
				variant="contained"
				className="login__navigation__button login__navigation__button--active"
			>
				Войти
			</Button>
			<Button variant="text" className="login__navigation__button" onClick={() => navigate(Paths.registration)}>
				Регистрация
			</Button>
		</nav>
	)
}

export default LoginNavigation
