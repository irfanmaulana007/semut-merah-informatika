import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';

import { EventService } from './../../commons/api.service';
import store from './../../store';
import { startLoading, stopLoading } from './../../actions';

// Component
import Navigation from './../../components/Navigation';
import Footer from './../../components/Footer';

export default class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventList: [],
            eventNavActive: 1
        }
    }

    fetchEvents = (eventType) => {
        store.dispatch(startLoading('Load Events data . . .'))
        EventService.get(eventType)
        .then((res) => this.setState({ eventList: res.data.data }))
        .finally(() => store.dispatch(stopLoading()));
    }

    componentDidMount () {
		var nav = document.getElementById('nav');
        
        nav.classList.add('fixed-top')
        nav.classList.add('bg-light')
        nav.classList.add('navbar-light')
        nav.classList.remove('navbar-dark')

        this.fetchEvents(this.state.eventNavActive);
    }

    handleClickNav = (eventType) => {
        this.setState({ eventNavActive: eventType })
        this.fetchEvents(eventType);
    }

    render () {
        const { eventList, eventNavActive } = this.state;

        return (
			<div className="h-100">
				<Navigation />
                <br/><br/>

                <div id="events" className="container content">
                    <div className="row">
                        <div className="col">
                            <ButtonGroup aria-label="Basic example" className="w-100">
                                <Link className="w-100 text-decoration-none" to="/events?eventType=1"><button onClick={() => this.handleClickNav(1)} className={`btn btn-block no-border-radius ` + (eventNavActive === 1 ? 'btn-theme' : 'btn-secondary')}>Upcoming Events</button></Link>
                                <Link className="w-100 text-decoration-none" to="/events?eventType=2"><button onClick={() => this.handleClickNav(2)} className={`btn btn-block no-border-radius ` + (eventNavActive === 2 ? 'btn-theme' : 'btn-secondary')}>Past Events</button></Link>
                            </ButtonGroup>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        {eventList.map((values, key) =>
                            <div key={key} className="col-4">
                                <Link className="text-dark text-decoration-none" to={`/events/detail?eventNo=${values.id}`}>
                                    <div className="border p-3">
                                        <h6>{values.name}</h6>
                                        <h6>{values.description}</h6>
                                        <h6>{values.preconditions}</h6>
                                        <h6>{values.capacity}</h6>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <br/> <br/>

                <Footer />
            </div>
        )
    }
}