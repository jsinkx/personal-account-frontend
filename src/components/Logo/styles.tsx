import styled from 'styled-components'

const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	user-select: none;
	color: ${({ theme }) => theme.text.defaultFontColor};
	transition: all 0.3s ease;

	&:hover,
	:active,
	:focus {
		color: ${({ theme }) => theme.text.primaryFontColor};
	}

	.header__logo--logo-name {
		margin-left: 10px;
		font-size: 2em;
		font-family: Roboto;
		font-weight: bold;
	}

	.header__logo-text--version {
		margin-left: 10px;
		color: ${({ theme }) => theme.text.inactiveFontColor};
		font-size: 1.2em;
		font-family: Consolas;
	}

	img {
		width: 60px;
		height: 60px;
		user-select: none;
	}
`

export default StyledLogo
