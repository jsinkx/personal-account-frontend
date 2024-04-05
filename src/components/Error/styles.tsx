import styled from 'styled-components'

const StyledError = styled.div`
	padding: 5px 10px;
	color: ${({ theme }) => theme.text.defaultFontColor};
	text-align: left;
	background-color: ${({ theme }) => theme.element.errorBackgroundColor};
	border: 1px solid ${({ theme }) => theme.text.errorFontColor};
	border-radius: 5px;
	box-sizing: border-box;

	&::selection {
		color: ${({ theme }) => theme.selection.errorFontColor};
		background-color: ${({ theme }) => theme.selection.errorBackgroundColor};
	}
`

export default StyledError
