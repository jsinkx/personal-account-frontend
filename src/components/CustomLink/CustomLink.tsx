import React from 'react'
import type { LinkProps } from 'react-router-dom'

import { StyledCustomLink } from './styles'

type CustomLinkProps = LinkProps &
	React.ComponentPropsWithoutRef<'a'> & {
		children: React.ReactNode
	}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
	return (
		<StyledCustomLink to={to} {...props}>
			{children}
		</StyledCustomLink>
	)
}

export default CustomLink
