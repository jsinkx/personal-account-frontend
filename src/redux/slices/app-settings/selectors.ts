import { RootState } from '@redux/types'

export const selectAppSettingsTheme = (state: RootState) => state.appSettings.theme
