import React from 'react'

import { block } from 'million/react'

import Paths from '@shared/paths'

import { selectAuthData } from '@redux/slices/auth/selectors'

import useAppSelector from '@hooks/useAppSelector'

import { CustomNavLink } from '@components/CustomLink'
import Logo from '@components/Logo'

import HeaderAvatarMenu from './HeaderAvatarMenu'
import HeaderNotifications from './HeaderNotifications'
import StyledHeader from './styles'

type HeaderProps = React.ComponentPropsWithoutRef<'header'>

const Header: React.FC<HeaderProps> = block(({ ...props }) => {
	const authData = useAppSelector(selectAuthData)

	const isAuth = !!authData

	return (
		<StyledHeader {...props}>
			<CustomNavLink className="header__logo" to={Paths.home}>
				<Logo />
			</CustomNavLink>
			{/* TODO: add checkbox in settings to turn on/off display version */}
			{/* TODO: create theme switcher */}
			<nav>
				<ul>
					{isAuth ? (
						<>
							<li className="header__notifications">
								<HeaderNotifications />
							</li>
							<li className="header__avatar__menu">
								<HeaderAvatarMenu
									id={authData.id}
									login={authData.login}
									avatar={authData.avatar}
									color={authData.background_color}
									firstName={authData.first_name}
									lastName={authData.last_name}
								/>
							</li>
						</>
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
