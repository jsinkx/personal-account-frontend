import React, { useState } from 'react'

import StyledTooltip from './styles'

type TooltipProps = {
	text: string
} & React.ComponentPropsWithoutRef<'div'>

// TODO: make it functional

const Tooltip: React.FC<TooltipProps> = ({ text, children, ...props }) => {
	const [showTooltip, setShowTooltip] = useState(false)

	return (
		<StyledTooltip
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
			{...props}
		>
			{children}
			{showTooltip && <div className="tooltip__show-box">{text}</div>}
		</StyledTooltip>
	)
}

export default Tooltip
