import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { authReducer } from '@redux/slices/auth/slice'

import { appSettingsReducer } from './slices/app-settings/slice'

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	auth: authReducer, // TODO: Try this without adding in blacklist and with using update via backend requests, how it will works
	appSettings: appSettingsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store)

export default store
