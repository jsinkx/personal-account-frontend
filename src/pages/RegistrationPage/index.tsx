import React, { useEffect } from 'react'

import BubblesBackground from './BubblesBackground'
import StyledRegistrationPage, { StyledRegistration } from './styles'

const RegistrationPage: React.FC = () => {
	useEffect(() => {
		const unloadCallback = (event: BeforeUnloadEvent) => {
			event.preventDefault()
			event.returnValue = ''

			return ''
		}

		window.addEventListener('beforeunload', unloadCallback)
		return () => window.removeEventListener('beforeunload', unloadCallback)
	}, [])

	return (
		<StyledRegistrationPage>
			<BubblesBackground />
			<StyledRegistration />
		</StyledRegistrationPage>
	)
}

export default RegistrationPage
