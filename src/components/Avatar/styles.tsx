import styled from 'styled-components'

type StyledAvatarProps = {
	$color: string
}

const StyledAvatar = styled.div<StyledAvatarProps>`
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 50%;
	background-color: ${({ $color }) => $color};
	box-sizing: border-box;
	user-select: none;

	img {
		width: 100%;
		height: auto;
		border-radius: 50%;
	}

	span {
		margin-top: -4px;
		font-size: 20px;
		font-weight: 400;
		color: white;
	}
`

export default StyledAvatar
