import { For, block } from 'million/react'
import React from 'react'
import { useLocation } from 'react-router-dom'

import Paths from '../../shared/paths'

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
	const location = useLocation()

	const isAuth = false

	return (
		<StyledHeader {...props}>
			<CustomNavLink className="header__logo" to={Paths.home}>
				<Logo />
			</CustomNavLink>
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
						<li>
							<CustomNavLink to={Paths.home} state={{ from: location.pathname }}>
								{'{ login }'}
							</CustomNavLink>
						</li>
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
