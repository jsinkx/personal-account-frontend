import React from 'react'
import { RouterProvider } from 'react-router-dom'

import LoadingPage from '@pages/LoadingPage'

import router from './router'

const Routes: React.FC = () => (
	<React.Suspense fallback={<LoadingPage />}>
		<RouterProvider router={router} />
	</React.Suspense>
)

export default Routes
