import React from 'react'

import Colors from '../../shared/colors'

type EyeOpenIconProps = {
	size?: string
	color?: string
} & React.ComponentPropsWithoutRef<'svg'>

const EyeOpenIcon: React.FC<EyeOpenIconProps> = ({ size = '20px', color = Colors.BLACK, ...props }) => {
	return (
		<svg width={size} height={size} fill={color} viewBox="0 0 1024 1024" {...props}>
			<path
				d="M512 384a128 128 0 0 0-128 128 128 128 0 0 0 128 128 128 128 0 0 0 128-128 128 128 0 0 0-128-128m0 341.333333a213.333333 213.333333 0 0 1-213.333333-213.333333 213.333333 213.333333 0 0 1 213.333333-213.333333 213.333333 213.333333 0 0 1 213.333333 213.333333 213.333333 213.333333 0 0 1-213.333333 213.333333m0-533.333333C298.666667 192 116.48 324.693333 42.666667 512c73.813333 187.306667 256 320 469.333333 320s395.52-132.693333 469.333333-320c-73.813333-187.306667-256-320-469.333333-320z"
				fill=""
			/>
		</svg>
	)
}

export default EyeOpenIcon
