import React from 'react'

import Loading from '@components/Loading'

import StyledLoadingPage from './styles'

const LoadingPage: React.FC = () => {
	return (
		/* Layout no needed */
		<StyledLoadingPage>
			<Loading className="loader" />
		</StyledLoadingPage>
	)
}

export default LoadingPage
