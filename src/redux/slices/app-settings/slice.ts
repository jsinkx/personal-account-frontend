import { createSlice } from '@reduxjs/toolkit'

import ThemesStyledComponents from '@shared/themes/styled-components/theme-styled-components'

import { AppSettingsState } from './types'

const initialState: AppSettingsState = {
	theme: ThemesStyledComponents.LIGHT,
	isDisplayVersion: true,
}

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		switchTheme: (state) => {
			state.theme =
				state.theme === ThemesStyledComponents.LIGHT ? ThemesStyledComponents.DARK : ThemesStyledComponents.LIGHT
		},
		switchIsDisplayVersion: (state) => {
			state.isDisplayVersion = !state.isDisplayVersion
		},
	},
})

export const { switchTheme, switchIsDisplayVersion } = appSettingsSlice.actions

export const appSettingsReducer = appSettingsSlice.reducer
