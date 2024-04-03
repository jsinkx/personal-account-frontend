/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

import Colors from '../../shared/colors'
import { CDN_STATIC_IMG } from '../../shared/constants'
import Paths from '../../shared/paths'

import { selectAuthData } from '../../redux/slices/auth/selectors'

import useAppSelector from '../../hooks/useAppSelector'

import MainLayout from '../../layouts/MainLayout'

import Avatar from '../../components/Avatar'

import { StyledButton, StyledHomePage, UpdateHTMLStyles } from './styles'

const NAVIGATION_SERVICES = [
	{
		title: 'ВИШ',
		color: Colors.BLUE_WISH,
		iconUrl: 'https://cdn.althgamer.ru/assets/static/images/vish-logo.png',
		url: 'https://wish.rut.digital/',
		isDisabled: false,
	},
	{
		title: 'Биржа проектов',
		color: Colors.ORANGE,
		iconUrl: '',
		url: '',
		isDisabled: true,
	},
	{
		title: 'МФЦ РУТ МИИТ',
		color: Colors.CYAN,
		iconUrl: 'https://cdn.althgamer.ru/assets/static/images/rut-miit-logo.jpg',
		url: 'https://t.me/miit_mfc_bot',
		isDisabled: false,
	},
]

const HomePage: React.FC = () => {
	const navigate = useNavigate()

	const isAuth = !!useAppSelector(selectAuthData)

	const handleClickNavigate = () => navigate(Paths.registration)

	return (
		<MainLayout title="Главная" description="Добро пожаловать на главную страницу!">
			<StyledHomePage $isAuth={isAuth}>
				<UpdateHTMLStyles $isAuth={isAuth} />

				{!isAuth && (
					<div className="slider-container__element slider-container__element--one">
						<div className="block__greetings-info">
							<section>
								<h4> Платформа </h4>
								<h3> Экосистема </h3>
								<h2> WISH EDU </h2>
								<p>
									Инновационное решение для академии ВИШ, собственная платформа обучения для студентов. Это не просто
									СДО, это — WISH EDU!
								</p>
								<StyledButton
									onClick={handleClickNavigate}
									width="250px"
									textColor={Colors.WHITE}
									color={Colors.BLUE_WISH}
								>
									Получить доступ
								</StyledButton>
							</section>
							<section>
								<img src={`${CDN_STATIC_IMG}/greetings-pic.webp`} alt="🔗" />
							</section>
						</div>
					</div>
				)}
				<div className="slider-container__element slider-container__element--two">
					<nav className="block__navigation-between-services">
						<h2> Сервисы </h2>
						<section className="navigation__services">
							{NAVIGATION_SERVICES.map((service) => (
								<div
									key={service.title}
									className={`navigation__services__service ${service.isDisabled && 'disabled'}`}
								>
									<a href={service.url} target="_blank" rel="noreferrer">
										<Avatar
											firstName={service.title}
											lastName=" "
											className="navigation__services__service__icon"
											src={service.iconUrl}
											color={service.color}
											size="80px"
										/>
									</a>
									<p> {service.title} </p>
								</div>
							))}
						</section>
					</nav>
				</div>
				{/* TODO: Create slider for right section with images */}
				{/* TODO: Added animations for images */}
			</StyledHomePage>
		</MainLayout>
	)
}

export default HomePage
