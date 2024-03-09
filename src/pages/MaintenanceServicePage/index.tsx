import React from 'react'

import { CDN_URL } from '../../shared/constants'

import getRandomInt from '../../utils/random-int'

import CleanLayout from '../../layouts/CleanLayout'

import StyledNotFoundPage from './styles'

const MaintenanceServicePage: React.FC = () => {
	const IMAGES_URL = [
		'maintenance-service-pic-1.webp',
		'maintenance-service-pic-2.webp',
		'maintenance-service-pic-3.webp',
	]

	return (
		<CleanLayout title="Техобслуживание" description="Мы устраняем все проблемы и делаем наши сервисы лучше">
			<StyledNotFoundPage>
				<h1> Сервера находятся на техническом обслуживании. Приносим извинения. </h1>
				<p> Мы устраняем проблемы и делаем наши сервисы лучше! Stay tune.</p>
				<img
					src={`${CDN_URL}/assets/static/images/${IMAGES_URL[getRandomInt(0, IMAGES_URL.length - 1)]}`}
					alt="xP"
				/>
			</StyledNotFoundPage>
		</CleanLayout>
	)
}

export default MaintenanceServicePage
