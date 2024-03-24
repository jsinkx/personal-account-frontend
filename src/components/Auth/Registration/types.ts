export type FirstStepInputs = {
	login: string
	email: string
	password: string
	passwordConfirm: string
}

export type FirstStepKeys = (keyof FirstStepInputs)[]

export type SecondStepInputs = {
	firstName: string
	lastName: string
	patronymic: string
}

export type SecondStepKeys = (keyof SecondStepInputs)[]

export type FormRegistrationValues = FirstStepInputs & SecondStepInputs
