import styled from 'styled-components'

import Colors from '../../shared/colors'

import Error from '../Error'
import Input from '../Input'

export const StyledInput = styled(Input)`
	margin-bottom: 20px;
`

type StyledStepProps = {
	$isActive: boolean
}

export const StyledStep = styled.div<StyledStepProps>`
	${({ $isActive }) => !$isActive && 'display: none;'}
`

export const StyledErrorInStep = styled(Error)`
	margin-bottom: -2px;
	border-bottom: none;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
`

const StyledAuth = styled.div`
	width: 400px;
	display: flex;
	padding-block: 30px;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 10px;
	box-sizing: border-box;

	form {
		width: 300px;
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

		.auth--is-agree,
		.auth--is-save-user {
			display: flex;
			text-align: left;
			margin-bottom: 10px;
			user-select: none;

			input {
				margin-right: 5px;
				cursor: pointer;
			}
		}

		.auth--is-save-user {
			margin-bottom: 0;
		}

		.auth--is-agree__navlink {
			margin-left: 5px;
			color: ${Colors.BLUE_WISH};

			&:hover {
				opacity: 0.55;
			}
		}
	}

	.auth__login__availability-message {
		margin-left: 5px;
		margin-bottom: 2px;
		text-align: left;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		user-select: none;
	}

	.auth--error {
		width: 100%;
		margin-bottom: 10px;
	}
`

export default StyledAuth
