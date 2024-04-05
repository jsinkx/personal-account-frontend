import styled from 'styled-components'

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
	border: 1px solid ${({ theme }) => theme.element.inactiveBorderColor};
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
		color: ${({ theme }) => theme.text.defaultFontColor};
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
			-webkit-text-fill-color: ${({ theme }) => theme.text.defaultFontColor};
			color: ${({ theme }) => theme.text.defaultFontColor};
			box-shadow: 0 0 0px 1000px ${({ theme }) => theme.element.defaultBackgroundColor} inset;
			font-size: 1em;
		}
	}

	::selection {
		color: ${({ theme }) => theme.selection.defaultFontColor};
		background-color: ${({ theme }) => theme.selection.defaultBackgroundColor};
	}
`

export default StyledInputWrapper
