/* eslint-disable import/prefer-default-export */
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

import Colors from '../../shared/colors'

export const StyledCustomNavLink = styled(NavLink)`
	color: ${Colors.INACTIVE_GREY_FONT};
	text-decoration: none;
	transition: all 0.3s ease;
	user-select: none;

	&:hover,
	&:active,
	&:focus,
	&.active {
		color: ${Colors.BLUE_WISH};
	}
`
