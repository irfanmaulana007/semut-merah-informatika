/* eslint-disable eqeqeq */
import store from './../store';

import { formErrorHandler } from './../actions';

export const eventRegistration = (payload) => {
	if (payload.name === "") {
		store.dispatch(formErrorHandler('*Nama must be filled'));
		return false;
	}
	if (payload.email === "") {
		store.dispatch(formErrorHandler('*Email must be filled'));
		return false;
	}
	if (payload.phone === "") {
		store.dispatch(formErrorHandler('*Phone must be filled'));
		return false;
	}
	if (payload.company === "") {
		store.dispatch(formErrorHandler('*Company must be filled'));
		return false;
	}

	store.dispatch(formErrorHandler(''));
	return true;
}
