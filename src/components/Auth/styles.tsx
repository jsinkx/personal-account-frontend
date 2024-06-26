import styled from 'styled-components'

import Error from '@components/Error'
import Input from '@components/Input'

export const StyledInput = styled(Input)`
	width: 100%;
	height: 45px;
	margin-bottom: 20px;
`

type StyledStepProps = {
	$isActive: boolean
}

export const StyledStep = styled.div<StyledStepProps>`
	${({ $isActive }) => !$isActive && 'display: none;'}
`

export const StyledErrorInStep = styled(Error)`
	margin-bottom: 5px;
	text-align: left;
`

const StyledAuth = styled.div`
	max-width: 400px;
	display: flex;
	padding-block: 30px;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: ${({ theme }) => theme.components.auth.backgroundColor};
	border-radius: 10px;
	box-sizing: border-box;

	form {
		width: 82%;
	}

	h2 {
		margin-block: 10px;
		user-select: none;
	}

	.navigation {
		margin-top: 10px;
		margin-bottom: 20px;
		display: flex;

		&__button {
			margin-inline: 10px;

			&--active {
				opacity: 1;
			}
		}
	}

	.auth {
		&__step-info {
			width: 100%;
			margin-bottom: 15px;
			display: flex;
			align-items: center;
			font-size: 0.9em;
			user-select: none;

			&--back-button {
				margin-left: -5px;
				margin-right: 5px;
				padding: 1px;
				box-sizing: border-box;
			}
		}

		&__parameters {
			margin-bottom: 20px;
			display: flex;
			flex-direction: column;
			justify-content: left;
			text-align: left;
			user-select: none;

			.MUI-checkbox {
				margin-left: 10px;
				margin-right: 3px;
				padding: 0;
			}

			.is-agree,
			.is-save-user {
				margin-bottom: 10px;
				display: flex;
				text-align: left;
				user-select: none;

				@media (max-width: 432px) {
					span {
						font-size: 0.9em;
					}
				}
			}

			.is-agree {
				&__navlink {
					margin-left: 5px;
					color: ${({ theme }) => theme.text.primaryFontColor};

					&:hover {
						opacity: 0.55;
					}
				}
			}

			.is-save-user {
				margin-bottom: 0;
			}
		}

		&__forgot-password {
			margin-bottom: 10px;
			color: ${({ theme }) => theme.text.primaryFontColor};

			&:hover {
				opacity: 0.55;
			}
		}

		&__login__availability-message {
			margin-bottom: 2px;
			text-align: left;
			color: ${({ theme }) => theme.text.errorFontColor};
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			user-select: none;

			&--success {
				color: ${({ theme }) => theme.text.successFontColor};
			}
		}
	}
`

export default StyledAuth
