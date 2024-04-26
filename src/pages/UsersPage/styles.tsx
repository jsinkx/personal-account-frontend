import styled from 'styled-components'

import Colors from '@shared/colors'

const StyledUsersPage = styled.div`
	margin-top: 50px;

	h2 {
		display: flex;
		justify-content: center;
		align-items: center;
		user-select: none;
		font-size: 1.6em;

		span {
			margin-left: 5px;
		}
	}

	.list {
		margin: 0;
		padding: 0;
		list-style-type: none;

		&__item {
			min-width: 300px;
			width: 40%;
			margin-inline: auto;
			padding: 20px;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			background-color: ${({ theme }) => theme.element.defaultBackgroundColor};
			border-radius: 10px;
			box-sizing: border-box;
			cursor: pointer;
		}

		&__user {
			gap: 8px;
			margin-bottom: 16px;
			color: ${({ theme }) => theme.text.defaultFontColor};

			a {
				color: ${({ theme }) => theme.text.primaryFontColor};
				text-decoration: none;
				transition: all 0.3s ease;

				&:hover,
				&:active,
				&:focus,
				&.active {
					opacity: 0.65;
				}
			}

			&-avatar {
				flex-shrink: 0;
				width: 50px;
				height: 50px;
				border-radius: 100%;
				overflow: hidden;
				user-select: none;
			}

			&-img {
				width: 50px;
				height: 50px;
			}

			&-role {
				margin: 0 0 0 auto;
				user-select: none;

				&_bright {
					position: relative;
					background: ${({ theme }) => theme.element.backgroundColor};

					&:before {
						content: '';
						position: absolute;
						filter: blur(10px);
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						mix-blend-mode: screen;
						background-image: repeating-linear-gradient(
							45deg,
							${Colors.BLUE_WISH},
							${Colors.BLUE_WISH} 1em,
							${Colors.BLUE_WISH} 50%
						);
						background-size:
							3em 3em,
							2em 2em;
						animation-name: Pooring;
						animation-duration: 1s;
						animation-timing-function: linear;
						animation-iteration-count: infinite;
						animation-direction: alternate;
					}
				}
			}

			&-info {
			}
		}
	}

	@media screen and (max-width: 992px) {
		.list {
			&__user {
				&-role {
					margin-right: 45vw;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.list {
			&__user {
				&-role {
					margin-right: 20vw;
				}
			}
		}
	}

	@media screen and (max-width: 576px) {
		.list {
			&__user {
				&-role {
					margin-right: 0;
					font-size: 14px;
				}
			}
		}
	}
`

export default StyledUsersPage
