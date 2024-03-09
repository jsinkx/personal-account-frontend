import React from 'react'

import Helmet from '../../components/Helmet'

import StyledCleanLayout from './styles'

type CleanLayoutProps = {
	title: string
	description: string
	children: React.ReactNode
}
const CleanLayout: React.FC<CleanLayoutProps> = ({ title, description, children }) => {
	return (
		<StyledCleanLayout>
			<Helmet title={title} description={description} />
			{children}
		</StyledCleanLayout>
	)
}

export default CleanLayout
