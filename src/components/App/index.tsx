import React, { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { fetchAuthMe } from '@redux/slices/auth/slice'

import useAppDispatch from '@hooks/useAppDispatch'

import GlobalStyles from '@components/GlobalStyles'
import Routes from '@components/Routes'

import AppProviders from './AppProviders'

const App: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const token = localStorage.getItem('token') || sessionStorage.getItem('token')

		token && dispatch(fetchAuthMe())
	}, [dispatch])

	return (
		<div className="app">
			<HelmetProvider>
				<AppProviders>
					<GlobalStyles />
					<Routes />
				</AppProviders>
			</HelmetProvider>
		</div>
	)
}

export default App
