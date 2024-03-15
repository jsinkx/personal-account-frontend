import React from 'react'
import type { NavLinkProps } from 'react-router-dom'

import { StyledCustomNavLink } from './styles'

type CustomNavLinkProps = NavLinkProps & React.ComponentPropsWithoutRef<'a'>
const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, ...props }) => {
	return (
		<StyledCustomNavLink to={to} {...props}>
			{children}
		</StyledCustomNavLink>
	)
}

export default CustomNavLink
