import React, { useEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { fetchAuthMe } from '../../redux/slices/auth/slice'

import useAppDispatch from '../../hooks/useAppDispatch'

import GlobalStyles from '../GlobalStyles'
import Routes from '../Routes'

const App: React.FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		const token = localStorage.getItem('token') || sessionStorage.getItem('token')

		token && dispatch(fetchAuthMe())
	}, [dispatch])

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
