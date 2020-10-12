import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faFileContract, faTasks } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from "react-visibility-sensor";

class ProjectManagement extends Component {
	render () {
		return (
			<div id="service-project-management" className="content pt-0">
				<div className="container">
					<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
						{({ isVisible }) => (
							<div>
								<div className={isVisible ? "slideUp enter tr-1" : "slideUp tr-1"}>
									<h5 className="text-center">Project Management</h5>
									<hr className="underline" />
								</div>
								<br/>
								<div className={`row ` + (isVisible ? `slideUp enter tr-2` : `slideUp tr-2`)}>
									<div className="col">
										<p>SMI is a IT Consultant and we have PMO assisted a wide range of Clients across Indonesia since 2016. We believe in ‘turning your plan into reality’ by providing one stop service solutions from concept up to completion. SMI has successfully provided effective solutions by providing the following services:</p>
									</div>
								</div>
								<div className={`row ` + (isVisible ? `slideUp enter tr-3` : `slideUp tr-3`)}>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faLayerGroup} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Design & Solution</b></h6>
												<p className="mb-2">Our Design & Soution Service provides practical and economical solutions for Clients due to the extensive experience of our certified professional engineers.</p>
												<p className="mb-2">Our team consists of experts in Data Warehouse, Big Data and data Analytic,who design based on international as well as local standard.</p>
												<p className="mb-0">The services we offer include:</p>
												<ul>
													<li>Concept Design</li>
													<li>Implementation Design</li>
													<li>Technical Specification Documents</li>
													<li>Functional Specification Documents</li>
													<li>Specialist Advice</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faFileContract} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Contract Management</b></h6>
												<p className="mb-2">As the cost & contract management consultant, we assist our Clients to achieve the best outcome of a project by controlling and reviewing the cost and contractual aspects from inception up to completion stage.</p>
												<p className="mb-2">At SMI, we assist our Clients to prepare tailor made contract agreements for the appointed.</p>
												<p className="mb-2">Along the way, SMI will advise Clients periodically regarding the actual and predicted expenditure so they can plan their financial management accordingly.</p>
												<p className="mb-0">We provide an integrated service that covers:</p>
												<ul>
													<li>Pre Contract Stage</li>
													<li>Post Contract Stage</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faTasks} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Project Management Services</b></h6>
												<p className="mb-2">A project needs to be managed properly starting from the concept, design, tender, until the handover of work in accordance with the targets set by the Clients including time, quality, budget, and organizational goals.</p>
												{/* <p className="mb-2">Project Management is the application of knowledge, skills, tools, and techniques to project activities to meet the project requirements.</p> */}
												<p className="mb-2">SMI provides professional project management service to manage projects from initiating, planning, executing, monitoring and controlling, to closing stage.</p>
												<p className="mb-2">Our project management consultant service covers different areas that include coordination, scope, time, cost, quality, procurement, human resources, communications, risk, safety and stakeholder management.</p>
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

export default ProjectManagement;