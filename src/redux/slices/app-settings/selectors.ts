import { RootState } from '@redux/types'

export const selectAppSettings = (state: RootState) => state.appSettings
export const selectAppSettingsTheme = (state: RootState) => state.appSettings.theme
