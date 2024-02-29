import React from 'react'

import { Normalize } from 'styled-normalize'

import GlobalStyleFonts from './fonts.style'
import GlobalStyleTags from './tags.style'

const GlobalStyles: React.FC = () => {
	return (
		<>
			<Normalize />
			<GlobalStyleFonts />
			<GlobalStyleTags />
		</>
	)
}

export default GlobalStyles
