//
/**
 * To avoid problems with importing and setting original watch type from react-hook-form it was accepted to implement own easy type
 * Warning! Don't use original watch function, cause this calls rerender on each call this func
 * I recommend to use getValues
 */
type WatchFuncImplement = <T>(field: T) => string

const isValidFields = <T>(fields: T[], errorFields: T[], watch: WatchFuncImplement) => {
	let isValidFieldsFlag = true

	fields.map(async (field) => {
		if (errorFields.includes(field) || watch(field) === '') isValidFieldsFlag = false
	})

	return isValidFieldsFlag
}

export default isValidFields
