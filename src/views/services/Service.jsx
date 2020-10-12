import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from "react-visibility-sensor";

import './../styles.css';

const Service = () => {
	return (
		<div id="services" className="content background2 parallax text-light">
			<div className="container">
				<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
					{({ isVisible }) => (
						<div>
							<div className={isVisible ? "slideUp enter tr-1" : "slideUp tr-1"}>
								<h3 className="text-center">Our Services</h3>
								<hr className="underline" />
							</div>
							<br/><br/>
							<div className="row">
								<div className={`col-6 col-md-3 mb-5 text-center ` + (isVisible ? `slideUp enter tr-2` : `slideUp tr-2`)}>
									<a href="/#service-data-science" className="nav-link text-light">
										<FontAwesomeIcon icon={faCodeBranch}/>
										<h5><span>Data</span> Science</h5>
									</a>
								</div>
								<div className={`col-6 col-md-3 mb-5 text-center ` + (isVisible ? `slideUp enter tr-3` : `slideUp tr-3`)}>
									<a href="/#service-database" className="nav-link text-light">
										<FontAwesomeIcon icon={faDatabase}/>
										<h5><span>Data</span>base</h5>
									</a>
								</div>
								<div className={`col-6 col-md-3 mb-5 text-center ` + (isVisible ? `slideUp enter tr-4` : `slideUp tr-4`)}>
									<a href="/#service-it-infrastructure" className="nav-link text-light">
										<FontAwesomeIcon icon={faServer}/>
										<h5><span>IT</span> Infrastructure</h5>
									</a>
								</div>
								<div className={`col-6 col-md-3 mb-5 text-center ` + (isVisible ? `slideUp enter tr-5` : `slideUp tr-5`)}>
									<a href="/#service-project-management" className="nav-link text-light">
										<FontAwesomeIcon icon={faDatabase}/>
										<h5><span>Project</span> Management</h5>
									</a>
								</div>
							</div>
						</div>
					)}
				</VisibilitySensor>
			</div>
		</div>
	)
}

export default Service;