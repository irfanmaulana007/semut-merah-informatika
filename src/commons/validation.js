/* eslint-disable eqeqeq */
import _ from 'lodash';

import store from './../store';

import { formErrorHandler } from './../actions';

export const eventRegistration = (payload) => {
	const { name, email, phone, company } = payload;
	if (name === "") {
		store.dispatch(formErrorHandler('*Nama must be filled'));
		return false;
	}
	if (email === "") {
		store.dispatch(formErrorHandler('*Email must be filled'));
		return false;
	}
	if (phone === "") {
		store.dispatch(formErrorHandler('*Phone must be filled'));
		return false;
	}
	if (company === "") {
		store.dispatch(formErrorHandler('*Company must be filled'));
		return false;
	}

	store.dispatch(formErrorHandler(''));
	return true;
}

export const eventRegistrationCorporateMail = (payload) => {
	const { name, email, phone, company } = payload;

	if (name === "") {
		store.dispatch(formErrorHandler('*Nama must be filled'));
		return false;
	}
	if (email === "") {
		store.dispatch(formErrorHandler('*Email must be filled'));
		return false;
	}
	if (email.includes('yahoo') || email.includes('gmail') || email.includes('hotmail') || email.includes('aol') || email.includes('msn') || email.includes('comcast') || email.includes('live') || email.includes('rediffmail') || email.includes('ymail') || email.includes('outlook') || email.includes('googlemail') || email.includes('rocketmail') || email.includes('icloud')) {
		store.dispatch(formErrorHandler('*You must use corporate email'));
		return false;
	}
	if (phone === "") {
		store.dispatch(formErrorHandler('*Phone must be filled'));
		return false;
	}
	if (company === "") {
		store.dispatch(formErrorHandler('*Company must be filled'));
		return false;
	}

	store.dispatch(formErrorHandler(''));
	return true;
}
