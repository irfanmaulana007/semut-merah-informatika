import axios from 'axios';
import _ from 'lodash';

import { API_URL } from './config';
import { createErrorObject } from '../components/utils/createErrorObject';
import { createNotification } from '../components/utils/Notifications';

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.interceptors.request.use(
	config => {
		let token = localStorage.getItem('token')
  
		if (token) {
		  config.headers['Authorization'] = `Bearer ${ token }`
		}
	
		return config
	},
	error => {
		return Promise.reject(error);
	}
)

const apiService = {
	get (resource) {
		return axios
			.get(resource)
			.then((res) => {
				return res
			})
            .catch((err) => {
				if (err.response.status === 401) {
					localStorage.clear();
					createNotification('error', 'Silahkan melakukan login ulang.', 'Session habis');
					// this.props.history.push("/login");
					// window.location("/login");
				} else {
					createNotification('error', 'Kontak IT Support untuk mengetahui kendala.', 'Terjadi kesalahan');
				}
				createErrorObject(err.response.status);

				throw err;
            })
	},

	put (resource, params) {
		return axios
			.put(resource, params)
            .catch((err) => {
				if (err.response.status === 401) {
					localStorage.clear();
					createNotification('error', 'Silahkan melakukan login ulang.', 'Session habis');
					// this.props.history.push("/login");
					// window.location("/login");
				} else {
					createNotification('error', 'Kontak IT Support untuk mengetahui kendala.', 'Terjadi kesalahan');
				}
				createErrorObject(err.response.status);

				throw err;
            })
	},

	post (resource, params) {
		return axios
			.post(resource, params)
            .catch((err) => {
				console.error(err.response);
				if (err.response.status === 401) {
					localStorage.clear();
					createNotification('error', 'Silahkan melakukan login ulang.', 'Session habis');
					// this.props.history.push("/login");
					// window.location = "/login";
				} else {
					createNotification('error', _.get(err, 'response.data.message', 'Kontak IT Support untuk mengetahui kendala.'), 'Terjadi kesalahan');
				}
				createErrorObject(err.response.status);

				throw err;
            })
	},

	delete (resource) {
		return axios
			.delete(resource)
            .catch((err) => {
				if (err.response.status === 401) {
					localStorage.clear();
					createNotification('error', 'Silahkan melakukan login ulang.', 'Session habis');
					this.props.history.push("/login");
				} else {
					createNotification('error', 'Kontak IT Support untuk mengetahui kendala.', 'Terjadi kesalahan');
				}
				createErrorObject(err.response.status);

				throw err;
            })
	}
}

export const EventService = {
	get (eventNavActive) {
		return apiService
			.get('events?eventType=' + eventNavActive)
	},
    
	detail (id) {
		return apiService
			.get('events/' + id)
	},
    
	create (payload) {
		return apiService
			.post('events', payload)
	},
    
	update (id, payload) {
		return apiService
			.put('events/' + id, payload)
	},
    
	delete (id) {
		return apiService
			.delete('events/' + id)
	},
}

export const OccupationService = {
	get () {
		return apiService
			.get('occupations')
	},
    
	detail (id) {
		return apiService
			.get('occupations/' + id)
	},
    
	create (payload) {
		return apiService
			.post('occupations', payload)
	},
    
	update (id, payload) {
		return apiService
			.put('occupations/' + id, payload)
	},
    
	delete (id) {
		return apiService
			.delete('occupations/' + id)
	},
}


export const EventRegistrationService = {
	get () {
		return apiService
			.get('event-registration')
	},
    
	detail (id) {
		return apiService
			.get('event-registration/' + id)
	},
    
	create (payload) {
		return apiService
			.post('event-registration', payload)
	},
    
	update (id, payload) {
		return apiService
			.put('event-registration/' + id, payload)
	},
    
	delete (id) {
		return apiService
			.delete('event-registration/' + id)
	},
}

export const MailService = {
	sendPaymentInstruction (payload) {
		return apiService
			.post('email/payment', payload)
	},

	sendRegistrantInformation (payload) {
		return apiService
			.post('email/registrant', payload)
	}
}