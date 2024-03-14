import React, { useState } from 'react'

import Colors from '../../shared/colors'

import IconButton from '../IconButton'
import EyeCloseIcon from '../Icons/EyeCloseIcon'
import EyeOpenIcon from '../Icons/EyeOpenIcon'

import StyledInputWrapper from './styles'

type InputProps = {
	height?: string
	width?: string
	style?: React.CSSProperties
	className?: string
} & React.ComponentPropsWithRef<'input'>

const EYE_ICON_COLOR = Colors.BLACK

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ height = '60px', width = '300px', style, className, type = 'text', disabled = false, ...props }, ref) => {
		const [isShowPassword, setIsShowPassword] = useState(false)

		const EYE_ICON_SIZE = `calc(${height}/1.55)`

		const SwitchEyeIcon = isShowPassword ? (
			<EyeCloseIcon size={EYE_ICON_SIZE} color={EYE_ICON_COLOR} />
		) : (
			<EyeOpenIcon size={EYE_ICON_SIZE} color={EYE_ICON_COLOR} />
		)

		const handleClickIconButton: React.MouseEventHandler<HTMLButtonElement> = (event) => {
			event.preventDefault()
			setIsShowPassword((p) => !p)
		}

		return (
			<StyledInputWrapper
				$inputHeight={height}
				$inputWidth={width}
				$disabled={disabled}
				style={style}
				className={className}
			>
				{/* 
					isShowPassword by default is false. 
					Switch this flag can be only by button, which render if input type is password.
				*/}
				<input type={!isShowPassword ? type : 'text'} disabled={disabled} ref={ref} {...props} />
				{type === 'password' ? (
					<IconButton size={EYE_ICON_SIZE} onClick={handleClickIconButton}>
						{SwitchEyeIcon}
					</IconButton>
				) : null}
			</StyledInputWrapper>
		)
	},
)

export default Input
