import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { ROOT_URL } from './../commons/config'

import './styles.css';


class Navigation extends Component {
	handleNav = () => {
		var nav = document.getElementById('nav');
		if (this.props.module === undefined) {
			nav.classList.add('fixed-top')
			nav.classList.add('bg-light')
			nav.classList.add('navbar-light')
			nav.classList.remove('navbar-dark')
		}
		else {
			// if (window.innerWidth >= 992) {
				window.onscroll = () => {
					// var homeHeight = document.getElementById('home').clientHeight;

					if(nav !== null) {
						// if (window.pageYOffset > (homeHeight - 56)) {
						if (window.pageYOffset > 200) {
							nav.classList.add('fixed-top')
							nav.classList.add('bg-light')
							nav.classList.add('navbar-light')
							nav.classList.remove('navbar-dark')
						} else {
							nav.classList.remove('fixed-top')
							nav.classList.remove('bg-light')
							nav.classList.remove('navbar-light')
							nav.classList.add('navbar-dark')
						} 
					}
				}
			}
		// }
	}

	componentDidMount () {
		this.handleNav();	
	}

	render() {
		return (
			<Navbar id="nav" fixed="top" variant="dark" expand="lg">
				<div className="container">
					<Navbar.Brand size="small" href="#home"><img src={`${ROOT_URL}/logo/smi_logo_small.png`} alt="SMI Logo"/></Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto text-uppercase small">
							<a href="/#about" className="nav-link ml-2 mr-2" activeClassName="active">About</a>
							<a href="/#services" className="nav-link ml-2 mr-2">Services</a>
							<a href="/#clients" className="nav-link ml-2 mr-2">Clients</a>
							{/* <a href="/#projects" className="nav-link ml-2 mr-2">Projects</a> */}
							<a href="/#contact" className="nav-link ml-2 mr-2">Contact</a>
							<NavLink to="/events" activeClassName="active" className="nav-link ml-2 mr-2">Events</NavLink>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		)
	}
}

export default Navigation;