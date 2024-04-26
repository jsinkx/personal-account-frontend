import React, { useState } from 'react'

import { MuiColorInput } from 'mui-color-input'

import axiosInstance from '@shared/axios'

import { selectAuthData } from '@redux/slices/auth/selectors'
import { fetchAuthMe } from '@redux/slices/auth/slice'

import useAppDispatch from '@hooks/useAppDispatch'
import useAppSelector from '@hooks/useAppSelector'

import Error from '@components/Error'

import { Alert, Button, TextField } from '@mui/material'

const SettingsAccount: React.FC = () => {
	const dispatch = useAppDispatch()

	const { first_name, last_name, patronymic, background_color, birthday, description } =
		useAppSelector(selectAuthData)!

	const [newFirstName, setNewFirstName] = useState(first_name)
	const [newLastName, setNewLastName] = useState(last_name)
	const [newPatronymic, setNewPatronymic] = useState(patronymic)
	const [newBackgroundColor, setNewBackgroundColor] = useState(background_color)
	const [newDescription, setNewDescription] = useState(description)

	const [isLoading, setIsLoading] = useState<boolean | null>(null)
	const [isError, setIsError] = useState(false)

	const handleChangeFirstName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setNewFirstName(event.target.value)
	}

	const handleChangeLastName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setNewLastName(event.target.value)
	}

	const handleChangePatronymic: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setNewPatronymic(event.target.value)
	}

	const handleChangeBackgroundColor = (color: string) => {
		setNewBackgroundColor(color)
	}

	const handleChangeDescription: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		setNewDescription(event.target.value)
	}

	const isDisabled = !!isLoading

	const handleClickSaveSettingsAccount = async () => {
		const newAccountInfoBody = {
			first_name: newFirstName,
			last_name: newLastName,
			patronymic: newPatronymic,
			birthday,
			description: newDescription,
			background_color: newBackgroundColor,
		}

		try {
			setIsError(false)
			setIsLoading(true)

			await axiosInstance.post('/account/edit/info', newAccountInfoBody)

			dispatch(fetchAuthMe())
		} catch (err) {
			setIsError(true)
		}
		setIsLoading(false)
	}

	return (
		<div>
			{isError && <Error> Произошла ошибка, попробуйте позже </Error>}
			{isLoading !== null && !isError && <Alert severity="success"> Данные успешно изменены </Alert>}
			<h2>Общая информация </h2>
			<div className="settings__content__group__name">
				<TextField
					value={newFirstName}
					onChange={handleChangeFirstName}
					label="Имя"
					placeholder="Имя"
					autoComplete="firstName"
					disabled={isDisabled}
					sx={{
						marginRight: '20px',
					}}
				/>
				<TextField
					value={newLastName}
					onChange={handleChangeLastName}
					label="Фамилия"
					placeholder="Фамилия"
					autoComplete="lastName"
					disabled={isDisabled}
					sx={{
						marginRight: '20px',
					}}
				/>
				<TextField
					value={newPatronymic}
					onChange={handleChangePatronymic}
					label="Отчество"
					placeholder="Отчество"
					autoComplete="patronymic"
					disabled={isDisabled}
					sx={{
						marginRight: '20px',
					}}
				/>
			</div>
			<div className="settings__content__group__other">
				<MuiColorInput
					format="hex"
					value={newBackgroundColor}
					onChange={handleChangeBackgroundColor}
					label="Цвет фона"
					disabled={isDisabled}
					sx={{
						width: '200px',
						marginBottom: '30px',
					}}
				/>
				<TextField
					value={newDescription}
					onChange={handleChangeDescription}
					label="Описание"
					placeholder="Описание"
					multiline
					sx={{
						width: '440px',
					}}
					disabled={isDisabled}
				/>
			</div>

			<Button onClick={handleClickSaveSettingsAccount} variant="outlined" color="success" disabled={isDisabled}>
				Сохранить
			</Button>
		</div>
	)
}

export default SettingsAccount
