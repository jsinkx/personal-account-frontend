import type { RootState } from '../../types'

export const selectAuthStatus = (state: RootState) => state.auth.status

export const selectAuthData = (state: RootState) => state.auth.data

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data)
