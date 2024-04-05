import styled from 'styled-components'

import Colors from '@shared/colors'

type StyledInputWrapperProps = {
	$inputHeight: string
	$inputWidth: string
	$disabled: boolean
}

const StyledInputWrapper = styled.div<StyledInputWrapperProps>`
	display: flex;
	align-items: center;
	width: ${({ $inputWidth }) => $inputWidth};
	height: ${({ $inputHeight }) => $inputHeight};
	padding: 5px 10px;
	border: 1px solid ${Colors.INACTIVE_GREY_FONT};
	border-radius: 5px;
	box-sizing: border-box;
	background: transparent;
	transition: all 0.2s ease-in-out;

	${({ $disabled }) =>
		$disabled &&
		`
		pointer-events: none;
		cursor: default;
		opacity: 0.45;
	`}

	input {
		width: 100%;
		height: 100%;
		font-size: 1em;
		color: ${Colors.BLACK};
		border: none;
		margin: 0;
		padding: 0;
		transition: all 0.2s ease-in-out;
		background: transparent;
		box-sizing: border-box;
		outline: none;

		&::placeholder {
			color: #71767b;
			user-select: none;
		}

		&:-webkit-autofill {
			-webkit-text-fill-color: ${Colors.BLACK};
			color: ${Colors.BLACK};
			box-shadow: 0 0 0px 1000px ${Colors.WHITE} inset;
			font-size: 1em;
		}
	}

	::selection {
		color: ${Colors.WHITE};
		background-color: ${Colors.BLUE_WISH};
	}
`

export default StyledInputWrapper
