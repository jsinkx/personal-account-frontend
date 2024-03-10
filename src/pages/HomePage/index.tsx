import React from 'react'
import { useNavigate } from 'react-router-dom'

import Colors from '../../shared/colors'
import { CDN_STATIC_IMG } from '../../shared/constants'
import Paths from '../../shared/paths'

import MainLayout from '../../layouts/MainLayout'

import Button from '../../components/Button'

import { StyledHomePageNoAuth } from './styles'

const HomePage: React.FC = () => {
	const navigate = useNavigate()

	const isAuth = false

	const handleClickNavigate = () => navigate(Paths.login)

	return (
		<MainLayout title="Главная" description="Добро пожаловать на главную страницу!">
			{/* TODO: Create bottom side with sections, which navigate to WISH EDU services */}
			{/* TODO: Create auth home page, split to sub components */}
			{/* TODO: Create slider for right section with images */}
			{/* TODO: Added animations for images */}
			{isAuth ? null : (
				<StyledHomePageNoAuth>
					<section>
						<h4> Платформа </h4>
						<h3> Экосистема </h3>
						<h2> WISH EDU </h2>
						<p>
							Инновационное решение для академии ВИШ, собственная платформа обучения для студентов. Это не просто
							СДО, это — WISH EDU!
						</p>
						<Button textColor={Colors.WHITE} color={Colors.BLUE_WISH} onClick={handleClickNavigate}>
							Получить доступ
						</Button>
					</section>
					<section>
						<img src={`${CDN_STATIC_IMG}/greetings-pic.webp`} alt="🔗" />
					</section>
				</StyledHomePageNoAuth>
			)}
		</MainLayout>
	)
}

export default HomePage
