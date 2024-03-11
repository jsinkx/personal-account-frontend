import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Paths from '../../shared/paths'

import LoadingPage from '../../pages/LoadingPage'

// Lazy pages

const NotFoundPage = React.lazy(
	() => import(/* webpackChunkName: "NotFoundPage" */ '../../pages/NotFoundPage'),
)
const MaintenanceServicePage = React.lazy(
	() => import(/* webpackChunkName: "MaintenanceServicePage" */ '../../pages/MaintenanceServicePage'),
)

const HomePage = React.lazy(() => import(/* webpackChunkName: "HomePage" */ '../../pages/HomePage'))

const RegistrationPage = React.lazy(
	() => import(/* webpackChunkName: "RegistrationPage" */ '../../pages/RegistrationPage'),
)
const TermsAndConditionsPage = React.lazy(
	() => import(/* webpackChunkName: "TermsAndConditionsPage" */ '../../pages/TermsAndConditionsPage'),
)

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.about,
		element: <NotFoundPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.contact,
		element: <NotFoundPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.registration,
		element: <RegistrationPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.termsAndConditions,
		element: <TermsAndConditionsPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.any,
		element: <NotFoundPage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.maintenanceService,
		element: <MaintenanceServicePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: Paths.loading,
		element: <LoadingPage />,
	},
])

const Routes: React.FC = () => (
	<React.Suspense fallback={<LoadingPage />}>
		<RouterProvider router={router} />
	</React.Suspense>
)

export default Routes
