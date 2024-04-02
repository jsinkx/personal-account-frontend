import React from 'react'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined'
import { Divider } from '@mui/material'

import moment from 'moment'

import Avatar from '../../components/Avatar'
import EmailIcon from '../../components/Icons/EmailIcon'

import 'moment/dist/locale/ru'

type ProfileCardProps = {
	isOnline: boolean
	lastOnlineDate: string
	avatar: string
	firstName: string
	lastName: string
	color: string
	login: string
	description: string
	email: string
	// birthday: string
	createdAt: string
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
	email,
	createdAt,
}) => {
	const handleClickCopyEmail: React.MouseEventHandler<HTMLSpanElement> = () => {
		navigator.clipboard.writeText(email)
	}

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
				<h3 className="profile-card__info_name">
					{lastName} {firstName}
					{isOnline && <div className="profile-card__info__status" title="В сети" />}
				</h3>
				<p className="profile-card__info__description">{description}</p>
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
					<li className="profile-card__info__connections__connect__email">
						<EmailIcon color={color} className="profile-card__info__connections__connect__email" />
						<span title="Скопировать" onClick={handleClickCopyEmail}>
							{email}
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
		</div>
	)
}

export default ProfileCard
