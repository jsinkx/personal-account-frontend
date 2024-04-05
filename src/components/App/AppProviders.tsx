import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import ThemesProvider from '@components/Themes/ThemesProvider'

type AppProvidersProps = {
	children: React.ReactNode
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
	return (
		<HelmetProvider>
			<ThemesProvider>{children}</ThemesProvider>
		</HelmetProvider>
	)
}

export default AppProviders
