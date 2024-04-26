import styled from 'styled-components'

import Colors from '@shared/colors'

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
	color: ${Colors.WHITE};
	background-color: ${({ $color }) => $color};
	user-select: none;
	/* box-sizing: border-box; */ // Gives bug border, don't use it

	img {
		width: 100%;
		height: 100%;
		user-select: none;
		background-size: cover;
	}
`

export default StyledAvatarFullSize
