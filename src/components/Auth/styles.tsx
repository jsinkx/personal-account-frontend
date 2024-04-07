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
		width: 79%;
	}

	.auth__navigation {
		margin-top: 10px;
		margin-bottom: 20px;
		display: flex;

		.auth__navigation__button {
			margin-inline: 10px;
		}

		.auth__navigation__button--active {
			opacity: 1;
		}
	}

	h2 {
		margin-block: 10px;
		user-select: none;
	}

	.auth__step-info {
		width: 100%;
		margin-bottom: 15px;
		display: flex;
		align-items: center;
		font-size: 0.9em;
		user-select: none;

		.auth__step-info--back-button {
			margin-left: -5px;
			margin-right: 5px;
			padding: 1px;
			box-sizing: border-box;
		}
	}

	.auth__parameters {
		margin-bottom: 20px;
		display: flex;
		flex-direction: column;
		justify-content: left;
		text-align: left;
		user-select: none;

		.auth--forgot-password {
			margin-bottom: 10px;
			color: ${({ theme }) => theme.text.primaryFontColor};

			&:hover {
				opacity: 0.55;
			}
		}

		.auth__MUI-checkbox {
			margin-left: 10px;
			margin-right: 3px;
			padding: 0;
		}

		.auth--is-agree,
		.auth--is-save-user {
			display: flex;
			text-align: left;
			margin-bottom: 10px;
			user-select: none;
		}

		.auth--is-save-user {
			margin-bottom: 0;
		}

		.auth--is-agree__navlink {
			margin-left: 5px;
			color: ${({ theme }) => theme.text.primaryFontColor};

			&:hover {
				opacity: 0.55;
			}
		}
	}

	.auth__login__availability-message {
		margin-bottom: 2px;
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		user-select: none;
	}
`

export default StyledAuth
