import React from 'react'

import AvatarMUI from '@mui/material/Avatar'

import Colors from '../../shared/colors'

type AvatarProps = {
	src?: string
	color?: string
	firstName: string
	lastName: string
	size?: string
	isOnline?: boolean
} & React.ComponentProps<typeof AvatarMUI>

const Avatar: React.FC<AvatarProps> = ({
	src = '',
	color,
	firstName,
	lastName,
	size = '50px',
	isOnline,
	...props
}) => {
	const nameSign = `${firstName[0]!.toUpperCase()}${lastName[0]!.toUpperCase()}`

	return (
		<div>
			<AvatarMUI
				sx={{
					width: size,
					height: size,
					fontSize: `calc(${size} / 2)`,
					backgroundColor: color,
					fontFamily: 'Segoe UI',
					zIndex: '1',
				}}
				src={src}
				{...props}
			>
				{!src && nameSign}
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
