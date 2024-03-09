import React from 'react'

import Loading from '../../components/Loading'

import StyledLoadingPage from './styles'

const LoadingPage: React.FC = () => {
	return (
		/* Layout no needed */
		<StyledLoadingPage>
			<h1> Загружаем страницу... </h1>
			<Loading />
		</StyledLoadingPage>
	)
}

export default LoadingPage
