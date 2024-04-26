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

const UsersPage = React.lazy(() => import(/* webpackChunkName: "UsersPage" */ '@pages/UsersPage'))

// Profile

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

// Settings

const SettingsPage = React.lazy(() => import(/* webpackChunkName: "SettingsPage" */ '@pages/SettingsPage'))

const SettingsAccount = React.lazy(
	() =>
		import(/* webpackChunkName: "SettingsAccount" */ '@pages/SettingsPage/SettingsElements/SettingsAccount'),
)

const SettingsPassword = React.lazy(
	() =>
		import(/* webpackChunkName: "SettingsPassword" */ '@pages/SettingsPage/SettingsElements/SettingsPassword'),
)

const SettingsApp = React.lazy(
	() => import(/* webpackChunkName: "SettingsApp" */ '@pages/SettingsPage/SettingsElements/SettingsApp'),
)

const SettingsNotifications = React.lazy(
	() =>
		import(
			/* webpackChunkName: "SettingsNotifications" */ '@pages/SettingsPage/SettingsElements/SettingsNotifications'
		),
)

const SettingsHelp = React.lazy(
	() => import(/* webpackChunkName: "SettingsHelp" */ '@pages/SettingsPage/SettingsElements/SettingsHelp'),
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
				path: Paths.users,
				element: <UsersPage />,
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
			// Settings
			{
				path: Paths.settings.static,
				element: <SettingsPage />,
				children: [
					{
						path: Paths.settings.children.default,
						element: (
							<React.Suspense fallback={null}>
								<SettingsAccount />
							</React.Suspense>
						),
					},
					{
						path: Paths.settings.children.account,
						element: (
							<React.Suspense fallback={null}>
								<SettingsAccount />
							</React.Suspense>
						),
					},
					{
						path: Paths.settings.children.notifications,
						element: (
							<React.Suspense fallback={null}>
								<SettingsNotifications />
							</React.Suspense>
						),
					},
					{
						path: Paths.settings.children.password,
						element: (
							<React.Suspense fallback={null}>
								<SettingsPassword />
							</React.Suspense>
						),
					},
					{
						path: Paths.settings.children.app,
						element: (
							<React.Suspense fallback={null}>
								<SettingsApp />
							</React.Suspense>
						),
					},
					{
						path: Paths.settings.children.help,
						element: (
							<React.Suspense fallback={null}>
								<SettingsHelp />
							</React.Suspense>
						),
					},
				],
			},
		],
	},
])

export default router
