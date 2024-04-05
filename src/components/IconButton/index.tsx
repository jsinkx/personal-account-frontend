import React from 'react'

import { ButtonProps } from '@components/Button'

import StyledIconButton from './styles'

type IconButtonProps = {
	size?: string
} & ButtonProps

const IconButton: React.FC<IconButtonProps> = ({ size = '20px', children, ...props }) => {
	return (
		<StyledIconButton width={size} height={size} {...props}>
			{children}
		</StyledIconButton>
	)
}

export default IconButton
