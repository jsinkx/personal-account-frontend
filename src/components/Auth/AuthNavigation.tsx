import React from 'react'
import { useNavigate } from 'react-router-dom'

import Paths from '@shared/paths'

import Button from '@components/Button'

type AuthNavigationProps = {
	isLogin?: boolean
}

const AuthNavigation: React.FC<AuthNavigationProps> = ({ isLogin }) => {
	const navigate = useNavigate()

	return (
		<nav className="navigation">
			<Button
				disabled={!!isLogin}
				variant={isLogin ? 'contained' : 'text'}
				className="navigation__button"
				onClick={() => navigate(Paths.login)}
			>
				Войти
			</Button>
			<Button
				disabled={!isLogin}
				variant={!isLogin ? 'contained' : 'text'}
				className="navigation__button"
				onClick={() => navigate(Paths.registration)}
			>
				Регистрация
			</Button>
		</nav>
	)
}

export default React.memo(AuthNavigation)
