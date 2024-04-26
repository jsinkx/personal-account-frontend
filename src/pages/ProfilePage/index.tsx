import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import moment from 'moment'

import axiosInstance from '@shared/axios'
import Colors from '@shared/colors'
import Status from '@shared/status'

import { selectAuthData, selectAuthStatus } from '@redux/slices/auth/selectors'
import { User } from '@redux/slices/auth/types'

import useAppSelector from '@hooks/useAppSelector'

import MainLayout from '@layouts/MainLayout'

import LoadingPage from '@pages/LoadingPage'
import NotFoundPage from '@pages/NotFoundPage'

import Error from '@components/Error'

import { ThemeProvider, createTheme, useTheme } from '@mui/material'

import ProfileCard from './ProfileElements/ProfileCard'
import ProfileContent from './ProfileElements/ProfileContent'
import StyledProfile from './styles'

const IS_ONLINE = true
const MAIN_LOCATION = 'Россия, Москва'

const Profile: React.FC = () => {
	const { id } = useParams()
	const currentThemeMUI = useTheme()

	// Current user
	const authData = useAppSelector(selectAuthData)
	const status = useAppSelector(selectAuthStatus)

	// Searching user
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [user, setUser] = useState<User | null>(null)

	const theme = createTheme({
		palette: {
			...currentThemeMUI.palette,
			primary: {
				main: user?.background_color || authData?.background_color || Colors.BLUE_WISH,
			},
		},
		typography: {
			...currentThemeMUI.typography,
		},
	})

	useEffect(() => {
		const getUserById = async () => {
			try {
				setIsLoading(true)

				const { data } = await axiosInstance(`/info/users/search-${id}`)

				setUser(data)
			} catch (err) {
				setIsError(true)

				console.error('Error', err)
			}

			setIsLoading(false)
		}

		// If searching profile page is current user profile, we don't need to fetch it again
		// id can be string or number, e.g. 1 or "simple_login"
		if (!(authData && (id === String(authData.id) || id === authData.login))) {
			getUserById()
		}

		if (id === authData?.login || id === authData?.id) {
			setUser(authData)
		}
	}, [authData, authData?.id, authData?.login, id])

	if (status === Status.LOADING || isLoading) return <LoadingPage />
	if (status === Status.ERROR || isError)
		return (
			<MainLayout title="Профиль не найден" description="Профиль не найден">
				<Error> Указанный профиль не найден!</Error>
			</MainLayout>
		)

	if ((status === Status.LOADED && authData) || (user && !isLoading)) {
		const isEditable = String(authData?.id) === id

		const profile = (user || authData)!

		return (
			<MainLayout
				title={`${profile.first_name} ${profile.last_name}`}
				description={`Личный профиль пользователя ${profile.first_name} ${profile.last_name}`}
			>
				<StyledProfile $color={profile.background_color}>
					<ThemeProvider theme={theme}>
						<section>
							<div className="profile__background"> </div>
							<div className="profile">
								<ProfileCard
									isOnline={IS_ONLINE}
									avatar={profile.avatar}
									firstName={profile.first_name}
									lastName={profile.last_name}
									color={profile.background_color}
									login={profile.login}
									description={profile.description}
									mainLocation={MAIN_LOCATION}
									lastOnlineDate={moment().toString()}
									birthday={profile.birthday}
									email={profile.email}
									createdAt={profile.created_at}
									isEditable={isEditable}
								/>
								<section className="profile__content">
									<ProfileContent />
								</section>
							</div>
						</section>
					</ThemeProvider>
				</StyledProfile>
			</MainLayout>
		)
	}

	return <NotFoundPage />
}

export default Profile
