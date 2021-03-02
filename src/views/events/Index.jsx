import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment';

import { IMG_URL } from './../../commons/config';
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
                                    <div className="border">
                                        <img src={IMG_URL + values.img_url} alt="banner" width="100%" />
                                        <div className="p-3">
                                            <div className="text-theme mt-2">
                                                <Moment format="dddd, DD MMMM YYYY">{values.datetimes[0].date}</Moment> &nbsp;
                                                {moment(values.datetimes[0].start_time, 'HH:mm:ss').format('hh:mm A')} WIB
                                            </div>
                                            <h6 className="mt-2 font-weight-bolder">{values.name}</h6>
                                        </div>
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