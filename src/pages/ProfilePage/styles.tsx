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

		.profile__info {
			display: flex;

			.profile-card {
				width: 260px;
				min-height: 370px;
				margin-top: -110px;
				margin-left: 80px;
				padding-bottom: 20px;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: ${Colors.WHITE};
				border: 1px solid ${Colors.INACTIVE_LIGHT_GREY_BORDER};
				border-radius: 5px;

				h3 {
					font-size: 2em;
					font-weight: 400;
				}

				.profile-card__avatar {
					margin-top: 20px;
				}

				.profile-card__name {
					margin-block: 10px;
					font-size: 1.1em;
				}

				.profile-card__login {
					margin: 0;
					color: ${Colors.INACTIVE_GREY_FONT};
					font-size: 0.9em;
					font-family: Consolas;
				}

				.profile-card__last-online,
				.profile-card__connections {
					user-select: none;
				}

				.profile-card__last-online {
					width: 90%;
					font-size: 0.95em;
				}

				.profile-card__description {
					width: 240px;
					max-height: 90px;
					overflow-y: hidden;
				}

				.profile-card__connections {
					width: 100%;
					margin: 0;
					margin-left: 10px;
					padding: 0;

					li {
						margin-bottom: 3px;
						display: flex;
						align-items: center;
						text-align: center;
						list-style: none;
						font-size: 0.95em;

						.profile-card__connections__connect--icon {
							margin-right: 5px;
						}
					}

					.profile-card__connections__connect__email {
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

			.profile__info__content {
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
			}
		}
	}
`

export default StyledProfile
