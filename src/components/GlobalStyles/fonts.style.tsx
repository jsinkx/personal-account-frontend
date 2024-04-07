import { createGlobalStyle } from 'styled-components'

import Сonsolas from '@assets/fonts/Consolas/Consolas.woff2'
import Helvetica from '@assets/fonts/Helvetica/helvetica_regular.woff2'
import Roboto from '@assets/fonts/Roboto/Roboto-Black.woff2'

const GlobalStyleFonts = createGlobalStyle`

// consolas
@font-face {
	font-family: Consolas;
	src: url(${Сonsolas}) format("woff2");
}

// Roboto
@font-face {
	font-family: Roboto;
	src: url(${Roboto}) format("woff2");
}

// Helvetica
@font-face {
	font-family: Helvetica;
	src: url(${Helvetica}) format("woff2");
}
`

export default GlobalStyleFonts
