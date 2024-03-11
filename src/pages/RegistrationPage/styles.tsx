import styled from 'styled-components'

import Colors from '../../shared/colors'

import Registration from '../../components/Registration'

export const StyledBubblesBackground = styled.main`
	@keyframes move {
		100% {
			transform: translate3d(0, 0, 1px) rotate(360deg);
		}
	}

	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	background: ${Colors.WHITE};
	overflow: hidden;
	z-index: -1;

	span {
		width: 9vmin;
		height: 9vmin;
		border-radius: 9vmin;
		backface-visibility: hidden;
		position: absolute;
		animation: move;
		animation-duration: 3;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
	}

	span:nth-child(0) {
		color: #005cc9;
		top: 97%;
		left: 66%;
		animation-duration: 167s;
		animation-delay: -292s;
		transform-origin: 7vw 25vh;
		box-shadow: 18vmin 0 3.1899258588191515vmin currentColor;
	}
	span:nth-child(1) {
		color: #005cc9;
		top: 13%;
		left: 18%;
		animation-duration: 233s;
		animation-delay: -240s;
		transform-origin: 8vw 19vh;
		box-shadow: 18vmin 0 2.8598768597180237vmin currentColor;
	}
	span:nth-child(2) {
		color: #005cc9;
		top: 38%;
		left: 2%;
		animation-duration: 114s;
		animation-delay: -171s;
		transform-origin: 19vw 20vh;
		box-shadow: 18vmin 0 2.615807816003684vmin currentColor;
	}
	span:nth-child(3) {
		color: #005cc9;
		top: 27%;
		left: 56%;
		animation-duration: 447s;
		animation-delay: -391s;
		transform-origin: 4vw -19vh;
		box-shadow: 18vmin 0 2.8649858333286824vmin currentColor;
	}
	span:nth-child(4) {
		color: #005cc9;
		top: 95%;
		left: 21%;
		animation-duration: 14s;
		animation-delay: -382s;
		transform-origin: -11vw -11vh;
		box-shadow: -18vmin 0 2.3427598580156133vmin currentColor;
	}
	span:nth-child(5) {
		color: #005cc9;
		top: 97%;
		left: 38%;
		animation-duration: 201s;
		animation-delay: -152s;
		transform-origin: 16vw -11vh;
		box-shadow: 18vmin 0 3.0236170648592493vmin currentColor;
	}
	span:nth-child(6) {
		color: #005cc9;
		top: 85%;
		left: 28%;
		animation-duration: 376s;
		animation-delay: -368s;
		transform-origin: 3vw -17vh;
		box-shadow: 18vmin 0 2.368264638846416vmin currentColor;
	}
	span:nth-child(7) {
		color: #005cc9;
		top: 17%;
		left: 54%;
		animation-duration: 44s;
		animation-delay: -414s;
		transform-origin: -23vw -24vh;
		box-shadow: 18vmin 0 2.6467454914039177vmin currentColor;
	}
	span:nth-child(8) {
		color: #005cc9;
		top: 8%;
		left: 92%;
		animation-duration: 331s;
		animation-delay: -396s;
		transform-origin: -21vw 2vh;
		box-shadow: -18vmin 0 3.0862857414884437vmin currentColor;
	}
	span:nth-child(9) {
		color: #005cc9;
		top: 18%;
		left: 61%;
		animation-duration: 236s;
		animation-delay: -261s;
		transform-origin: 6vw -22vh;
		box-shadow: -18vmin 0 2.6709989289915166vmin currentColor;
	}
	span:nth-child(10) {
		color: #005cc9;
		top: 71%;
		left: 43%;
		animation-duration: 112s;
		animation-delay: -376s;
		transform-origin: 16vw -3vh;
		box-shadow: -18vmin 0 2.6713415123749424vmin currentColor;
	}
	span:nth-child(11) {
		color: #005cc9;
		top: 92%;
		left: 87%;
		animation-duration: 93s;
		animation-delay: -261s;
		transform-origin: 0vw 21vh;
		box-shadow: 18vmin 0 2.480623085786971vmin currentColor;
	}
	span:nth-child(12) {
		color: #005cc9;
		top: 27%;
		left: 97%;
		animation-duration: 199s;
		animation-delay: -74s;
		transform-origin: -12vw 3vh;
		box-shadow: -18vmin 0 2.7126843642064133vmin currentColor;
	}
	span:nth-child(13) {
		color: #005cc9;
		top: 55%;
		left: 26%;
		animation-duration: 66s;
		animation-delay: -25s;
		transform-origin: 21vw 10vh;
		box-shadow: -18vmin 0 2.544569024608289vmin currentColor;
	}
	span:nth-child(14) {
		color: #005cc9;
		top: 30%;
		left: 2%;
		animation-duration: 314s;
		animation-delay: -320s;
		transform-origin: -16vw 5vh;
		box-shadow: 18vmin 0 3.009117780469535vmin currentColor;
	}
`

export const StyledRegistration = styled(Registration)`
	margin: 18vh auto;
`

const StyledRegistrationPage = styled.div``

export default StyledRegistrationPage
