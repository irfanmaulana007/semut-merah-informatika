import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faUserFriends, faShieldAlt, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import VisibilitySensor from "react-visibility-sensor";

class DataScience extends Component {
	render () {
		return (
			<div id="service-data-science" className="content bg-section-2 pb-0">
				<div className="container">
					<VisibilitySensor partialVisibility offset={{ bottom: -400 }}>
						{({ isVisible }) => (
							<div>
								<div className={isVisible ? "slideUp enter tr-1" : "slideUp tr-1"}>
									<h5 className="text-center">Data Science</h5>
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
												<FontAwesomeIcon icon={faChartBar} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Forecasting Analysis</b></h6>
												<p>Applying machine learning/time series analysis, we help you forecast sales, loss, total customer.</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faUserFriends} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Customer Behavior Analysis</b></h6>
												<p>Using machine learning, we help you predict customer churn, possibility fraud, possibility late payment, or customer lifetime value. Having such prediction will help you in designing prevention measure to avoid loss. ​</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faShieldAlt} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Recomendation System</b></h6>
												<p>By implementing machine learning methods, we help you build recommendation system based on your customer preferences for personalizing customer experience. ​</p>
											</div>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="row">
											<div className="col-md-3 text-center mb-4">
												<FontAwesomeIcon icon={faStopwatch} size="3x" />
											</div>
											<div className="col-md-9">
												<h6><b>Scheduling & Optimization</b></h6>
												<p>Using optimization techniques, our data scientists will help you build your very own optimization system. For example, optimal route for delivery, optimal production schedule in manufacture or optimal staff shift. </p>
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

export default DataScience;