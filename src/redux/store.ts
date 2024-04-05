import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@redux/slices/auth/slice'

import { appSettingsReducer } from './slices/app-settings/slice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		appSettings: appSettingsReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export default store
