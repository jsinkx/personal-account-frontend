import { For, block } from 'million/react'
import React from 'react'

import Paths from '../../shared/paths'

import { selectAuthData } from '../../redux/slices/auth/selectors'

import useAppSelector from '../../hooks/useAppSelector'

import CustomNavLink from '../CustomLink'
import Logo from '../Logo'

import AvatarMenu from './AvatarMenu'
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
	const profile = useAppSelector(selectAuthData)

	const isAuth = !!profile

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
								<CustomNavLink to={element.path}>{element.title}</CustomNavLink>
							</li>
						)}
					</For>
					{isAuth ? (
						<li className="header__avatar__menu">
							<AvatarMenu
								id={profile.id}
								avatar={profile.avatar}
								color={profile.background_color}
								firstName={profile.first_name}
								lastName={profile.last_name}
							/>
						</li>
					) : (
						<li>
							<CustomNavLink to={Paths.login}>Войти</CustomNavLink>
						</li>
					)}
				</ul>
			</nav>
		</StyledHeader>
	)
})

export default Header
