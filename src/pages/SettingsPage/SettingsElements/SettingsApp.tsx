import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ThemesStyledComponents from '@shared/themes/styled-components/theme-styled-components'

import { selectAppSettings } from '@redux/slices/app-settings/selectors'
import { switchIsDisplayVersion } from '@redux/slices/app-settings/slice'

import ThemeSwitcher from '@components/Themes/ThemesSwitcher'

import { FormControlLabel, FormGroup, Switch } from '@mui/material'

const SettingsApp: React.FC = () => {
	const dispatch = useDispatch()

	const { theme, isDisplayVersion } = useSelector(selectAppSettings)

	const themeName = theme === ThemesStyledComponents.LIGHT ? 'светлая' : 'темная'

	const handleChangeIsDisplayVersion = () => {
		dispatch(switchIsDisplayVersion())
	}

	return (
		<div>
			<h2> Настройки приложения </h2>
			<div>
				<ThemeSwitcher /> Тема {themeName}
				<FormGroup>
					<FormControlLabel
						control={<Switch checked={isDisplayVersion} onChange={handleChangeIsDisplayVersion} />}
						label="Отображать версию"
					/>
				</FormGroup>
			</div>
		</div>
	)
}

export default SettingsApp
