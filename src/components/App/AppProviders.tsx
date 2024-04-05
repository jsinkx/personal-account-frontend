import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import themeMUI from '@shared/themes/theme-MUI'

import { ThemeProvider } from '@mui/material'

type AppProvidersProps = {
	children: React.ReactNode
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
	return (
		<HelmetProvider>
			<ThemeProvider theme={themeMUI}>{children}</ThemeProvider>
		</HelmetProvider>
	)
}

export default AppProviders
