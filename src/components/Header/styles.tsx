import styled from 'styled-components'

import { MenuItem } from '@mui/material'

export const StyledMenuItem = styled(MenuItem)`
	font-weight: 400 !important;
`

const StyledHeader = styled.header`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.element.defaultBackgroundColor};
	box-sizing: border-box;
	box-shadow: 0 1px 0 ${({ theme }) => theme.element.defaultBoxShadow};
	position: sticky;
	top: 0;
	z-index: 9;

	.header__logo {
		margin-left: 60px;
	}

	nav {
		margin-right: 50px;

		ul {
			margin: 0;
			padding: 0;
			display: flex;
			align-items: center;
			list-style: none;
			box-sizing: border-box;

			li {
				margin-left: 40px;
				font-size: 1.2em;
				font-weight: 500;
				text-transform: uppercase;
			}
		}

		.header__notifications {
			margin-left: 0;
		}

		.header__avatar__menu {
			margin-left: 20px;
			font-weight: normal;

			.header__avatar__menu__button {
				cursor: pointer;
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
