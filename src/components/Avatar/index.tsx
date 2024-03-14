import React from 'react'

import randomColor from '../../utils/random-color'

import StyledAvatar from './styles'

type AvatarProps = {
	src?: string
	color?: string
	firstName: string
	lastName: string
} & React.ComponentPropsWithoutRef<'div'>

const Avatar: React.FC<AvatarProps> = ({ src, color, firstName, lastName, ...props }) => {
	const nameSign = `${firstName[0]!.toUpperCase()}${lastName[0]!.toUpperCase()}`

	return (
		<StyledAvatar $color={color || randomColor()} {...props}>
			{src ? <img src={src} alt={nameSign} /> : <span>{nameSign}</span>}
		</StyledAvatar>
	)
}

export default Avatar
