import React from 'react'

import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined'
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined'

import moment from 'moment'

import Avatar from '../../components/Avatar'

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
	birthday: string
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
	birthday,
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
				size="90px"
				className="profile-card__avatar"
				isOnline={isOnline}
			/>
			<h3 className="profile-card__name">
				{lastName} {firstName}
			</h3>
			<p className="profile-card__login">{login}</p>
			{!isOnline && <p className="profile-card__last-online">Был в сети {moment(lastOnlineDate).fromNow()}</p>}
			<p className="profile-card__description">{description}</p>

			<ul className="profile-card__connections">
				<li className="profile-card__connections__connect__email">
					<EmailOutlinedIcon
						fontSize="small"
						className="profile-card__connections__connect--icon"
						sx={{
							color,
						}}
					/>
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
				{birthday && (
					<li>
						<CakeOutlinedIcon
							fontSize="small"
							className="profile-card__connections__connect--icon"
							sx={{
								color,
							}}
						/>
						{moment(birthday).format('DD.MM.YYYY')}
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
					{moment(createdAt).format('DD.MM.YYYY')}
				</li>
			</ul>
		</div>
	)
}

export default ProfileCard
