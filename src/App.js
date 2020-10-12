import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Styles
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

// Loader
import Loaders from './components/utils/Loaders';

// Components
import Index from './views/Index';

import NotFound from './views/NotFound';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			loaders: 'invisible',
			message: ''
		}
	}

	componentDidMount(){
		document.title = "Semut Merah Informatika"
	}

	scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

	render() {
		return (
			<Router>
				<Loaders display={this.state.loaders} message={this.state.message} />
				<div className="h-100">
					<div className="scroll-top" onClick={this.scrollToTop}>
						<FontAwesomeIcon icon={faAngleUp} size="2x" />
					</div>
					
					<div className="h-100">
						<Switch>
							<Route exact path="/" component={Index}  />
							{/* <Route exact path="/home" component={Index} /> */}

							<Route path="*" component={NotFound} />
						</Switch>
					</div>
				</div>
			</Router>
		)
	}
}

export default App;
