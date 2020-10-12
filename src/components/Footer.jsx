import React, { Component } from 'react'

import './styles.css';

class Footer extends Component {
	render () {
		return (
			<footer className="bg-light text-dark">
				<div className="container">
					<div className="row">
						<div className="col text-center">
							&copy;2019 Semut Merah Informatika.
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;