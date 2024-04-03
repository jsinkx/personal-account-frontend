import React from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Helmet from '../../components/Helmet'

import StyledMainLayout from './styles'

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
		<StyledMainLayout>
			<Helmet title={title} description={description} keywords={keywords} image={image} />
			<Header />
			<main>{children}</main>
			<Footer />
		</StyledMainLayout>
	)
}

export default MainLayout
