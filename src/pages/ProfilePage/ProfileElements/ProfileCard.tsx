import React, { useState } from 'react'

import moment from 'moment'
import 'moment/dist/locale/ru'

import Avatar from '@components/Avatar'
import EmailIcon from '@components/Icons/EmailIcon'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined'
import { Divider, Snackbar } from '@mui/material'

type ProfileCardProps = {
	isOnline: boolean
	lastOnlineDate: string
	avatar: string
	firstName: string
	lastName: string
	color: string
	login: string
	description: string
	mainLocation?: string
	email: string
	birthday?: string
	createdAt: string
	isEditable?: boolean
}

moment.locale('ru')

const ProfileCard: React.FC<ProfileCardProps> = ({
	isOnline,
	lastOnlineDate,
	avatar,
	firstName,
	lastName,
	color,
	login,
	description,
	mainLocation,
	email,
	birthday,
	createdAt,
	isEditable,
}) => {
	const [isOpenSnackbarCopy, setIsOpenSnackbarCopy] = useState(false)

	const handleClickCopyEmail: React.MouseEventHandler<HTMLSpanElement> = () => {
		navigator.clipboard.writeText(email)
		setIsOpenSnackbarCopy(true)
	}

	// TODO: Add tooltips for overflowed text elements in description

	console.log('is editable', isEditable) // FIX
        
	return (
		<div className="profile-card">
			<Avatar
				src={avatar}
				firstName={firstName}
				lastName={lastName}
				color={color}
				size="240px"
				fullSize
				className="profile-card__avatar"
			/>
			<section className="profile-card__info">
				<div className="profile-card__info__name">
					<span>{firstName}</span>
					<span>{lastName}</span>
					{isOnline && <div className="profile-card__info__status" title="В сети" />}
				</div>
				{description && <p className="profile-card__info__description">{description}</p>}
				<Divider flexItem />
				{!isOnline && (
					<p className="profile-card__info__last-online">Был в сети {moment(lastOnlineDate).fromNow()}</p>
				)}
				<ul className="profile-card__info__connections">
					<li>
						<AccountCircleOutlinedIcon
							fontSize="small"
							className="profile-card__info__connections__connect--icon"
							sx={{
								color,
							}}
						/>
						<span>{login}</span>
					</li>
					{mainLocation && (
						<li>
							<LocationOnOutlinedIcon
								fontSize="small"
								className="profile-card__info__connections__connect--icon"
								sx={{
									color,
								}}
							/>
							<span>{mainLocation}</span>
						</li>
					)}
					<li className="profile-card__info__connections__connect__email">
						<EmailIcon color={color} className="profile-card__info__connections__connect__email" />
						<span className="profile-card__info__connections__connect__email--wrap" onClick={handleClickCopyEmail}>
							<span title="Скопировать">{email}</span>
							<FileCopyOutlinedIcon
								sx={{
									height: '15px',
									width: '15px',
									marginLeft: '5px',
									opacity: '0.3',
								}}
							/>
						</span>
					</li>
					{birthday && (
						<li>
							<CakeOutlinedIcon
								fontSize="small"
								className="profile-card__connections__connect--icon"
								sx={{
									color,
								}}
							/>
							<span>{moment(birthday).format('DD.MM.YYYY')}</span>
						</li>
					)}
					<li>
						<SensorDoorOutlinedIcon
							fontSize="small"
							className="profile-card__connections__connect--icon"
							sx={{
								color,
							}}
						/>
						<span>{moment(createdAt).format('DD.MM.YYYY')}</span>
					</li>
				</ul>
			</section>
			<Snackbar
				open={isOpenSnackbarCopy}
				onClose={() => setIsOpenSnackbarCopy(false)}
				message="Скопировано"
				autoHideDuration={1.1 * 1000}
			/>
		</div>
	)
}

export default ProfileCard
