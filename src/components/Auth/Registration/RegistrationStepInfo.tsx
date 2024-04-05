import React from 'react'

import Colors from '@shared/colors'

import IconButton from '@components/IconButton'
import ArrowBackIcon from '@components/Icons/ArrowIBackIcon'

type RegistrationStepInfoProps = {
	maxSteps: number
	currentStep: number
	handleClickStepBack: React.MouseEventHandler<HTMLButtonElement>
}

const RegistrationStepInfo: React.FC<RegistrationStepInfoProps> = ({
	maxSteps,
	currentStep,
	handleClickStepBack,
}) => (
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
)

export default React.memo(RegistrationStepInfo)
