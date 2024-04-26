import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axiosInstance from '@shared/axios'
import Paths from '@shared/paths'

import MainLayout from '@layouts/MainLayout'

import LoadingPage from '@pages/LoadingPage'
import NotFoundPage from '@pages/NotFoundPage'

import Avatar from '@components/Avatar'

import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined'
import { Alert } from '@mui/material'

import StyledUsersPage from './styles'

const UsersPage: React.FC = () => {
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const [usersList, setUsersList] = useState<any[]>([])

	const handleClickUserProfile = (id: string) => {
		navigate(Paths.profile.dynamic(id))
	}

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setIsLoading(true)

				const { data: userData } = await axiosInstance('/info/users/')

				setUsersList(Object.values(userData)[0] as any[])
			} catch {
				setError('Произошла ошибка, попробуйте позже')
			} finally {
				setIsLoading(false)
			}
		}

		fetchUsers()
	}, [])

	if (error) return <NotFoundPage />
	if (isLoading) return <LoadingPage />

	if (!isLoading) {
		return (
			<MainLayout title="Список пользователей" description="Пользователи платформы">
				<StyledUsersPage>
					<h2>
						<PeopleOutlineOutlinedIcon color="primary" fontSize="large" />
						<span> Список пользователей </span>
					</h2>
					{error && (
						<Alert severity="error" sx={{ width: '60%', margin: '10px auto', userSelect: 'none' }}>
							{error}
						</Alert>
					)}
					<ul className="list">
						{usersList.length > 0
							? usersList.map((user) => {
									const isAdmin = user.role_id === 1

									return (
										<li
											key={user.id}
											className="list__item list__user"
											onClick={() => handleClickUserProfile(user.login)}
										>
											<Avatar
												color={user.background_color}
												src={user.avatar}
												className="list__user-img"
												firstName={user.first_name}
												lastName={user.last_name}
											/>
											<div className="list__user-info">
												<p>
													{user.first_name} {user.last_name} <br />
												</p>
												<p>{user.login}</p>
											</div>
											<div className={`list__user-role ${isAdmin ? 'list__user-role_bright' : ''}`}>
												{isAdmin ? 'Администратор' : 'Пользователь'}
											</div>
										</li>
									)
								})
							: null}
					</ul>
				</StyledUsersPage>
			</MainLayout>
		)
	}

	return <NotFoundPage />
}

export default UsersPage
