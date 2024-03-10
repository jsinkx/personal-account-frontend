import styled from 'styled-components'

/**
 * @taken from https://codepen.io/jkantner/pen/rNoVLox
 * Thanks you @jkantner
 */

type StyledLoadingProps = {
	$animationDurationSec: number
}

const StyledLoading = styled.div<StyledLoadingProps>`
	box-sizing: border-box;

	--hue: 213;
	--bg: hsl(var(--hue), 90%, 90%);
	--fg: hsl(var(--hue), 90%, 10%);
	--primary1: hsl(var(--hue), 90%, 50%);
	--primary2: hsl(var(--hue), 90%, 80%);
	--trans-dur: 0.5s;
	font-size: calc(16px + (24 - 16) * (100vw - 320px) / (2560 - 320));

	color: var(--fg);

	font: 1em/1.5 sans-serif;

	transition:
		background-color var(--trans-dur),
		color var(--trans-dur);

	.pl,
	.pl__surface,
	.pl__prism {
		transform-style: preserve-3d;
	}
	.pl {
		margin: auto;
		position: relative;
		width: 16em;
		height: 16em;
		perspective: 64em;
	}
	.pl__surface,
	.pl__prism,
	.pl__side:nth-child(-n + 4),
	.pl__side:before,
	.pl__side--shadow-back1:after,
	.pl__side--shadow-back2:after,
	.pl__side--shadow-right1:after,
	.pl__side--shadow-right2:after,
	.pl__side--shadow-left1:after,
	.pl__side--shadow-left2:after {
		--anim-dur: ${({ $animationDurationSec }) => $animationDurationSec}s;
		animation: spin var(--anim-dur) linear infinite;
	}
	.pl__surface {
		position: absolute;
		top: 60%;
		left: 50%;
		transform: translate(-50%, -50%) rotateX(45deg) rotateZ(45deg);
		width: 10em;
		height: 10em;
	}
	.pl__prism {
		animation-name: slide1;
		position: absolute;
		top: 0;
		left: 0;
		width: 4.5em;
		height: 4.5em;
		transform: translate3d(0, 0, 0) rotate(90deg);
	}
	.pl__prism:nth-child(2) {
		animation-name: slide2;
		transform: translate3d(5.5em, 0, 0) rotate(180deg);
	}
	.pl__prism:nth-child(3) {
		animation-name: slide3;
		transform: translate3d(0, 5.5em, 0) rotate(0);
	}
	.pl__prism:nth-child(4) {
		animation-name: slide4;
		transform: translate3d(5.5em, 5.5em, 0) rotate(-90deg);
		visibility: hidden;
	}
	.pl__side {
		overflow: hidden;
		transform: translate3d(0, 0, 4.5em);
	}
	.pl__side,
	.pl__side:before,
	.pl__side:after {
		position: absolute;
	}
	.pl__side,
	.pl__side:before {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.pl__side:before,
	.pl__side:after {
		content: '';
		display: block;
	}
	.pl__side:before {
		animation-name: none;
		background-color: hsl(0, 0%, 100%);
	}
	.pl__side:nth-child(1) {
		animation-name: side-top;
		transform-origin: 0 50%;
	}
	.pl__side:nth-child(2) {
		animation-name: side-back;
		transform: rotateX(90deg);
		transform-origin: 0 0;
	}
	.pl__side:nth-child(3) {
		animation-name: side-right;
		transform: rotateY(90deg);
		transform-origin: 100% 0;
	}
	.pl__side:nth-child(4) {
		animation-name: side-front;
		transform: rotateX(-90deg);
		transform-origin: 0 100%;
	}
	.pl__side:nth-child(5) {
		transform: rotateY(-90deg);
		transform-origin: 0 0;
	}
	.pl__side:nth-child(2):before,
	.pl__side:nth-child(4):before {
		background-color: var(--primary1);
	}
	.pl__side:nth-child(3):before,
	.pl__side:nth-child(5):before {
		background-color: var(--primary2);
	}
	.pl__side--shadow-back1:after,
	.pl__side--shadow-back2:after,
	.pl__side--shadow-right1:after,
	.pl__side--shadow-right2:after,
	.pl__side--shadow-left1:after,
	.pl__side--shadow-left2:after {
		background-color: hsla(var(--hue), 90%, 50%, 0.5);
		top: 0;
		left: 0;
		width: 100%;
		height: 75%;
	}
	.pl__side--shadow-right2:after,
	.pl__side--shadow-left1:after,
	.pl__side--shadow-left2:after {
		width: 75%;
		height: 100%;
	}
	.pl__side--shadow-right2:after {
		animation-name: shadow-right2;
		right: 0;
		left: auto;
	}
	.pl__side--fade1:before {
		animation-name: fade1;
	}
	.pl__side--fade2:before {
		animation-name: fade2;
	}
	.pl__side--fade3:before {
		animation-name: fade3;
	}
	.pl__side--fade4:before {
		animation-name: fade4;
	}
	.pl__side--shadow-back1:after {
		animation-name: shadow-back1;
	}
	.pl__side--shadow-right1:after {
		animation-name: shadow-right1;
	}
	.pl__side--shadow-left1:after {
		animation-name: shadow-left1;
	}
	.pl__side--shadow-back2:after {
		animation-name: shadow-back2;
	}
	.pl__side--shadow-left2:after {
		animation-name: shadow-left2;
	}
	.pl__prism:nth-child(1) .pl__side {
		animation-delay: calc(var(--anim-dur) * 0.25);
	}
	.pl__prism:nth-child(2) .pl__side {
		animation-delay: calc(var(--anim-dur) * 0.5);
	}
	.pl__prism:nth-child(4) .pl__side {
		animation-delay: calc(var(--anim-dur) * 0.75);
	}

	/* Dark theme */
	@media (prefers-color-scheme: dark) {
		:root {
			--bg: hsl(var(--hue), 90%, 10%);
			--fg: hsl(var(--hue), 90%, 90%);
		}
	}

	/* Animations */
	@keyframes fade1 {
		from {
			animation-timing-function: steps(1, end);
			background-color: var(--primary1);
		}
		62.5%,
		75% {
			animation-timing-function: linear;
			background-color: var(--primary2);
		}
		to {
			background-color: var(--primary1);
		}
	}
	@keyframes fade2 {
		from {
			background-color: var(--primary2);
		}
		25%,
		50% {
			animation-timing-function: steps(1, start);
			background-color: var(--primary1);
		}
		to {
			background-color: var(--primary2);
		}
	}
	@keyframes fade3 {
		from,
		25% {
			background-color: var(--primary2);
		}
		50%,
		to {
			background-color: var(--primary1);
		}
	}
	@keyframes fade4 {
		from,
		50% {
			background-color: var(--primary2);
		}
		75%,
		to {
			background-color: var(--primary1);
		}
	}
	@keyframes shadow-back1 {
		from {
			transform: translate(0);
		}
		12.5% {
			animation-timing-function: steps(1, end);
			transform: translate(0, -100%);
		}
		87.5% {
			animation-timing-function: linear;
			transform: translate(0, 0);
		}
		to {
			transform: translate(-122.22%, 0);
		}
	}
	@keyframes shadow-back2 {
		from,
		25% {
			transform: translateY(0);
		}
		37.5%,
		to {
			transform: translateY(-100%);
		}
	}
	@keyframes shadow-right1 {
		from {
			animation-timing-function: steps(1, end);
			visibility: hidden;
			transform: translateY(0);
		}
		62.5%,
		75% {
			animation-timing-function: linear;
			visibility: visible;
			transform: translateY(0);
		}
		87.5%,
		to {
			visibility: visible;
			transform: translateY(-100%);
		}
	}
	@keyframes shadow-right2 {
		from,
		37.5% {
			transform: translateY(0);
		}
		50%,
		to {
			transform: translateY(-122.22%);
		}
	}
	@keyframes shadow-left1 {
		from {
			animation-timing-function: steps(1, end);
			visibility: hidden;
		}
		62.5%,
		to {
			visibility: visible;
		}
	}
	@keyframes shadow-left2 {
		from,
		50% {
			transform: translateX(0);
		}
		62.5%,
		to {
			transform: translateX(-100%);
		}
	}
	@keyframes side-top {
		from {
			transform: translate3d(0, 0, 4.5em) scaleX(1);
		}
		12.5% {
			transform: translate3d(0, 0, 4.5em) scaleX(2.2222);
		}
		25%,
		to {
			transform: translate3d(0, 0, 4.5em) scaleX(1);
		}
	}
	@keyframes side-back {
		from {
			transform: rotateX(90deg) scaleX(1);
		}
		12.5% {
			transform: rotateX(90deg) scaleX(2.2222);
		}
		25%,
		to {
			transform: rotateX(90deg) scaleX(1);
		}
	}
	@keyframes side-right {
		from {
			transform: rotateY(90deg) translate3d(0, 0, 0);
		}
		12.5% {
			transform: rotateY(90deg) translate3d(0, 0, 5.5em);
		}
		25%,
		to {
			transform: rotateY(90deg) translate3d(0, 0, 0);
		}
	}
	@keyframes side-front {
		from {
			transform: rotateX(-90deg) scaleX(1);
		}
		12.5% {
			transform: rotateX(-90deg) scaleX(2.2222);
		}
		25%,
		to {
			transform: rotateX(-90deg) scaleX(1);
		}
	}
	@keyframes slide1 {
		from,
		37.5% {
			transform: translate3d(0, 0, 0) rotate(90deg);
		}
		50%,
		to {
			transform: translate3d(0, 0, 0) rotate(90deg) translate3d(5.5em, 0, 0);
		}
	}
	@keyframes slide2 {
		from,
		62.5% {
			transform: translate3d(5.5em, 0, 0) rotate(180deg);
		}
		75%,
		to {
			transform: translate3d(5.5em, 0, 0) rotate(180deg) translate3d(5.5em, 0, 0);
		}
	}
	@keyframes slide3 {
		from,
		12.5% {
			transform: translate3d(0, 5.5em, 0);
		}
		25% {
			transform: translate3d(0, 5.5em, 0) translate3d(5.5em, 0, 0);
			visibility: visible;
		}
		87.5%,
		to {
			transform: translate3d(0, 5.5em, 0) translate3d(5.5em, 0, 0);
			visibility: hidden;
		}
	}
	@keyframes slide4 {
		from {
			animation-timing-function: steps(1, end);
			transform: translate3d(5.5em, 5.5em, 0) rotate(-90deg);
			visibility: hidden;
		}
		75%,
		87.5% {
			animation-timing-function: linear;
			transform: translate3d(5.5em, 5.5em, 0) rotate(-90deg);
			visibility: visible;
		}
		to {
			transform: translate3d(5.5em, 5.5em, 0) rotate(-90deg) translate3d(5.5em, 0, 0);
		}
	}
	@keyframes spin {
		from {
			transform: translate(-50%, -50%) rotateX(45deg) rotateZ(45deg);
		}
		to {
			transform: translate(-50%, -50%) rotateX(45deg) rotateZ(405deg);
		}
	}
`
export default StyledLoading
