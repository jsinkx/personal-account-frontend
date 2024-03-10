import React from 'react'

import { CDN_STATIC_IMG } from '../../shared/constants'

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
		<CleanLayout title="Тех.обслуживание" description="Мы устраняем все проблемы и делаем наши сервисы лучше">
			<StyledNotFoundPage>
				<h1> Сервера находятся на техническом обслуживании. Приносим извинения. </h1>
				<p> Мы устраняем проблемы и делаем наши сервисы лучше! Stay tune.</p>
				{/* TODO: Use local pictures, instead from CDN */}
				<img src={`${CDN_STATIC_IMG}/${IMAGES_URL[getRandomInt(0, IMAGES_URL.length - 1)]}`} alt="xP" />
			</StyledNotFoundPage>
		</CleanLayout>
	)
}

export default MaintenanceServicePage
