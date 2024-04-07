import React from 'react'

import Status from '@shared/status'

import { selectAuthData, selectAuthStatus } from '@redux/slices/auth/selectors'

import useAppSelector from '@hooks/useAppSelector'

import MainLayout from '@layouts/MainLayout'

import LoadingPage from '@pages/LoadingPage'

import SlideGreetings from './slides/SlideGreetings'
import SlideServices from './slides/SlideServices'
import { StyledHomePage, UpdateHTMLStyles } from './styles'

const HomePage: React.FC = () => {
	const isAuth = !!useAppSelector(selectAuthData)
	const authLoading = useAppSelector(selectAuthStatus)

	return authLoading === Status.LOADING ? (
		<LoadingPage />
	) : (
		<MainLayout title="Главная" description="Добро пожаловать на главную страницу!">
			<StyledHomePage $isAuth={isAuth}>
				<UpdateHTMLStyles $isAuth={isAuth} />
				<div className="slider-container">
					{!isAuth && <SlideGreetings className="slider-container__element--one" isAuth={isAuth} />}
					<SlideServices isAuth={isAuth} className="slider-container__element--two" />
				</div>
				{/* TODO: Create slider for right section with images */}
				{/* TODO: Added animations for images */}
			</StyledHomePage>
		</MainLayout>
	)
}

export default HomePage
