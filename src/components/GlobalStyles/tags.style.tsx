import { createGlobalStyle } from 'styled-components'

import colors from '../../shared/colors'

const GlobalStyleTags = createGlobalStyle`

html {
	height: 100%;
	color: black;
	background-color: white;

	body {
		margin: 0;
		font-family: -Regular, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
			'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		::selection {
			color: white;
			background-color: ${colors.BLUE_WISH};
		}

		a,
		a:hover,
		a:active,
		a:focus {
			text-decoration: none;
			outline: none;
		}

		code {
			font-family: Consolas, source-code-pro, Menlo, Monaco, 'Courier New', monospace;
		}
	}
}



`

export default GlobalStyleTags
