import React from 'react'

import moment from 'moment'

import Status from '../../shared/status'

import { selectAuthData, selectAuthStatus } from '../../redux/slices/auth/selectors'

import useAppSelector from '../../hooks/useAppSelector'

import MainLayout from '../../layouts/MainLayout'

import Error from '../../components/Error'
import Loading from '../../components/Loading'

import ProfileCard from './ProfileCard'
import ProfilePortfolio from './ProfilePortfolio'
import StyledProfile from './styles'

const IS_ONLINE = true

const Profile: React.FC = () => {
	const authData = useAppSelector(selectAuthData) // TODO: request to get info profile by id/login/customId
	const status = useAppSelector(selectAuthStatus)

	if (status === Status.ERROR) return <Error> Указанный профиль не найден!</Error>
	if (status === Status.LOADING) return <Loading />
	if (status === Status.LOADED) {
		const profile = authData!

		// If requested user id === current user id, its our profile, can edit

		return (
			<MainLayout
				title={`${profile.first_name} ${profile.last_name}`}
				description={`Личный профиль пользователя ${profile.first_name} ${profile.last_name}`}
			>
				<StyledProfile $color={profile.background_color}>
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
								lastOnlineDate={moment().toString()}
								email={profile.email}
								createdAt={profile.created_at}
							/>
							<section className="profile__content">
								<ProfilePortfolio color={profile.background_color} />
							</section>
						</div>
					</section>
				</StyledProfile>
			</MainLayout>
		)
	}

	return <Loading />
}

export default Profile
