import styled from 'styled-components'

import Colors from '../../shared/colors'

const StyledError = styled.div`
	padding: 5px 10px;
	color: ${Colors.BLACK};
	text-align: left;
	background-color: ${Colors.SUPER_LIGHT_ERROR_RED_BACKGROUND};
	border: 1px solid ${Colors.LIGHT_ERROR_RED_BORDER};
	border-radius: 5px;
	box-sizing: border-box;

	&::selection {
		color: ${Colors.BLACK};
		background-color: ${Colors.LIGHT_ERROR_RED_BORDER};
	}
`

export default StyledError
