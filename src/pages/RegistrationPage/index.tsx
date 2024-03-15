import React, { useEffect } from 'react'

import CleanLayout from '../../layouts/CleanLayout'

import BubblesBackground from './BubblesBackground'
import StyledRegistrationPage, { StyledRegistration } from './styles'

const RegistrationPage: React.FC = () => {
	// TODO: If form had not null values, use unloadCallBack, also
	// TODO: Save typed values in inputs while session alive
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
		<CleanLayout title="Регистрация" description="Создание учетной записи в экосистеме WISH EDU">
			<StyledRegistrationPage>
				<BubblesBackground />
				<StyledRegistration />
			</StyledRegistrationPage>
		</CleanLayout>
	)
}

export default RegistrationPage
