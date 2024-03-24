import { For, block } from 'million/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import Paths from '../../shared/paths'

import { selectAuthData } from '../../redux/slices/auth/selectors'
import { logout } from '../../redux/slices/auth/slice'

import useAppSelector from '../../hooks/useAppSelector'

import Button from '../Button'
import CustomNavLink from '../CustomLink'
import Logo from '../Logo'

import StyledHeader from './styles'

type HeaderProps = React.ComponentPropsWithoutRef<'header'>

const NAVIGATION_ELEMENTS = [
	{
		title: 'Главная',
		path: Paths.home,
	},
	{
		title: 'О нас',
		path: Paths.about,
	},
	{
		title: 'Контакты',
		path: Paths.contact,
	},
]

const Header: React.FC<HeaderProps> = block(({ ...props }) => {
	const dispatch = useDispatch()
	const location = useLocation()

	const authData = useAppSelector(selectAuthData)

	const isAuth = !!authData

	const handleClickLogout = () => {
		dispatch(logout())

		window.localStorage.removeItem('token')
		window.sessionStorage.removeItem('token')
	}

	return (
		<StyledHeader {...props}>
			<CustomNavLink className="header__logo" to={Paths.home}>
				<Logo />
			</CustomNavLink>
			{/* TODO: add checkbox in settings to turn on/off display version */}
			{/* TODO: create theme switcher */}
			<nav>
				<ul>
					<For each={NAVIGATION_ELEMENTS}>
						{(element) => (
							<li>
								<CustomNavLink to={element.path} state={{ from: location.pathname }}>
									{element.title}
								</CustomNavLink>
							</li>
						)}
					</For>
					{isAuth ? (
						<>
							<li>
								<CustomNavLink to={Paths.profile.dynamic(authData.id)} state={{ from: location.pathname }}>
									Профиль
								</CustomNavLink>
							</li>
							<li>
								<Button className="header__navigation__logout" variant="text" onClick={handleClickLogout}>
									Выйти
								</Button>
							</li>
						</>
					) : (
						<li>
							<CustomNavLink to={Paths.login} state={{ from: location.pathname }}>
								Войти
							</CustomNavLink>
						</li>
					)}
				</ul>
			</nav>
		</StyledHeader>
	)
})

export default Header
