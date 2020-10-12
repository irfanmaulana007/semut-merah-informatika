import React, { Component } from 'react'

import './styles.css'

class About extends Component {
	render () {
		return (
			<div id="about" className="content bg-section-2">
				<div className="container">
					{/* <h3 className="text-center">Semut Merah Informatika</h3>
					<hr className="underline" />
					<br/><br/> */}

					<div className="row">
						<div className="col">
							<h4>Founded in 2016, focuses on Analytics, Data Platform, Machine Learning, Database, IT Infrastructure, and Project Management.</h4>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p className="mb-2">We work together with our Clients and where required with alliances or partners to provide the best solutions for the project. SMI believes in demonstrating one team attitude led by our management. Since its establishment, SMI aims to provide the best solutions for our Clients. Continual improvement is frequently instilled with our personnel and company goals to benefit the Clients.</p>
							<p className="mb-2"><i>Our dedicated staff has added values to our various Clients in multiple industries from government , retail industries and many others through all stages of Database modelling implementation.</i></p>
						</div>
					</div>

					<br/>

					<div className="row">
						<div className="col">
							<div className="row">
								<div className="col">
									<h5 className="text-center">Vision</h5>
									<p className="mb-2 text-center">Be a world class Construction Consultant by turning our Clients’ plans into reality through our integrated and economically viable solutions, thereby creating true partnership with our Clients.</p>
								</div>
								<div className="col">
									<h5 className="text-center">Mission</h5>
									<p className="mb-2 text-center">SMI is a dedicated team, which works towards building Client, Shareholder, Staff, and Community satisfaction</p>
								</div>
							</div>

							<br/>
							{/* <div className="row">
								<div className="col-6">
									<h6 className="text-center">Clients</h6>
									<p>Provide professional and cost effective services to achieve our Clients’ goals.</p>
								</div>
								<div className="col-6">
									<h6 className="text-center">Shareholders</h6>
									<p>Creating profitable growth and increased company value.</p>
								</div>
								<div className="col-6">
									<h6 className="text-center">Staff</h6>
									<p>Commit to personal growth within a stable and rewarding working environment.</p>
								</div>
								<div className="col-6">
									<h6 className="text-center">Community Satisfaction</h6>
									<p>Implement conscience minded decisions to reduce the environmental impact from IT Design Solution and always respecting the community and cultures of which we are a part of.</p>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;