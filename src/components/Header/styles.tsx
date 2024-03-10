import styled from 'styled-components'

import Colors from '../../shared/colors'

const StyledHeader = styled.header`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);

	.header__logo {
		margin-left: 60px;
		display: flex;
		align-items: center;
		user-select: none;
		color: black;
		transition: all 0.3s ease;

		&:hover,
		:active,
		:focus {
			color: ${Colors.BLUE_WISH};
		}

		.header__logo--logo-name {
			margin-left: 10px;
			font-size: 2em;
			font-family: Roboto;
			font-weight: bold;
		}

		.header__logo-text--version {
			margin-left: 10px;
			color: ${Colors.INACTIVE_GREY_FONT};
			font-size: 1.2em;
			font-family: Consolas;
		}
	}

	img {
		width: 60px;
		height: 60px;
		user-select: none;
	}

	nav {
		margin-right: 50px;

		ul {
			margin: 0;
			padding: 0;
			display: flex;
			list-style: none;
			box-sizing: border-box;

			li {
				margin-left: 40px;
				font-size: 1.2em;
				font-weight: bold;
				font-family: Roboto;
				text-transform: uppercase;
			}
		}
	}

	@media (max-width: 860px) {
		.header__logo {
			.header__logo--logo-name {
				display: none;
			}

			.header__logo-text--version {
				display: none;
			}
		}
	}

	@media (max-width: 860px) {
		.header__logo {
			margin-left: 2 0px;
		}

		/* TODO: Burger menu */
		nav {
			ul {
				li {
					font-size: 0.8em;
				}
			}
		}
	}

	@media (max-width: 500px) {
		nav {
			ul {
				li {
					font-size: 0.6em;
				}
			}
		}
	}
`

export default StyledHeader
