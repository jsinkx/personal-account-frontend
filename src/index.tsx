import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/es/integration/react'

import store, { persistor } from '@redux/store'

import App from '@components/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
)
