import { createSlice } from '@reduxjs/toolkit'

import ThemesStyledComponents from '@shared/themes/styled-components/theme-styled-components'

import { AppSettingsState } from './types'

const initialState: AppSettingsState = {
	theme: ThemesStyledComponents.LIGHT,
}

const appSettingsSlice = createSlice({
	name: 'appSettings',
	initialState,
	reducers: {
		switchTheme: (state) => {
			state.theme =
				state.theme === ThemesStyledComponents.LIGHT ? ThemesStyledComponents.DARK : ThemesStyledComponents.LIGHT
		},
	},
})

export const { switchTheme } = appSettingsSlice.actions

export const appSettingsReducer = appSettingsSlice.reducer
