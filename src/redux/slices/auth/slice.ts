import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AxiosError } from 'axios'

import { AuthError, AuthRegistrationRequest, AuthRegistrationResponse, AuthState } from './types'

import axios from '../../../shared/axios'
import Status from '../../../shared/status'

// Thunks

export const fetchAuthRegistration = createAsyncThunk<AuthRegistrationResponse, AuthRegistrationRequest>(
	'auth/fetchRegistration',

	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axios.post<AuthRegistrationResponse>('/account/registration', params)

			return data
		} catch (_error) {
			const error = _error as AxiosError<AuthError>

			if (!error?.response) {
				throw _error
			}

			return rejectWithValue(error.response.data)
		}
	},
)

const initialState: AuthState = {
	data: null,
	status: Status.INIT,
	error: null,
}

// Slice

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.data = null
			state.status = Status.LOADED
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthRegistration.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
			state.error = null
		})
		builder.addCase(fetchAuthRegistration.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = Status.LOADED
			state.error = null
		})
		builder.addCase(fetchAuthRegistration.rejected, (state, action) => {
			state.data = null
			state.status = Status.ERROR
			state.error = action.payload as unknown as AuthError /* TODO: FIX: from as chain to type error */
		})
	},
})

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
