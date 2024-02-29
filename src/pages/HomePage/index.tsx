import React from 'react'

import MainLayout from '../../layouts/MainLayout'

const HomePage: React.FC = () => {
	return (
		<MainLayout title="Главная" description="Добро пожаловать на главную страницу!">
			<div> Welcome to home page!</div>
		</MainLayout>
	)
}

export default HomePage
