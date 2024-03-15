/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

import Colors from '../../shared/colors'

import Button from '../../components/Button'

export const StyledButton = styled(Button)`
	font-size: 1.2em;
`

export const StyledHomePageNoAuth = styled.div`
	width: 100%;
	margin-top: 100px;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;

	section:first-child {
		margin-top: 40px;
		margin-left: 75px;
	}

	section:last-child {
		margin-right: 75px;
	}

	section {
		h2,
		h3,
		h4,
		p {
			margin: 0;
			margin-bottom: 15px;
			user-select: none;
		}

		h4 {
			color: ${Colors.INACTIVE_GREY_FONT};
			font-size: 1.9em;
			font-weight: normal;
		}

		h3 {
			color: ${Colors.BLACK};
			font-size: 2.3em;
			font-weight: bold;
		}

		h2 {
			color: ${Colors.BLUE_WISH};
			font-size: 2.7em;
			font-weight: bold;
		}

		p {
			width: 570px;
			margin-bottom: 25px;
			font-size: 1.3em;
			color: ${Colors.INACTIVE_GREY_FONT};
		}

		img {
			width: 800px;
			margin-top: -120px;
			user-select: none;
			pointer-events: none;
		}

		h4 {
			margin-top: 50px;
		}
	}

	@media (max-width: 1500px) {
		margin-top: 30px;

		section {
			margin-top: 0px;

			h4 {
				font-size: 1.6em;
			}

			h3 {
				font-size: 2em;
			}

			h2 {
				font-size: 2.4em;
			}

			p {
				width: 420px;
				font-size: 1em;
			}

			img {
				width: 500px;
				margin-top: -20px;
			}
		}
	}

	@media (max-width: 1118px) {
		margin-top: 0;

		section {
			h4 {
				font-size: 1.3em;
			}

			h3 {
				font-size: 1.7em;
			}

			h2 {
				font-size: 2.1em;
			}

			p {
				width: 370px;
				font-size: 1em;
			}

			img {
				width: 300px;
				margin-top: 40px;
			}
		}
	}

	@media (max-width: 860px) {
		margin-top: -30px;

		section {
			img {
				width: 300px;
				margin-top: 30px;
			}
		}
	}

	@media (max-width: 782px) {
		section:last-child {
			display: none;
		}

		section {
			p {
				margin-bottom: 10px;
			}
		}
	}
`
