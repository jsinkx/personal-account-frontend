import React, { useState } from 'react'

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import { IconButton, Menu, MenuItem } from '@mui/material'

type NotificationsProps = {}

const Notifications: React.FC<NotificationsProps> = () => {
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
				<NotificationsNoneOutlinedIcon />
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
			</Menu>
		</>
	)
}

export default Notifications
