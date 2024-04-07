import { createGlobalStyle } from 'styled-components'

const GlobalStyleTags = createGlobalStyle`

html {
	height: 100%;
	color: ${({ theme }) => theme.app.defaultFontColor};
	background-color: ${({ theme }) => theme.app.defaultBackgroundColor};

	::selection {
			color: ${({ theme }) => theme.selection.defaultFontColor};
			background-color:  ${({ theme }) => theme.selection.defaultBackgroundColor};
		}

		::-webkit-scrollbar {
			width: 5px;
		}
		
		::-webkit-scrollbar-track {
			background: ${({ theme }) => theme.scrollbar.defaultTrackColor}; 
		}
		
		::-webkit-scrollbar-thumb {
			background: ${({ theme }) => theme.scrollbar.defaultThumbColor}; 
		}

	body {
		margin: 0;
		font-family: ${({ theme }) => theme.text.defaultFontFamily};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

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
