import React from 'react'

import MainLayout from '../../layouts/MainLayout'

import StyledHomePage from './styles'

const HomePage: React.FC = () => {
	return (
		<MainLayout title="Главная" description="Добро пожаловать на главную страницу!">
			<StyledHomePage> Главная епт </StyledHomePage>
		</MainLayout>
	)
}

export default HomePage
