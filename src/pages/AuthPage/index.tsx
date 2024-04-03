import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Paths from '../../shared/paths'

import { selectAuthData } from '../../redux/slices/auth/selectors'

import useAppSelector from '../../hooks/useAppSelector'

import CleanLayout from '../../layouts/CleanLayout'

import Login from '../../components/Auth/Login'
import Registration from '../../components/Auth/Registration'
import { CustomNavLink } from '../../components/CustomLink'
import Logo from '../../components/Logo'

import BubblesBackground from './BubblesBackground'
import StyledAuthPage from './styles'

const RegistrationPage: React.FC = () => {
	const navigate = useNavigate()

	const { pathname } = useLocation()

	const isLoginPage = pathname.toLowerCase() === Paths.login

	const title = isLoginPage ? 'Вход в учетную запись' : 'Регистрация'
	const description = isLoginPage
		? 'Вход в учетную запись экосистемы WISH EDU'
		: 'Создание учетной записи в экосистеме WISH EDU'

	const authData = useAppSelector(selectAuthData)
	const isAuth = !!authData

	useEffect(() => {
		if (isAuth) {
			navigate(Paths.profile.dynamic(authData.id))
		}
	}, [authData?.id, isAuth, navigate])

	return (
		<CleanLayout title={title} description={description}>
			<StyledAuthPage>
				<BubblesBackground />
				<section>
					<CustomNavLink className="auth__section__logo" to={Paths.home}>
						<Logo />
					</CustomNavLink>
					{isLoginPage ? <Login /> : <Registration />}
				</section>
			</StyledAuthPage>
		</CleanLayout>
	)
}

export default RegistrationPage
