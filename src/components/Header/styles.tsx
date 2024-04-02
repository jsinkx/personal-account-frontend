import { MenuItem } from '@mui/material'

import styled from 'styled-components'

import Colors from '../../shared/colors'

export const StyledMenuItem = styled(MenuItem)`
	font-weight: 400 !important;
	font-family: 'Segoe UI' !important;
`

const StyledHeader = styled.header`
	padding: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${Colors.WHITE};
	box-sizing: border-box;
	box-shadow: 0 1px 0 rgba(0, 0, 0, 0.08);
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
			font-family: 'Segoe UI';

			li {
				margin-left: 40px;
				font-size: 1.2em;
				font-weight: 500;
				text-transform: uppercase;
			}

			.header__navigation__logout {
				padding: 0;
				color: ${Colors.RED};
				text-transform: uppercase;
			}
		}

		.header__notifications {
			margin-left: 0;
		}

		.header__avatar__menu {
			margin-left: 15px;
			cursor: pointer;
			font-weight: normal;
		}
	}

	.menu-notifications {
		width: 300px;
		display: flex;
		justify-content: center;

		ul {
			margin: 0;

			li {
				width: 100%;
				border-top: 1px solid ${Colors.INACTIVE_LIGHT_GREY_BORDER};
				border-bottom: 1px solid ${Colors.INACTIVE_LIGHT_GREY_BORDER};

				p {
				}
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
