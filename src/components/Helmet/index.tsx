import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet-async'

import DEFAULT_KEYWORDS from '../../shared/app-keywords'
import { CLIENT_URL, ICON_LOGO_URL } from '../../shared/constants'

type MainLayoutProps = {
	title?: string
	description?: string
	keywords?: string[]
	image?: string
}

const Helmet: React.FC<MainLayoutProps> = ({ title, description = '', keywords = [], image }) => {
	const _title = `${(title && title.concat(' - ')) || ''}Личный кабинет WISH EDU`
	const _description = description
	const _image = image || ICON_LOGO_URL

	return (
		<ReactHelmet>
			<title> {_title} </title>
			<meta name="description" content={_description} />
			<meta name="keywords" content={[...DEFAULT_KEYWORDS, ...keywords].join(', ')} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title || _title} />
			<meta property="og:url" content={CLIENT_URL} />
			<meta property="og:site_name" content="Личный кабинет WISH EDU" />
			<meta property="og:description" content={_description} />
			<meta property="og:image" content={_image} />
			<meta itemProp="image" content={_image} />
			<link rel="image_src" href={_image} />
			<link rel="canonical" href={CLIENT_URL} />
		</ReactHelmet>
	)
}

export default Helmet
