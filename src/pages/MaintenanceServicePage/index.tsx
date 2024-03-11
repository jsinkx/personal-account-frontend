import React from 'react'

import getRandomInt from '../../utils/random-int'

import CleanLayout from '../../layouts/CleanLayout'

import maintenanceServicePic1 from '../../assets/images/maintenance-service-pic-1.webp'
import maintenanceServicePic2 from '../../assets/images/maintenance-service-pic-2.webp'
import maintenanceServicePic3 from '../../assets/images/maintenance-service-pic-3.webp'

import StyledNotFoundPage from './styles'

const MaintenanceServicePage: React.FC = () => {
	const IMAGES_URL = [maintenanceServicePic1, maintenanceServicePic2, maintenanceServicePic3]

	return (
		<CleanLayout title="Тех.обслуживание" description="Мы устраняем все проблемы и делаем наши сервисы лучше">
			<StyledNotFoundPage>
				<h1> Сервера находятся на техническом обслуживании. Приносим извинения. </h1>
				<p> Мы устраняем проблемы и делаем наши сервисы лучше! Stay tune.</p>
				<img src={IMAGES_URL[getRandomInt(0, IMAGES_URL.length - 1)]} alt="xP" />
			</StyledNotFoundPage>
		</CleanLayout>
	)
}

export default MaintenanceServicePage
