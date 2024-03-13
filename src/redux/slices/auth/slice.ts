import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { AxiosError } from 'axios'

import {
	AuthError,
	AuthLoginRequest,
	AuthLoginResponse,
	AuthMeResponse,
	AuthRegistrationRequest,
	AuthRegistrationResponse,
	AuthState,
} from './types'

import axios from '../../../shared/axios'
import Status from '../../../shared/status'

// Thunks

// Registration
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

// Login
export const fetchAuthLogin = createAsyncThunk<AuthLoginResponse, AuthLoginRequest>(
	'auth/fetchLogin',

	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axios.post<AuthLoginResponse>('/account/login', params)

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

// Me
export const fetchAuthMe = createAsyncThunk<AuthMeResponse>(
	'auth/fetchMe',

	async (_: void, { rejectWithValue }) => {
		try {
			const { data } = await axios.get<AuthMeResponse>('/account/me')

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
		// Registration
		builder.addCase(fetchAuthRegistration.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		})
		builder.addCase(fetchAuthRegistration.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = Status.LOADED
		})
		builder.addCase(fetchAuthRegistration.rejected, (state) => {
			state.data = null
			state.status = Status.ERROR
		})
		// Login
		builder.addCase(fetchAuthLogin.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		})
		builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = Status.LOADED
		})
		builder.addCase(fetchAuthLogin.rejected, (state) => {
			state.data = null
			state.status = Status.ERROR
		})
		// Me
		builder.addCase(fetchAuthMe.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		})
		builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = Status.LOADED
		})
		builder.addCase(fetchAuthMe.rejected, (state) => {
			state.data = null
			state.status = Status.ERROR
		})
	},
})

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
