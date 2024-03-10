import React from 'react'

import { ButtonProps } from '../Button'

import StyledIconButton from './styles'

type IconButtonProps = {
	size?: string
	children: React.ReactNode
} & ButtonProps

const IconButton: React.FC<IconButtonProps> = ({ size = '23px', children, ...props }) => {
	return (
		<StyledIconButton width={size} height={size} {...props}>
			{children}
		</StyledIconButton>
	)
}

export default IconButton
