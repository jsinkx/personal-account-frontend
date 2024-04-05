import React, { useState } from 'react'

import InputShowPasswordButton from './InputShowPasswordButton'
import StyledInputWrapper from './styles'

type InputProps = {
	height?: string
	width?: string
	style?: React.CSSProperties
	className?: string
} & React.ComponentPropsWithRef<'input'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ height = '60px', width = '300px', style, className, type = 'text', disabled = false, ...props }, ref) => {
		const [isShowPassword, setIsShowPassword] = useState(false)

		const handleClickShowPassword: React.MouseEventHandler<HTMLButtonElement> = (event) => {
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
				{type === 'password' && (
					<InputShowPasswordButton
						height={height}
						isShowPassword={isShowPassword}
						handleClickShowPassword={handleClickShowPassword}
					/>
				)}
			</StyledInputWrapper>
		)
	},
)

export default Input
