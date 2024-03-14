import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slices/auth/slice'

const store = configureStore({
	reducer: {
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export default store
