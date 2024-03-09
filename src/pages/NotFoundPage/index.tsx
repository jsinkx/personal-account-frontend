import React from 'react'
import { useLocation } from 'react-router-dom'

import { NOT_FOUND_PHRASES } from '../../shared/bag-of-phrases'
import { CDN_IMG } from '../../shared/constants'
import Paths from '../../shared/paths'

import getRandomInt from '../../utils/random-int'

import CleanLayout from '../../layouts/CleanLayout'

import StyledNotFoundPage, { StyledCustomLink } from './styles'

const NotFoundPage: React.FC = () => {
	const location = useLocation()

	const prevPage = location.state?.from

	return (
		<CleanLayout
			title="Страница не найдена"
			description="Страница не найдена, проверьте корректность введенного URL."
		>
			<StyledNotFoundPage>
				<img src={`${CDN_IMG}/isometric-404.webp`} alt="404" />
				<h1>{NOT_FOUND_PHRASES[getRandomInt(0, NOT_FOUND_PHRASES.length - 1)]}</h1>
				<p>
					Страница не найдена,{' '}
					{prevPage ? (
						<>
							<StyledCustomLink to={prevPage}>вернуться назад</StyledCustomLink> или
						</>
					) : null}{' '}
					<StyledCustomLink to={Paths.home}>на главную</StyledCustomLink>
				</p>
			</StyledNotFoundPage>
		</CleanLayout>
	)
}

export default NotFoundPage
