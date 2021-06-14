import React, { Component } from 'react';

import Home from './Home';
import About from './About';
import Service from './services/Service';
import DataScience from './services/DataScience';
import Database from './services/Database';
import ITInfrastructure from './services/ITInfrastructure';
import ProjectManagement from './services/ProjectManagement';
import Client from './Client';
import Project from './Project';
import Contact from './Contact';
import Footer from './../components/Footer';

class Index extends Component {
	render () {
		// const props = useSpring({opacity: 1, from: {opacity: 0}})

		return (
			<div className="h-100">
				<Home />
				<About />
				<Service />
				<DataScience />
				<div className="bg-section flipY"></div>
				<Database />
				<div className="bg-section"></div>
				<ITInfrastructure />
				<div className="bg-section flipY"></div>
				<ProjectManagement />
				{/* <Client /> */}
				<Project />
				<Contact />
				<Footer />
			</div>
		)
	}
}

export default Index;