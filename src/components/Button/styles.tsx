import styled from 'styled-components'

export type ButtonVariant = 'text' | 'contained' | 'outlined'

type StyledButtonProps = {
	$variant: ButtonVariant
	$width: string
	$height: string
	$textColor: string
	$color: string
	disabled: boolean
}

const variantStyles = (textColor: string, color: string, variant: ButtonVariant) => {
	const styles = {
		text: `
			color: ${color};
			background: transparent;
			border: none;
	`,
		contained: `
			color: ${textColor};
			background-color: ${color};
			border: 1px solid ${color};`,
		outlined: `
			color: ${color};
			background-color: transparent;
			border: 1px solid ${color};`,
	}

	return styles[variant]
}

const StyledButton = styled.button<StyledButtonProps>`
	height: ${({ $height }) => $height};
	width: ${({ $width }) => $width};
	margin: 0;
	font-weight: bold;
	border-radius: 20px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	user-select: none;
	outline: none;
	box-shadow: none;

	${({ $textColor, $color, $variant }) => variantStyles($textColor, $color, $variant)}

	${({ disabled }) =>
		disabled &&
		`
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	`}

	&:hover {
		opacity: 0.77;
	}
`

export default StyledButton
