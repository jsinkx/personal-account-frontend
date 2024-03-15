export type ErrorWithMessage = { errorMessage: string }

// Returns true if error rejected from server and has data (errorMessage)
const isErrorWithMessage = (error: unknown): error is ErrorWithMessage => {
	return typeof error === 'object' && error !== null && 'errorMessage' in error
}

export default isErrorWithMessage
