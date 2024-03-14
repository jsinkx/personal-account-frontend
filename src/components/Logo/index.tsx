import React from 'react'

import { APP_VERSION, ICON_LOGO_URL } from '../../shared/constants'

import StyledLogo from './styles'

type LogoProps = {
	displayLogoIcon?: boolean
	displayLogoText?: boolean
	displayVersion?: boolean
} & React.ComponentPropsWithoutRef<'div'>

const Logo: React.FC<LogoProps> = ({
	displayLogoIcon = true,
	displayLogoText = true,
	displayVersion = true,
}) => {
	return (
		<StyledLogo>
			{displayLogoIcon && <img src={ICON_LOGO_URL} alt="W" />}
			{displayLogoText && <span className="header__logo--logo-name">WISH EDU</span>}
			{/* TODO: add checkbox in settings to turn on/off display version */}
			{/* TODO: create theme switcher */}
			{/* TODO: make header fixed ? */}
			{displayVersion && <span className="header__logo-text--version">{APP_VERSION}</span>}
		</StyledLogo>
	)
}

export default Logo
