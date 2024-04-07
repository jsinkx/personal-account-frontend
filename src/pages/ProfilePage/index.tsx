import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

import moment from 'moment'

import Colors from '@shared/colors'
import Paths from '@shared/paths'
import Status from '@shared/status'

import { selectAuthData, selectAuthStatus } from '@redux/slices/auth/selectors'

import useAppSelector from '@hooks/useAppSelector'

import MainLayout from '@layouts/MainLayout'

import LoadingPage from '@pages/LoadingPage'

import Error from '@components/Error'

import { ThemeProvider, createTheme, useTheme } from '@mui/material'

import ProfileCard from './ProfileElements/ProfileCard'
import ProfilePortfolio from './ProfileElements/ProfilePortfolio'
import StyledProfile from './styles'

const IS_ONLINE = true
const MAIN_LOCATION = 'Россия, Москва'

const Profile: React.FC = () => {
	const { id } = useParams()
	const currentThemeMUI = useTheme()

	const authData = useAppSelector(selectAuthData)
	const status = useAppSelector(selectAuthStatus)

	console.log(currentThemeMUI)

	const theme = createTheme({
		palette: {
			...currentThemeMUI.palette,
			primary: {
				main: authData?.background_color || Colors.BLUE_WISH,
			},
		},
		typography: {
			...currentThemeMUI.typography,
		},
	})

	// Also we need to fetch profile by param id with service hook

	if (status === Status.LOADING) return <LoadingPage />
	if (status === Status.ERROR) return <Error> Указанный профиль не найден!</Error>
	if (status === Status.LOADED && authData) {
		// @ts-ignore
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const isEditable = String(authData.id) === id

		return (
			<MainLayout
				title={`${authData.first_name} ${authData.last_name}`}
				description={`Личный профиль пользователя ${authData.first_name} ${authData.last_name}`}
			>
				<StyledProfile $color={authData.background_color}>
					<ThemeProvider theme={theme}>
						<section>
							<div className="profile__background"> </div>
							<div className="profile">
								<ProfileCard
									isOnline={IS_ONLINE}
									avatar={authData.avatar}
									firstName={authData.first_name}
									lastName={authData.last_name}
									color={authData.background_color}
									login={authData.login}
									description={authData.description}
									mainLocation={MAIN_LOCATION}
									lastOnlineDate={moment().toString()}
									birthday={authData.birthday}
									email={authData.email}
									createdAt={authData.created_at}
								/>
								<section className="profile__content">
									<ProfilePortfolio />
								</section>
							</div>
						</section>
					</ThemeProvider>
				</StyledProfile>
			</MainLayout>
		)
	}

	return <Navigate to={Paths.home} />
}

export default Profile
