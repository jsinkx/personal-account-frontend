import styled from 'styled-components'

import Input from '../Input'

export const StyledInput = styled(Input)`
	margin-bottom: 20px;
`

type StyledStepProps = {
	$isActive: boolean
}

export const StyledStep = styled.div<StyledStepProps>`
	${({ $isActive }) => !$isActive && 'display: none;'}
`

const StyledRegistration = styled.div`
	width: 500px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;

	h2 {
		margin-block: 10px;
		user-select: none;
	}

	.registration__step-info {
		width: 100%;
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		font-size: 0.9em;
		user-select: none;

		.registration__buttons--back-button {
			margin-right: 10px;
			padding: 1px;
			font-size: 1.3em;
			font-weight: bold;
			box-sizing: border-box;
		}
	}
`

export default StyledRegistration
