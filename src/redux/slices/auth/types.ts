import Status from '../../../shared/status'

export type UserGroup = {
	id: number
	name: string
}

export type UserRole = {
	id: number
	name: string
}

export type User = {
	id: number
	login: string
	email: string
	first_name: string
	last_name: string
	created_at: string
	description: string
	background_color: string
	birthday: string
	patronymic: string
	avatar: string
	groups: UserGroup[]
	roles: UserRole[]
	permissions: unknown[]
}

// Registration

export type AuthRegistrationRequest = {
	login: string
	password: string
	email: string
	first_name: string
	last_name: string
	patronymic: string
}

export type AuthRegistrationResponse = User & { token: string }

// Login

export type AuthLoginRequest = {
	login: string
	password: string
}

export type AuthLoginResponse = User & { token: string }

// Me

export type AuthMeResponse = User & { token: string }

export type AuthError = {
	errorMessage: string
}

export type AuthResponse = User & { token: string }

export type AuthState = {
	data: AuthResponse | null
	status: Status
}
