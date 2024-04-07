import React from 'react'

import NAVIGATION_SERVICES from '@shared/navigation-services'

import Avatar from '@components/Avatar'

import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'

import { StyledSlide } from '../styles'

type SlideServicesProps = {
	isAuth: boolean
} & React.ComponentPropsWithoutRef<'div'>

const SlideServices: React.FC<SlideServicesProps> = ({ isAuth, ...props }) => {
	return (
		<StyledSlide $isAuth={isAuth} {...props}>
			<nav className="block__navigation--services">
				<h2>
					<AppsOutlinedIcon fontSize="large" color="primary" />
					Сервисы
				</h2>
				<section className="navigation__services">
					{NAVIGATION_SERVICES.map((service) => (
						<div
							key={service.title}
							className={`navigation__services__service ${service.isDisabled && 'disabled'}`}
						>
							<a href={service.url} target="_blank" rel="noreferrer">
								<Avatar
									firstName={service.title}
									lastName=" "
									className="navigation__services__service__icon"
									src={service.iconUrl}
									color={service.color}
									size="80px"
									isDisabled={service.isDisabled}
								/>
							</a>
							<p> {service.title} </p>
						</div>
					))}
				</section>
			</nav>
		</StyledSlide>
	)
}

export default SlideServices
