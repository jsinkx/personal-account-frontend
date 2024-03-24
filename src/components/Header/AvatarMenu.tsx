import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Menu from '@mui/material/Menu/Menu'

import Paths from '../../shared/paths'

import { logout } from '../../redux/slices/auth/slice'

import Avatar from '../Avatar'

import { StyledMenuItem } from './styles'

type AvatarMenuProps = {
	id: number
	avatar: string
	color: string
	firstName: string
	lastName: string
}

const AvatarMenu: React.FC<AvatarMenuProps> = ({ id, avatar, color, firstName, lastName }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleClickProfile = () => {
		handleClose()

		navigate(Paths.profile.dynamic(id))
	}

	const handleClickSettings = () => {
		handleClose()

		navigate(Paths.profile.dynamic(id))
	}

	const handleClickLogout = () => {
		handleClose()

		dispatch(logout())

		window.localStorage.removeItem('token')
		window.sessionStorage.removeItem('token')
	}

	return (
		<>
			<Avatar
				id="avatar-button"
				aria-controls={open ? 'avatar-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				src={avatar}
				color={color}
				firstName={firstName}
				lastName={lastName}
				size="45px"
			/>
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'avatar-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<StyledMenuItem onClick={handleClickProfile}> Профиль </StyledMenuItem>
				<StyledMenuItem onClick={handleClickSettings}> Настройки </StyledMenuItem>
				<StyledMenuItem onClick={handleClickLogout}>Выйти</StyledMenuItem>
			</Menu>
		</>
	)
}

export default AvatarMenu
