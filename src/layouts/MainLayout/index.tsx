import React from 'react'

import Header from '../../components/Header'
import Helmet from '../../components/Helmet'

type MainLayoutProps = {
	title: string
	description: string
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, description, children }) => {
	return (
		<>
			<Helmet title={title} description={description} />
			<Header />
			<main>{children}</main>
		</>
	)
}

export default MainLayout
