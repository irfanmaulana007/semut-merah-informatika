import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faToolbox, faSlidersH, faTasks } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from "react-visibility-sensor";

class ITInfrastructure extends Component {
	render () {
		return (
			<div id="service-it-infrastructure" className="content bg-section-2 pt-0 pb-0">
				<div className="container">
					
				<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
						{({ isVisible }) => (
							<div>
								<div className={isVisible ? "slideUp enter tr-1" : "slideUp tr-1"}>
									<h5 className="text-center">IT Infrastructure</h5>
									<hr className="underline" />
								</div>
								<br/>
								<div className={`row ` + (isVisible ? `slideUp enter tr-2` : `slideUp tr-2`)}>
									<div className="col">
										{/* <p>An end-to-end data science service that helps you build or improve machine learning and optimization model with any platform that suits your company.</p> */}
									</div>
								</div>
								<div className={`row ` + (isVisible ? `slideUp enter tr-3` : `slideUp tr-3`)}>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faCloud} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Cloud Transformation (Azure)</b></h6>
												<p>Nowadays, almost all of the application can be integrated from the cloud to anywhere. we can help you to build your own cloud envi- ronment from the start or even migrate/hybrid your existing environ- ment. with using cloud as your environment, you will get better per- formance, no more hardware management, and easy configuration as an IT Admin. with cloud environment, you can almost work from everywhere & anytime you want.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faToolbox} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Productivity Tools (O365)</b></h6>
												<p>Office 365 is the brand name Microsoft uses for a group of subscrip- tions that provide productivity software and related services. For con- sumers, the subscription allows the use of Microsoft Office apps on Windows, macOS, iOS, Android and Windows 10 Mobile, provides storage space on the OneDrive file hosting service, and also Skype for Business. For business users, Office 365 also offers service sub- scriptions for e-mail and social networking services through hosted versions of Exchange Server, Skype for Business Server, SharePoint and Office Online, integration with Yammer.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faSlidersH} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Managed Services</b></h6>
												<p>Enabling your company to focus more on the core business whlie we monitor your IT environment performance and ensure your system stability. We offer you, our tailored and customable IT infrastructure managed service program.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faTasks} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>DMS & CMS (Sharepoint)</b></h6>
												<p>Organizations use SharePoint to create websites. You can use it as a secure place to store, organize, share, and access information from any device. All you need is a web browser, such as Microsoft Edge, Internet Explorer, Chrome, or Firefox.</p>
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

export default ITInfrastructure;