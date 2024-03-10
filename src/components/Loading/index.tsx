import React from 'react'

import StyledLoading from './styles'

type LoadingProps = {
	animationDurationSec?: number
} & React.ComponentPropsWithoutRef<'div'>

const Loading: React.FC<LoadingProps> = ({ animationDurationSec = 5, ...props }) => {
	return (
		<StyledLoading $animationDurationSec={animationDurationSec} {...props}>
			<div className="pl">
				<div className="pl__surface">
					<div className="pl__prism">
						<div className="pl__side"></div>
						<div className="pl__side pl__side--fade2 pl__side--shadow-back1"></div>
						<div className="pl__side pl__side--fade1"></div>
						<div className="pl__side pl__side--fade4"></div>
						<div className="pl__side pl__side--fade3"></div>
					</div>
					<div className="pl__prism">
						<div className="pl__side"></div>
						<div className="pl__side pl__side--fade1 pl__side--shadow-right1"></div>
						<div className="pl__side pl__side--fade4 pl__side--shadow-right2"></div>
						<div className="pl__side pl__side--fade3"></div>
						<div className="pl__side pl__side--fade2 pl__side--shadow-left1"></div>
					</div>
					<div className="pl__prism">
						<div className="pl__side"></div>
						<div className="pl__side pl__side--fade3 pl__side--shadow-back2"></div>
						<div className="pl__side pl__side--fade2"></div>
						<div className="pl__side pl__side--fade1"></div>
						<div className="pl__side pl__side--fade4 pl__side--shadow-left2"></div>
					</div>
					<div className="pl__prism">
						<div className="pl__side"></div>
						<div className="pl__side"></div>
						<div className="pl__side"></div>
						<div className="pl__side pl__side--fade2"></div>
						<div className="pl__side pl__side--fade1"></div>
					</div>
				</div>
			</div>
		</StyledLoading>
	)
}

export default Loading
