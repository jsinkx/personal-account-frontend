import React from 'react'

import Colors from '@shared/colors'

import IconButton from '@components/IconButton'
import EyeCloseIcon from '@components/Icons/EyeCloseIcon'
import EyeOpenIcon from '@components/Icons/EyeOpenIcon'

type InputShowPasswordButtonProps = {
	height: string
	isShowPassword: boolean
	handleClickShowPassword: React.MouseEventHandler<HTMLButtonElement>
}
const EYE_ICON_COLOR = Colors.BLACK

const InputShowPasswordButton: React.FC<InputShowPasswordButtonProps> = ({
	height,
	isShowPassword,
	handleClickShowPassword,
}) => {
	const EYE_ICON_SIZE = `calc(${height}/1.55)`

	return (
		<IconButton size={EYE_ICON_SIZE} onClick={handleClickShowPassword}>
			{isShowPassword ? (
				<EyeCloseIcon size={EYE_ICON_SIZE} color={EYE_ICON_COLOR} />
			) : (
				<EyeOpenIcon size={EYE_ICON_SIZE} color={EYE_ICON_COLOR} />
			)}
		</IconButton>
	)
}

export default React.memo(InputShowPasswordButton)
