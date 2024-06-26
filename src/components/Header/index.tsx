import React from 'react'

import { block } from 'million/react'

import Paths from '@shared/paths'

import { selectAppSettings } from '@redux/slices/app-settings/selectors'
import { selectAuthData } from '@redux/slices/auth/selectors'

import useAppSelector from '@hooks/useAppSelector'

import { CustomNavLink } from '@components/CustomLink'
import Logo from '@components/Logo'
import ThemeSwitcher from '@components/Themes/ThemesSwitcher'

import HeaderAvatarMenu from './HeaderAvatarMenu'
import HeaderNotifications from './HeaderNotifications'
import StyledHeader from './styles'

type HeaderProps = React.ComponentPropsWithoutRef<'header'>

const Header: React.FC<HeaderProps> = block(({ ...props }) => {
	const authData = useAppSelector(selectAuthData)

	const { isDisplayVersion } = useAppSelector(selectAppSettings)

	const isAuth = !!authData

	return (
		<StyledHeader {...props}>
			<CustomNavLink className="header__logo" to={Paths.home}>
				<Logo displayVersion={isDisplayVersion} />
			</CustomNavLink>
			<nav>
				<ul>
					<li>
						<ThemeSwitcher />
					</li>
					{isAuth ? (
						<>
							<li className="header__notifications">
								<HeaderNotifications />
							</li>
							<li className="header__avatar__menu">
								<HeaderAvatarMenu
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
