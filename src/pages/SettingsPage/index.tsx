import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import Paths from '@shared/paths'
import Status from '@shared/status'

import { selectAuthData, selectAuthStatus } from '@redux/slices/auth/selectors'

import useAppSelector from '@hooks/useAppSelector'

import MainLayout from '@layouts/MainLayout'

import LoadingPage from '@pages/LoadingPage'
import NotFoundPage from '@pages/NotFoundPage'

import { CustomNavLink } from '@components/CustomLink'
import Error from '@components/Error'

import StyledSettingsPage from './styles'

const NAVIGATION_SETTINGS_ELEMENTS = [
	{
		name: 'Аккаунт',
		path: Paths.settings.children.account,
	},
	{
		name: 'Пароль',
		path: Paths.settings.children.password,
	},
	{
		name: 'Приложение',
		path: Paths.settings.children.app,
	},
	{
		name: 'Оповещения',
		path: Paths.settings.children.notifications,
	},
	{
		name: 'Помощь',
		path: Paths.settings.children.help,
	},
]

const SettingsPage: React.FC = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const authData = useAppSelector(selectAuthData)
	const status = useAppSelector(selectAuthStatus)

	const currentSubPageRoute = pathname.split('/')[2]

	useEffect(() => {
		currentSubPageRoute === undefined && navigate(Paths.settings.children.account)
	}, [currentSubPageRoute, navigate])

	if (status === Status.LOADING) return <LoadingPage />
	if (status === Status.ERROR)
		return (
			<MainLayout title="Профиль не найден" description="Профиль не найден">
				<Error> Указанный профиль не найден!</Error>
			</MainLayout>
		)

	if (status === Status.LOADED && authData) {
		return (
			<MainLayout title="Настройки" description="Настройки пользователя">
				<StyledSettingsPage>
					<nav>
						<ul>
							{NAVIGATION_SETTINGS_ELEMENTS.map(({ name, path }) => (
								<CustomNavLink key={path} to={path}>
									<li> {name} </li>
								</CustomNavLink>
							))}
						</ul>
					</nav>
					<div className="settings__content">
						<Outlet />
					</div>
				</StyledSettingsPage>
			</MainLayout>
		)
	}
	return <NotFoundPage />
}

export default SettingsPage
