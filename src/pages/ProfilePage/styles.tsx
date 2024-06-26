import styled from 'styled-components'

import Colors from '@shared/colors'

type StyledProfileProps = {
	$color: string
}

const StyledProfile = styled.div<StyledProfileProps>`
	::selection {
		background-color: ${({ $color }) => $color};
	}

	section {
		margin: 0 auto;
		display: flex;
		flex-direction: column;

		.profile__background {
			width: 100%;
			height: 200px;
			margin-bottom: 50px;
			background-color: ${({ $color }) => $color};
		}

		.profile {
			display: flex;

			.profile-card {
				min-width: 260px;
				max-width: 260px;
				min-height: 370px;
				max-height: 700px;
				margin-top: -110px;
				margin-left: 80px;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: ${({ theme }) => theme.element.defaultBackgroundColor};
				border-radius: 25px;
				box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.element.elementBoxShadow};

				&__avatar,
				&__avatar img {
					border-top-right-radius: 25px;
					border-top-left-radius: 25px;
					pointer-events: none;
				}

				&__info {
					width: 229px;
					margin: 20px;
					margin-top: 0;

					&__name {
						margin-bottom: 0;
						display: flex;
						align-items: center;
						font-size: 1.3em;
						font-weight: bold;
						text-align: left;
						flex-wrap: wrap;

						span:first-child {
							margin-right: 4px;
						}

						&__status {
							width: 12px;
							height: 12px;
							margin-top: 2px;
							margin-left: 5px;
							border-radius: 50%;
							background-color: ${Colors.GREEN_ONLINE};
						}
					}

					&__name {
						margin-block: 10px;
						font-size: 1.1em;
					}

					&__last-online,
					&__connections {
						width: 100%;
						user-select: none;
					}

					&__last-online {
						width: 90%;
						font-size: 0.95em;
					}

					&__description {
						margin: 10px 0;
						color: ${({ theme }) => theme.text.secondaryFontColor};
						max-height: 90px;
						word-wrap: break-word;
						user-select: none;
					}

					&__connections {
						margin: 0;
						margin-top: 20px;
						padding: 0;

						li {
							height: 20px;
							margin-bottom: 20px;
							display: flex;
							align-items: center;
							list-style: none;
							font-size: 0.95em;

							span {
								height: 20px;
								margin-left: 5px;
								display: flex; // or set block for ellipsis text overflow
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}

						&__connections__connect__email {
							display: inline-flex;
							user-select: none;

							&--wrap {
								margin: 0;
								cursor: pointer;

								&:hover {
									opacity: 0.6;
								}

								span {
									max-width: 193px; // FIX: Long emails will be cut
								}
							}
						}
					}
				}
			}

			.profile__content {
				width: 1200px;
				min-height: 400px;
				margin-top: -110px;
				margin-left: 120px;
				margin-right: 100px;
				padding-bottom: 20px;
				background-color: ${({ theme }) => theme.element.defaultBackgroundColor};
				border-radius: 25px;
				box-shadow: 0px 0px 30px 0px ${({ theme }) => theme.element.elementBoxShadow};

				&__main-box {
					margin-top: 30px;
					margin-left: 30px;
				}

				@media (max-width: 1440px) {
					margin-top: 0;
					margin-left: 20px;
					margin-right: 55px;
				}
			}
		}
	}

	@media (max-width: 842px) {
		.profile {
			flex-direction: column;

			.profile-card {
				margin-inline: auto !important;
				margin-bottom: 30px;
			}

			.profile__content {
				width: 90% !important;
				margin-inline: auto !important;
			}
		}
	}
`

export default StyledProfile
