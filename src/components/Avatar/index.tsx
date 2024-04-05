import React, { useState } from 'react'

import Colors from '@shared/colors'

import { Avatar as AvatarMUI } from '@mui/material'

import StyledAvatarFullSize from './styles'

type AvatarProps = {
	src?: string
	color?: string
	firstName: string
	lastName: string
	size?: string
	isOnline?: boolean
	fullSize?: boolean
	isDisabled?: boolean
} & React.ComponentProps<typeof AvatarMUI>

const nameSign = (firstName: string, lastName: string) =>
	`${firstName[0]!.toUpperCase()}${lastName[0]!.toUpperCase()}`

const Avatar: React.FC<AvatarProps> = ({
	src = '',
	color,
	firstName,
	lastName,
	size = '50px',
	isOnline,
	fullSize,
	className = '',
	style,
	isDisabled,
	...props
}) => {
	const [isErrorSrc, setIsErrorSrc] = useState(false)

	const handleErrorImg = () => {
		setIsErrorSrc(true)
	}

	return fullSize ? (
		<StyledAvatarFullSize $size={size} $color={color} className={className} style={style}>
			{!isErrorSrc ? <img src={src} alt={firstName} onError={handleErrorImg} /> : nameSign(firstName, lastName)}
		</StyledAvatarFullSize>
	) : (
		<div
			style={
				isDisabled
					? {
							cursor: 'default',
							opacity: '0.44',
						}
					: {}
			}
		>
			<AvatarMUI
				sx={{
					width: size,
					height: size,
					fontSize: `calc(${size} / 2)`,
					color: Colors.WHITE,
					backgroundColor: color,
					zIndex: '1',
				}}
				src={src}
				className={className}
				{...props}
			>
				{!src && nameSign(firstName, lastName)}
			</AvatarMUI>
			{isOnline !== undefined && (
				<div
					title={isOnline ? 'В сети' : 'Не в сети'}
					className="avatar--user-status"
					style={{
						position: 'absolute',
						width: `calc(${size} / 4)`,
						height: `calc(${size} / 4)`,
						margin: '-27px 0 0 50px',
						borderRadius: '50%',
						border: `4px solid ${Colors.WHITE}`,
						backgroundColor: isOnline ? Colors.GREEN_ONLINE : Colors.GREY_OFFLINE,
						zIndex: '1',
					}}
				/>
			)}
		</div>
	)
}

export default Avatar
