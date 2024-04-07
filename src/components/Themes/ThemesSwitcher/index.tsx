import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ThemesStyledComponents from '@shared/themes/styled-components/theme-styled-components'

import { selectAppSettingsTheme } from '@redux/slices/app-settings/selectors'
import { switchTheme } from '@redux/slices/app-settings/slice'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import { IconButton } from '@mui/material'

type ThemeSwitcherProps = {}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
	const dispatch = useDispatch()

	const currentTheme = useSelector(selectAppSettingsTheme)

	const handleClickSwitchTheme: React.MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(switchTheme())
	}

	return (
		<IconButton onClick={handleClickSwitchTheme}>
			{currentTheme === ThemesStyledComponents.LIGHT ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}
		</IconButton>
	)
}

export default ThemeSwitcher
