import React, { Component } from 'react';
import Navigation from './../components/Navigation';

import './styles.css';

class Home extends Component {
	render () {
		return (
			<div id="home" className="content bg-dark text-light h-100 p-0">
				<Navigation module="index" />
				<div className="container">
					<div className="background1 parallax"></div>

					<div className="intro">
						<div className="row m-0">
							<div className="col-10 offset-1 col-lg-6 offset-lg-3">
								<h2 className="text-center text-capitalize animate__animated animate__fadeIn animate__fast">It&apos;s all about <span className="text-theme">analytics</span>, <span className="text-theme">data platform</span>, <span className="text-theme">IT infrastructure</span> and <span className="text-theme">Project Management</span>.</h2>
								<br/><br/><br/><br/>
								<h5 className="text-center animate__animated animate__fadeIn animate__fast animate__delay-02s">Your future is created by what you do today!</h5>
							</div>
						</div>
						<hr className="underline light b1 animate__animated animate__flash animate__infinite animate__slower" />
					</div>
				</div>
			</div>
		)
	}
}

export default Home;