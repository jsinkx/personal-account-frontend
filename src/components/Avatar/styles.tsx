import styled from 'styled-components'

type StyledAvatarFullSizeProps = {
	$size: string
	$color: string
}

const StyledAvatarFullSize = styled.div<StyledAvatarFullSizeProps>`
	width: 100%;
	height: ${({ $size }) => $size};
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	font-size: ${({ $size }) => `calc(${$size} / 2)`};
	color: ${({ theme }) => theme.text.defaultFontColor};
	background-color: ${({ $color }) => $color};
	user-select: none;

	img {
		width: 100%;
		height: 100%;
		user-select: none;
		background-size: cover;
	}
`

export default StyledAvatarFullSize
