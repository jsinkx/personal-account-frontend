import React from 'react'
import { useSelector } from 'react-redux'

import { ThemeProvider as ThemeProviderSC } from 'styled-components'

import themeMUI from '@shared/themes/MUI/theme-MUI'
import ThemeStyledComponentsDark from '@shared/themes/styled-components/theme-dark'
import ThemeStyledComponentsLight from '@shared/themes/styled-components/theme-light'
import ThemesStyledComponents from '@shared/themes/styled-components/theme-styled-components'

import { selectAppSettingsTheme } from '@redux/slices/app-settings/selectors'

import { ThemeProvider as ThemeProviderMUI, createTheme } from '@mui/material'

type ThemeStyledComponentsProviderProps = {
	children: React.ReactNode
}

const ThemesProvider: React.FC<ThemeStyledComponentsProviderProps> = ({ children }) => {
	const currentThemeName = useSelector(selectAppSettingsTheme)

	const currentThemeStyledComponents =
		currentThemeName === ThemesStyledComponents.LIGHT ? ThemeStyledComponentsLight : ThemeStyledComponentsDark

	const currentThemeMUI = createTheme({
		palette: {
			mode: currentThemeName === ThemesStyledComponents.LIGHT ? 'light' : 'dark',
			...themeMUI.palette,
		},
		typography: {
			...themeMUI.typography,
		},
	})

	return (
		<ThemeProviderSC theme={currentThemeStyledComponents}>
			<ThemeProviderMUI theme={currentThemeMUI}>{children}</ThemeProviderMUI>
		</ThemeProviderSC>
	)
}

export default ThemesProvider
