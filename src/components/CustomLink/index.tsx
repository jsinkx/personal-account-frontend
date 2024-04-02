import React from 'react'
import type { LinkProps, NavLinkProps } from 'react-router-dom'

import { StyledCustomLink, StyledCustomNavLink } from './styles'

type CustomNavLinkProps = NavLinkProps & React.ComponentPropsWithoutRef<'a'>
type CustomLinkProps = LinkProps & React.ComponentPropsWithoutRef<'a'>
export const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, ...props }) => {
	return (
		<StyledCustomNavLink to={to} {...props}>
			{children}
		</StyledCustomNavLink>
	)
}

export const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
	return (
		<StyledCustomLink to={to} {...props}>
			{children}
		</StyledCustomLink>
	)
}
