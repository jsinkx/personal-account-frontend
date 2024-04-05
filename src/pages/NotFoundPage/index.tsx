import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NOT_FOUND_PHRASES } from '@shared/bag-of-phrases'
import { CLOUD_STATIC_IMG } from '@shared/constants'
import Paths from '@shared/paths'

import getRandomInt from '@utils/random-int'

import CleanLayout from '@layouts/CleanLayout'

import Button from '@components/Button'

import StyledNotFoundPage, { StyledCustomNavLink } from './styles'

const NotFoundPage: React.FC = () => {
	const navigate = useNavigate()

	const handleClickBack = () => navigate(-1)

	return (
		<CleanLayout
			title="Страница не найдена"
			description="Страница не найдена, проверьте корректность введенного URL."
		>
			<StyledNotFoundPage>
				<img src={`${CLOUD_STATIC_IMG}/isometric-404.webp`} alt="404" />
				<h1>{NOT_FOUND_PHRASES[getRandomInt(0, NOT_FOUND_PHRASES.length - 1)]}</h1>

				<p>
					Страница не найдена,{' '}
					<Button variant="text" onClick={handleClickBack} className="button-go-back">
						вернуться назад
					</Button>{' '}
					или <StyledCustomNavLink to={Paths.home}>на главную</StyledCustomNavLink>
				</p>
			</StyledNotFoundPage>
		</CleanLayout>
	)
}

export default NotFoundPage
