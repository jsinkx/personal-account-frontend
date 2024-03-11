// To avoid problems with importing and setting original watch type from react-hook-form it was accepted to implement own easy type
type WatchFuncImplement = <T>(field: T) => string

const checkFieldsValidity = <T>(fields: T[], errorFields: T[], watch: WatchFuncImplement) => {
	let isValidFields = true

	fields.forEach((field) => {
		if (errorFields.includes(field) || watch(field) === '') isValidFields = false
	})

	return isValidFields
}

export default checkFieldsValidity
