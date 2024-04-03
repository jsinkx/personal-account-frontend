import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import Logout from '@mui/icons-material/Logout'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import Settings from '@mui/icons-material/Settings'
import { Button, Dialog, DialogActions, DialogTitle, ListItemIcon } from '@mui/material'
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
	const [isOpenDialog, setIsOpenDialog] = useState(false)

	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleCloseDialog = () => {
		setIsOpenDialog(false)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleClickProfile = () => {
		handleClose()

		navigate(Paths.profile.dynamic(id))
	}

	const handleClickEditProfile = () => {
		handleClose()

		navigate(Paths.profile.dynamic(id))
	}

	const handleClickSettings = () => {
		handleClose()

		navigate(Paths.profile.dynamic(id))
	}

	const handleLogout = () => {
		dispatch(logout())

		window.localStorage.removeItem('token')
		window.sessionStorage.removeItem('token')
	}

	const handleClickLogout = () => {
		setIsOpenDialog(true)
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
				className="header__avatar__menu__button"
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
				<StyledMenuItem onClick={handleClickProfile}>
					<ListItemIcon>
						<AccountCircleOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Профиль
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClickEditProfile}>
					<ListItemIcon>
						<ModeEditOutlinedIcon fontSize="small" />
					</ListItemIcon>
					Редактировать
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClickSettings}>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Настройки
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClickLogout}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Выйти
				</StyledMenuItem>
			</Menu>
			<Dialog
				open={isOpenDialog}
				onClose={handleCloseDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				sx={{
					userSelect: 'none',
				}}
			>
				<DialogTitle id="alert-dialog-title">Вы действительно хотите выйти ?</DialogTitle>
				<DialogActions>
					<Button onClick={handleLogout} autoFocus>
						Да
					</Button>
					<Button onClick={handleCloseDialog}>Нет</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default AvatarMenu
