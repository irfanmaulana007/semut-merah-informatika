import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faTable, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from "react-visibility-sensor";

class Database extends Component {
	render () {
		return (
			<div id="service-database" className="content pt-0 pb-0">
				<div className="container">
					<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
						{({ isVisible }) => (
							<div>
								<div className={isVisible ? "slideUp enter tr-1" : "slideUp tr-1"}>
									<h5 className="text-center">Database</h5>
									<hr className="underline" />
								</div>
								<br/>
								<div className={`row ` + (isVisible ? `slideUp enter tr-2` : `slideUp tr-2`)}>
									<div className="col">
										<p>An end-to-end data science service that helps you build or improve machine learning and optimization model with any platform that suits your company.</p>
									</div>
								</div>
								<div className={`row ` + (isVisible ? `slideUp enter tr-3` : `slideUp tr-3`)}>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faDatabase} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Big Data</b></h6>
												<p>We handle the configuring of your Big Data platform, data loading, combining, transforming, and retrieving to prepare your data for fur- ther analytical process.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faTable} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Data Warehouse</b></h6>
												<p>We use various tools and techniques to extract data from multiple sources, transform it into dimension and fact tables, and load the result into a single data warehouse, ready to use.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faChartLine} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Business Intelligence</b></h6>
												<p>We’re ready to prepare and deliver your data insights to help you meet your business needs. This process includes data extraction, data transformation, data loading, and visualization.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faCogs} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Performance Tuning and Optimization (PTO)</b></h6>
												<p>Database performance tuning and optimization (PTO) where we fol- low best practices and guidelines to improve your databases per- formance. First we assess the database current condition and plan our tuning activities accordingly. This may includes query tuning and configuring database setting.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</VisibilitySensor>
				</div>
			</div>
		)
	}
}

export default Database;