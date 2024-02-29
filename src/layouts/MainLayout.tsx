import React from 'react'

import Helmet from '../components/Helmet'

type MainLayoutProps = {
	title: string
	description: string
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, description, children }) => {
	return (
		<>
			<Helmet title={title} description={description} />
			<header>
				<h1>Личный кабинет WISH EDU</h1>
			</header>
			<main>{children}</main>
		</>
	)
}

export default MainLayout
