import React from 'react'

import Helmet from '../../components/Helmet'

import StyledCleanLayout from './styles'

type CleanLayoutProps = {
	title: string
	description: string
	keywords?: string[]
	image?: string
	children: React.ReactNode
}
const CleanLayout: React.FC<CleanLayoutProps> = ({
	title,
	description,
	keywords = [''],
	image = '',
	children,
}) => {
	return (
		<StyledCleanLayout>
			<Helmet title={title} description={description} keywords={keywords} image={image} />
			{children}
		</StyledCleanLayout>
	)
}

export default CleanLayout
