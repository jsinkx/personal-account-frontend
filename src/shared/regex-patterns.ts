export const LOGIN_PATTERN = /[a-z0-9_]/

export const PASSWORD_PATTERN = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/

export const EMAIL_PATTERN =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const NAME_PATTERN = /[А-ЯЁ]{1}[а-яё]/
