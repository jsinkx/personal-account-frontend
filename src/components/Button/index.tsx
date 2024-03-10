import React from 'react'

import Colors from '../../shared/colors'

import StyledButton, { ButtonVariant } from './styles'

export type ButtonProps = {
	variant?: ButtonVariant
	width?: string
	height?: string
	textColor?: string
	color?: string
	children: React.ReactNode
	disabled?: boolean
} & React.ComponentPropsWithoutRef<'button'>

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'contained',
	width = 'auto',
	height = 'auto',
	textColor = Colors.WHITE,
	color = Colors.BLACK,
	disabled,
	...props
}) => {
	return (
		<StyledButton
			$variant={variant}
			$width={width}
			$height={height}
			$textColor={textColor}
			$color={color}
			disabled={disabled}
			{...props}
		>
			{children}
		</StyledButton>
	)
}

export default Button
