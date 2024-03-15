import React, { useEffect } from 'react'

import CleanLayout from '../../layouts/CleanLayout'

import BubblesBackground from './BubblesBackground'
import StyledLoginPage, { StyledLogin } from './styles'

const LoginPage: React.FC = () => {
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
		<CleanLayout title="Авторизация" description="Вход в учетную запись экосистемы WISH EDU">
			<StyledLoginPage>
				<BubblesBackground />
				<StyledLogin />
			</StyledLoginPage>
		</CleanLayout>
	)
}

export default LoginPage
