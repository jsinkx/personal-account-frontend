import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import GlobalStyles from '../GlobalStyles'
import Routes from '../Routes'

const App: React.FC = () => {
	return (
		<div className="app">
			<HelmetProvider>
				<GlobalStyles />
				<Routes />
			</HelmetProvider>
		</div>
	)
}

export default App
