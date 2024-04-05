import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Box, Tab, Tabs } from '@mui/material'

import Paths from '../../../shared/paths'

type ProfilePortfolioProps = {}

const NAVIGATION_ELEMENTS = [
	{
		title: 'Обо мне',
		path: Paths.profile.children.aboutMe,
	},
	{
		title: 'Стена',
		path: Paths.profile.children.wall,
	},
	{
		title: 'Портфолио',
		path: Paths.profile.children.portfolio,
	},
]

const ProfilePortfolio: React.FC<ProfilePortfolioProps> = () => {
	const navigate = useNavigate()

	const location = useLocation()
	const pathArray = location.pathname.split('/')

	const [currentTab, setCurrentTab] = useState(String(NAVIGATION_ELEMENTS[0]!.path))

	const handleChange = (_: React.SyntheticEvent, newValue: string) => {
		setCurrentTab(newValue)
	}

	useEffect(() => {
		pathArray[3] && setCurrentTab(pathArray[3])
	}, [pathArray])

	return (
		<div>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={currentTab} onChange={handleChange}>
					{NAVIGATION_ELEMENTS.map((item, index) => (
						<Tab
							key={item.path}
							onClick={() => navigate(item.path)}
							label={item.title}
							value={item.path}
							sx={{
								borderRadius: index === 0 ? '25px' : '0',
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,
								borderBottomLeftRadius: 0,
							}}
						/>
					))}
				</Tabs>
			</Box>
			<div className="profile__content__main-box">
				<Outlet />
			</div>
		</div>
	)
}

export default ProfilePortfolio
