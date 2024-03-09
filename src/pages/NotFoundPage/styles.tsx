import styled from 'styled-components'

import Colors from '../../shared/colors'

import { StyledCustomLink as _StyledCustomLink } from '../../components/CustomLink/styles'

export const StyledCustomLink = styled(_StyledCustomLink)`
	color: ${Colors.BLUE_WISH};

	&:hover,
	&:active,
	&:focus {
	}
`

const StyledNotFoundPage = styled.main`
	text-align: center;
	user-select: none;

	img {
		width: 400px;
		margin: 12vh auto;
		user-select: none;
		pointer-events: none;
	}

	h1 {
		font-size: 2.2em;
	}

	p {
		font-size: 1.8em;
	}
`

export default StyledNotFoundPage
