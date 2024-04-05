import { Link, NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const StyledCustomNavLink = styled(NavLink)`
	color: ${({ theme }) => theme.text.inactiveFontColor};
	text-decoration: none;
	transition: all 0.3s ease;
	user-select: none;

	&:hover,
	&:active,
	&:focus,
	&.active {
		color: ${({ theme }) => theme.text.primaryFontColor};
	}
`

export const StyledCustomLink = styled(Link)`
	color: ${({ theme }) => theme.text.inactiveFontColor};
	text-decoration: none;
	transition: all 0.3s ease;
	user-select: none;

	&:hover,
	&:active,
	&:focus,
	&.active {
		color: ${({ theme }) => theme.text.primaryFontColor};
	}
`
