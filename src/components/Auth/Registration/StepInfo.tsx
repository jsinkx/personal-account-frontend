import React from 'react'

import Colors from '../../../shared/colors'

import IconButton from '../../IconButton'
import ArrowBackIcon from '../../Icons/ArrowIBackIcon'

type StepInfoProps = {
	maxSteps: number
	currentStep: number
	handleClickStepBack: React.MouseEventHandler<HTMLButtonElement>
}

const StepInfo: React.FC<StepInfoProps> = React.memo(({ maxSteps, currentStep, handleClickStepBack }) => (
	<div className="auth__step-info">
		<IconButton
			disabled={!(currentStep > 1)}
			onClick={handleClickStepBack}
			className="auth__step-info--back-button"
		>
			<ArrowBackIcon size="100px" color={Colors.BLUE_WISH} />
		</IconButton>
		<span>
			Шаг {currentStep} из {maxSteps}
		</span>
	</div>
))

export default React.memo(StepInfo)
