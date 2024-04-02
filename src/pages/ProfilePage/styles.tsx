import styled from 'styled-components'

import Colors from '../../shared/colors'

type StyledProfileProps = {
	$color: string
}

const StyledProfile = styled.div<StyledProfileProps>`
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
				margin-top: -110px;
				margin-left: 80px;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: ${Colors.WHITE};
				border-radius: 25px;
				box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.12);

				.profile-card__avatar,
				.profile-card__avatar img {
					border-top-right-radius: 25px;
					border-top-left-radius: 25px;
					pointer-events: none;
				}

				.profile-card__info {
					margin: 20px;
					margin-top: 0;

					h3 {
						margin-bottom: 0;
						display: flex;
						align-items: center;
						font-size: 1.3em;
						font-weight: bold;

						.profile-card__info__status {
							width: 12px;
							height: 12px;
							margin-top: 2px;
							margin-left: 5px;
							border-radius: 50%;
							background-color: ${Colors.GREEN_ONLINE};
						}
					}

					.profile-card__info__name {
						margin-block: 10px;
						font-size: 1.1em;
					}

					.profile-card__info__last-online,
					.profile-card__info__connections {
						width: 100%;
						user-select: none;
					}

					.profile-card__info__last-online {
						width: 90%;
						font-size: 0.95em;
					}

					.profile-card__info__description {
						max-width: 229px;
						margin-top: 15px;
						color: #6e7082;
						max-height: 90px;
						overflow-y: hidden;
					}

					.profile-card__info__connections {
						width: 100%;
						margin: 0;
						margin-top: 20px;
						padding: 0;

						li {
							height: 20px;
							margin-bottom: 20px;
							display: flex;
							align-items: center;
							text-align: center;
							list-style: none;
							font-size: 0.95em;

							span {
								height: 20px;
								margin-left: 5px;
								display: flex;
								justify-content: center;
								text-align: center;
							}
						}

						.profile-card__info__connections__connect__email {
							display: inline-flex;
							user-select: none;

							span {
								cursor: pointer;

								&:hover {
									opacity: 0.6;
								}
							}
						}
					}
				}
			}

			.profile__content {
				width: 1200px;
				min-height: 370px;
				margin-left: 170px;
				margin-right: 100px;
				padding-bottom: 20px;
				display: flex;
				justify-content: center;
				flex-direction: column;
				align-items: center;
				text-align: center;
				background-color: ${Colors.WHITE};
				border: 1px solid ${Colors.INACTIVE_LIGHT_GREY_BORDER};
				border-radius: 5px;

				h3 {
					color: ${Colors.INACTIVE_GREY_FONT};
					user-select: none;
				}

				@media (max-width: 1440px) {
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
