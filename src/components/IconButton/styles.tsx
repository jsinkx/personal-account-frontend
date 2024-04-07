import styled from 'styled-components'

import Button from '@components/Button'

const StyledIconButton = styled(Button)`
	padding: 3px;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border: none;
	background: transparent;
	transition: 0.2s all ease-in-out;
	box-sizing: border-box;

	&:hover {
		opacity: 0.5;
		border: none;
		background: transparent;
	}
`

export default StyledIconButton
