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
	background_color: string
	patronymic: string
	birthday: string
	groups: UserGroup[]
	roles: UserRole[]
}

export type AuthRegistrationRequest = {
	login: string
	password: string
	email: string
	first_name: string
	last_name: string
	patronymic: string
}

export type AuthRegistrationResponse = User & { token: string }

export type AuthError = {
	errorMessage: string
}

export type AuthResponse = User & { token: string }

export type AuthState = {
	data: AuthResponse | null
	status: Status
	error: AuthError | null
}
