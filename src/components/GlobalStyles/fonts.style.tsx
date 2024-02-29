import { createGlobalStyle } from 'styled-components'

import Сonsolas from '../../assets/fonts/consolas/Consolas.woff2'

// consolas
const GlobalStyleFonts = createGlobalStyle`
@font-face {
	font-family: Consolas;
	src: url(${Сonsolas}) format("woff2");
}
`

export default GlobalStyleFonts
