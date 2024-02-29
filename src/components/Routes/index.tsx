import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Paths from '../../shared/paths'

const HomePage = React.lazy(() => import(/* webpackChunkName: "HomePage" */ '../../pages/HomePage'))

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <HomePage />,
	},
])

const Routes: React.FC = () => (
	<React.Suspense fallback={<> Loading </>}>
		<RouterProvider router={router} />
	</React.Suspense>
)

export default Routes
