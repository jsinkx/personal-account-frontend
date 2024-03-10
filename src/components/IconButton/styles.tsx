import styled from 'styled-components'

import Button from '../Button'

const StyledIconButton = styled(Button)`
	padding: 3px;
	background-color: initial;
	box-sizing: border-box;
	transition: 0.2s all ease-in-out;

	&:hover {
		background-color: #00000038;
	}
`

export default StyledIconButton
