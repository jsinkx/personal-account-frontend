import styled from 'styled-components'

import Colors from '../../shared/colors'

import Error from '../Error'
// import Colors from '../../shared/colors'
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

const StyledRegistration = styled.div`
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

	.registration__navigation {
		margin-top: 10px;
		margin-bottom: 20px;
		display: flex;

		.registration__navigation__button {
			margin-inline: 10px;
		}
	}

	.header__logo {
		margin-bottom: 20px;
		display: flex;
		align-items: center;
		user-select: none;
		color: black;
		transition: all 0.3s ease;

		img {
			width: 60px;
			height: 60px;
			user-select: none;
		}

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

	h2 {
		margin-block: 10px;
		user-select: none;
	}

	.registration__step-info {
		width: 100%;
		margin-bottom: 15px;
		display: flex;
		align-items: center;
		font-size: 0.9em;
		user-select: none;

		.registration__step-info--back-button {
			margin-left: -5px;
			margin-right: 5px;
			padding: 1px;
			box-sizing: border-box;
		}
	}

	.registration--agree {
		margin-bottom: 20px;
		display: flex;
		justify-content: left;
		user-select: none;

		input {
			margin-right: 5px;
			cursor: pointer;
		}

		.registration--agree__navlink {
			margin-left: 5px;
			color: ${Colors.BLUE_WISH};

			&:hover {
				opacity: 0.55;
			}
		}
	}

	.registration--error {
		width: 100%;
		margin-bottom: 10px;
	}
`

export default StyledRegistration
