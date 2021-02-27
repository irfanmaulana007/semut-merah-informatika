import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

import store from './store';

// Loader
import Loaders from './components/utils/Loaders';

// Components
import Index from './views/Index';
import Event from './views/events/Index';
import EventDetail from './views/events/Detail';

import NotFound from './views/NotFound';

// Styles
import './App.css';

class App extends Component {
	constructor(props){
		super(props);
        this.state = store.getState().utils;
    
        store.subscribe (() => {
            this.setState(store.getState().utils);
        })
	}

	scrollToTop = () => {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

	render() {
		let { loaders, message } = this.state;

		return (
			<Router>
				<Loaders display={loaders} message={message} />
				<div className="h-100">
					<div className="scroll-top" onClick={this.scrollToTop}>
						<FontAwesomeIcon icon={faAngleUp} size="2x" />
					</div>
					
					<div className="h-100">
						<Switch>
							<Route exact path="/" component={Index} />
							<Route exact path="/events" component={Event} />
							<Route exact path="/events/detail" component={EventDetail} />
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
