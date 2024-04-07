import React from 'react'
import { useNavigate } from 'react-router-dom'

import Colors from '@shared/colors'
import { CLOUD_STATIC_IMG } from '@shared/constants'
import Paths from '@shared/paths'

import { StyledButton, StyledSlide } from '../styles'

type SlideGreetingsProps = {
	isAuth: boolean
} & React.ComponentPropsWithoutRef<'div'>

const SlideGreetings: React.FC<SlideGreetingsProps> = ({ isAuth, ...props }) => {
	const navigate = useNavigate()

	const handleClickNavigate = () => navigate(Paths.registration)

	return (
		<StyledSlide $isAuth={isAuth} {...props}>
			<div className="block__greetings-info">
				<section>
					<h4> Платформа </h4>
					<h3> Экосистема </h3>
					<h2> WISH EDU </h2>
					<p>
						Инновационное решение для академии ВИШ, собственная платформа обучения для студентов. Это не просто СДО,
						это — WISH EDU!
					</p>
					<StyledButton
						onClick={handleClickNavigate}
						width="250px"
						textColor={Colors.WHITE}
						color={Colors.BLUE_WISH}
					>
						Получить доступ
					</StyledButton>
				</section>
				<section>
					<img src={`${CLOUD_STATIC_IMG}/illustrations/home/isometric-media.webp`} alt="🔗" />
				</section>
			</div>
		</StyledSlide>
	)
}

export default SlideGreetings
