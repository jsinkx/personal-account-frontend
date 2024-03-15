import styled from 'styled-components'

import Error from '../Error'
import Input from '../Input'

export const StyledInput = styled(Input)`
	margin-bottom: 20px;
`

export const StyledErrorInStep = styled(Error)`
	margin-bottom: -2px;
	border-bottom: none;
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
`

const StyledLogin = styled.div`
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

	.login__navigation {
		margin-top: 10px;
		margin-bottom: 20px;
		display: flex;

		.login__navigation__button {
			margin-inline: 10px;
		}

		.login__navigation__button--active {
			opacity: 1;
		}
	}

	h2 {
		margin-block: 10px;
		user-select: none;
	}

	.login--error {
		width: 100%;
		margin-bottom: 10px;
	}
`

export default StyledLogin
