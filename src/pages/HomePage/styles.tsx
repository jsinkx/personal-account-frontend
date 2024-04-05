import styled, { createGlobalStyle } from 'styled-components'

import Colors from '@shared/colors'

import Button from '@components/Button'

type StyledProps = {
	$isAuth: boolean
}

export const UpdateHTMLStyles = createGlobalStyle<StyledProps>`
	${({ $isAuth }) => !$isAuth && 'html { overflow: hidden; }'}
`

export const StyledButton = styled(Button)`
	font-size: 1.2em;
`

export const StyledSlide = styled.div<StyledProps>`
	${({ $isAuth }) => !$isAuth && 'height: 100vh;'}
	padding-top: 80px;
	scroll-snap-align: start;
`

export const StyledHomePage = styled.div<StyledProps>`
	margin: 0;
	box-sizing: border-box;
	scroll-snap-type: y mandatory;
	${({ $isAuth }) =>
		!$isAuth &&
		`
		height: 100vh;
		overflow-y: scroll;
	`}

	.slider-container {
		.slider-container__element--one {
		}

		.slider-container__element--two {
			h2 {
				font-size: 2em;
				text-align: center;
				user-select: none;
			}

			.navigation__services {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-wrap: wrap;
				margin-top: 5vh;

				a {
					color: inherit;
					text-decoration: inherit;
				}

				.disabled {
					cursor: default;
					pointer-events: none;

					.navigation__services__service__icon {
						opacity: 0.5;
					}

					p {
						color: ${Colors.INACTIVE_GREY_FONT};
					}
				}

				.navigation__services__service {
					margin-inline: 30px;
					margin-bottom: 50px;
					user-select: none;

					.navigation__services__service__icon {
						margin: 0 auto;
						border-radius: 50%;
						cursor: pointer;
					}

					p {
						margin: 5px auto;
						font-size: 1em;
						text-align: center;
					}
				}
			}
		}
	}

	.block__greetings-info,
	.block__navigation-services {
	}

	.block__greetings-info {
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
				font-size: 2.2em;
				font-weight: bold;
			}

			h2 {
				color: ${Colors.BLUE_WISH};
				font-size: 2.9em;
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
	}

	@media (max-width: 1500px) {
		margin-top: 30px;

		.block__greetings-info {
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
	}

	@media (max-width: 1118px) {
		margin-top: 0;

		.block__greetings-info {
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
	}

	@media (max-width: 860px) {
		margin-top: -30px;

		.block__greetings-info {
			section {
				img {
					width: 300px;
					margin-top: 30px;
				}
			}
		}
	}

	@media (max-width: 782px) {
		.block__greetings-info {
			section:last-child {
				display: none;
			}

			section {
				p {
					width: 80%;
					margin-bottom: 10px;
					word-wrap: break-word;
				}
			}
		}
	}
`
