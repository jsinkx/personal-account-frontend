import { For, block } from 'million/react'
import React from 'react'
import { useLocation } from 'react-router-dom'

import { APP_VERSION, CDN_URL, ICON_LOGO_URL } from '../../shared/constants'
import Paths from '../../shared/paths'

import CustomLink from '../CustomLink/CustomLink'

import StyledHeader, { StyledNavLink } from './styles'

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

	return (
		<StyledHeader {...props}>
			<CustomLink className="header__logo" to={Paths.home}>
				<img src={`${CDN_URL}${ICON_LOGO_URL}`} alt="W" />
				<span className="header__logo--logo-name">WISH EDU</span>
				{/* TODO: add checkbox in settings to turn on/off display version */}
				<span className="header__logo-text--version">{APP_VERSION}</span>
			</CustomLink>
			<nav>
				<ul>
					<For each={NAVIGATION_ELEMENTS}>
						{(element) => (
							<li>
								<StyledNavLink to={element.path} state={{ from: location.pathname }}>
									{element.title}
								</StyledNavLink>
							</li>
						)}
					</For>
				</ul>
			</nav>
		</StyledHeader>
	)
})

export default Header
