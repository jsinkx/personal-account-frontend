import React from 'react'

import { For, block } from 'million/react'
import moment from 'moment'

import Paths from '@shared/paths'

import { CustomLink } from '@components/CustomLink'

import StyledFooter from './styles'

type FooterProps = {} & React.ComponentPropsWithoutRef<'footer'>

const NAVIGATION_ELEMENTS = [
	{
		title: 'О нас',
		path: Paths.about,
	},
	{
		title: 'Соглашение',
		path: Paths.termsAndConditions,
	},
	{
		title: 'Контакты',
		path: Paths.contacts,
	},
	{
		title: 'Вакансии',
		path: Paths.vacancy,
	},
	{
		title: 'API',
		path: Paths.apiDocumentation,
	},
]

const Footer: React.FC<FooterProps> = block((props) => {
	const currentYear = moment().year()

	return (
		<StyledFooter {...props}>
			<p>© {currentYear} WISH EDU</p>
			<nav>
				<ul>
					<For each={NAVIGATION_ELEMENTS}>
						{(element) => (
							<li>
								<CustomLink to={element.path}>{element.title} </CustomLink>
							</li>
						)}
					</For>
				</ul>
			</nav>
		</StyledFooter>
	)
})

export default Footer
