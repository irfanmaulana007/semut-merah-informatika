import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkedAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const GoogleMapsApiKey = "AIzaSyClpd2vodlKJKTsKeUWOTu6kpGbFkD3UB0";
const latlng = '-6.254558, 106.813444';

class Contact extends Component {
	constructor (props) {
		super(props);
		this.state = {}
	}

	render () {
		return (
			<div id="contact" className="content">
				<div className="container">
					<h3 className="text-center">Let's Smash Your Goals Together</h3>
					<hr className="underline" />
					<br/>
					<div className="row">
						<div className="col-md-8 col-12 mb-3">
							<iframe
								title="maps"
								id="maps"
								width="100%"
								height="400px"
								frameBorder="0"
								src={
									`https://www.google.com/maps/embed/v1/place?
									key=`+GoogleMapsApiKey+
									`&center=`+latlng+
									`&zoom=15
									&q=WellSpace+Kemang, Jakarta+Indonesia`
								}>
							</iframe>
						</div>
						<div className="col-md-4 col-12 mb-3">
							<h5 className="text-theme">Questions or feedback? Contact us by any of the channels below. We'll respond ASAP!</h5>
							<br/>
							<div className="row mb-2">
								<div className="col-1"><FontAwesomeIcon icon={faPhone}/></div>
								<div className="col">(62) 021 - 8379 1709</div>
							</div>
							<div className="row mb-2">
								<div className="col-1"><FontAwesomeIcon icon={faEnvelope}/></div>
								<div className="col">info@smi-data.com</div>
							</div>
							<div className="row mb-2">
								<div className="col-1"><FontAwesomeIcon icon={faMapMarkedAlt}/></div>
								<div className="col">Jl. Bangka XII No.4, RT.2/RW.7, Pela Mampang, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12720</div>
							</div>
							<div className="row mb-2">
								<div className="col-1"><FontAwesomeIcon icon={faUserFriends}/></div>
								<div className="col">0818 876 687 / 0812 8007 0899 (Sales Representative)</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Contact;