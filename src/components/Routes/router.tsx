import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Router } from '@remix-run/router'

import Paths from '@shared/paths'

import ErrorBoundaryLayout from '@layouts/ErrorBoundaryLayout'

// Lazy pages

const NotFoundPage = React.lazy(() => import(/* webpackChunkName: "NotFoundPage" */ '@pages/NotFoundPage'))
const MaintenanceServicePage = React.lazy(
	() => import(/* webpackChunkName: "MaintenanceServicePage" */ '@pages/MaintenanceServicePage'),
)

const HomePage = React.lazy(() => import(/* webpackChunkName: "HomePage" */ '@pages/HomePage'))

const ProfilePage = React.lazy(() => import(/* webpackChunkName: "ProfilePage" */ '@pages/ProfilePage'))

const ProfileAboutMe = React.lazy(
	() =>
		import(
			/* webpackChunkName: "ProfileAboutMe" */ '@pages/ProfilePage/ProfileElements/ProfileContent/ProfileAboutMe'
		),
)

const ProfileWall = React.lazy(
	() =>
		import(
			/* webpackChunkName: "ProfileWall" */ '@pages/ProfilePage/ProfileElements/ProfileContent/ProfileWall'
		),
)

const ProfilePortfolio = React.lazy(
	() =>
		import(
			/* webpackChunkName: "ProfilePortfolio" */ '@pages/ProfilePage/ProfileElements/ProfileContent/ProfilePortfolio'
		),
)

const AuthPage = React.lazy(() => import(/* webpackChunkName: "AuthPage" */ '@pages/AuthPage'))

const TermsAndConditionsPage = React.lazy(
	() => import(/* webpackChunkName: "TermsAndConditionsPage" */ '@pages/TermsAndConditionsPage'),
)

const router: Router = createBrowserRouter([
	{
		element: <ErrorBoundaryLayout />,
		children: [
			// Main
			{
				path: Paths.home,
				element: <HomePage />,
			},
			{
				path: Paths.about,
				element: <NotFoundPage />,
			},
			{
				path: Paths.contacts,
				element: <NotFoundPage />,
			},
			{
				path: Paths.termsAndConditions,
				element: <TermsAndConditionsPage />,
			},
			{
				path: Paths.any,
				element: <NotFoundPage />,
			},
			{
				path: Paths.maintenanceService,
				element: <MaintenanceServicePage />,
			},
			// Auth
			{
				path: Paths.registration,
				element: <AuthPage />,
			},
			{
				path: Paths.login,
				element: <AuthPage />,
			},
			{
				path: Paths.forgotPassword,
				element: <AuthPage />,
			},
			// Profile
			{
				path: Paths.profile.static,
				element: <ProfilePage />,
				children: [
					{
						path: Paths.profile.children.default,
						element: (
							<React.Suspense fallback={null}>
								<ProfileAboutMe />
							</React.Suspense>
						),
					},
					{
						path: Paths.profile.children.aboutMe,
						element: (
							<React.Suspense fallback={null}>
								<ProfileAboutMe />
							</React.Suspense>
						),
					},
					{
						path: Paths.profile.children.wall,
						element: (
							<React.Suspense fallback={null}>
								<ProfileWall />
							</React.Suspense>
						),
					},
					{
						path: Paths.profile.children.portfolio,
						element: (
							<React.Suspense fallback={null}>
								<ProfilePortfolio />
							</React.Suspense>
						),
					},
				],
			},
			{
				path: Paths.settings,
				element: <ProfilePage />,
			},
		],
	},
])

export default router
