import React from 'react'
import { Navigate } from 'react-router-dom'

import Paths from '../../shared/paths'
import Status from '../../shared/status'

import { selectAuthData, selectAuthStatus } from '../../redux/slices/auth/selectors'

import useAppSelector from '../../hooks/useAppSelector'

import MainLayout from '../../layouts/MainLayout'

import Avatar from '../../components/Avatar'
import Loading from '../../components/Loading'

import StyledProfile from './styles'

const Profile: React.FC = () => {
	const authData = useAppSelector(selectAuthData)
	const status = useAppSelector(selectAuthStatus)

	if (status === Status.ERROR) return <Navigate to={Paths.any} />
	if (status === Status.LOADING) return <Loading />
	if (status === Status.LOADED) {
		const profile = authData!

		console.log(profile)

		return (
			<MainLayout
				title={`${profile.first_name} ${profile.last_name}`}
				description={`Личный профиль пользователя ${profile.first_name} ${profile.last_name}`}
			>
				<StyledProfile $color={profile.background_color}>
					<section>
						<div className="profile__background"> </div>
						<Avatar firstName={profile.first_name} lastName={profile.last_name} className="profile__avatar" />
						<h3>
							{profile.first_name} {profile.last_name}
						</h3>
					</section>
				</StyledProfile>
			</MainLayout>
		)
	}

	return <Loading />
}

export default Profile
