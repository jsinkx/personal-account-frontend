import React from 'react'

import Header from '../../components/Header'
import Helmet from '../../components/Helmet'

type MainLayoutProps = {
	title: string
	description: string
	keywords?: string[]
	image?: string
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({
	title,
	description,
	keywords = [''],
	image = '',
	children,
}) => {
	return (
		<>
			<Helmet title={title} description={description} keywords={keywords} image={image} />
			<Header />
			{/* TODO: aside with hide button for authed user */}
			{/* TODO: create footer */}
			<main>{children}</main>
		</>
	)
}

export default MainLayout
