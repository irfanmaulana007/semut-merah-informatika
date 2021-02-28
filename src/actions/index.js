export const startLoading = (message) => {
	return {
		type: "START_LOADING",
		payload: message
	}
}
export const stopLoading = () => {
	return {
		type: "STOP_LOADING"
	}
}

export const formErrorHandler = (field) => {
	return {
		type: "FORM_ERROR_HANDLER",
		payload: field
	}
}