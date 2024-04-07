import styled from 'styled-components'

import { CustomNavLink } from '@components/CustomLink'

export const StyledCustomNavLink = styled(CustomNavLink)`
	color: ${({ theme }) => theme.text.primaryFontColor};

	&:hover,
	&:active,
	&:focus {
		opacity: 0.77;
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

	.button-go-back {
		padding: 0;
		font-weight: normal;
	}

	@media (max-width: 400px) {
		img {
			width: 200px;
		}

		h1 {
			font-size: 1.8em;
		}

		p {
			font-size: 1.4em;
		}
	}
`

export default StyledNotFoundPage
