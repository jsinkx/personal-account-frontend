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

const Helmet: React.FC<MainLayoutProps> = ({
	title: _title,
	description = '',
	keywords = [],
	image: _image,
}) => {
	const title = `${(_title && _title.concat(' - ')) || ''}WISH EDU`
	const image = _image || ICON_LOGO_URL

	return (
		<ReactHelmet>
			<title> {title} </title>
			<meta name="description" content={description} />
			<meta name="keywords" content={[...DEFAULT_KEYWORDS, ...keywords].join(', ')} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title || _title} />
			<meta property="og:url" content={CLIENT_URL} />
			<meta property="og:site_name" content="Экосистема WISH EDU" />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta itemProp="image" content={image} />
			<link href={image} />
			<link rel="canonical" href={CLIENT_URL} />
		</ReactHelmet>
	)
}

export default Helmet
