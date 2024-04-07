import React, { useState } from 'react'

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { Badge, IconButton, Menu, MenuItem } from '@mui/material'

type HeaderNotificationsProps = {}

const HeaderNotifications: React.FC<HeaderNotificationsProps> = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<IconButton onClick={handleClick}>
				<Badge badgeContent={3} color="error">
					<NotificationsNoneOutlinedIcon />
				</Badge>
			</IconButton>
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'avatar-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<MenuItem> Тестовое оповещение </MenuItem>
				<MenuItem> Тестовое оповещение </MenuItem>
				<MenuItem> Тестовое оповещение </MenuItem>
			</Menu>
		</>
	)
}

export default HeaderNotifications
