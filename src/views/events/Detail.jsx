import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumb } from 'react-bootstrap';

import { EventService } from './../../commons/api.service';
import store from './../../store';
import { startLoading, stopLoading } from './../../actions';

// Component
import Navigation from './../../components/Navigation';
import Footer from './../../components/Footer';

export default class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventNo: new URLSearchParams(this.props.location.search).get("eventNo"),
            event: {
                contact_persons: [],
                facilities: [],
                fees: []
            }
        }
    }

    fetchEventDetail = () => {
        store.dispatch(startLoading('Load Event Detail . . .'));
        EventService.detail(this.state.eventNo)
        .then((res) => this.setState({ event: res.data.data }))
        .finally(() => store.dispatch(stopLoading()));
    }

    componentDidMount () {
		var nav = document.getElementById('nav');
        
        nav.classList.add('fixed-top')
        nav.classList.add('bg-light')
        nav.classList.add('navbar-light')
        nav.classList.remove('navbar-dark')

        this.fetchEventDetail();
    }

    render () {
        const { event } = this.state;

        return (
			<div className="h-100">
				<Navigation />
                <br/><br/>

                <div id="eventDetail" className="container content">
                    <div className="row">
                        <div className="col">
                            {/* <Link to ="/events">Event</Link> */}
                            <Breadcrumb>
                                <Breadcrumb.Item href="/events">
                                    Events
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h5><b>{event.name}</b></h5>
                            <img src={event.img_url} alt="banner"/>

                            <p>{event.description}</p>

                            <h6 className="mb-1"><b>Prasyarat Peserta</b></h6>
                            <p>{event.precondition}</p>

                            <h6 className="mb-1"><b>Kapasitas</b></h6>
                            <p>{event.capacity} orang</p>

                            <h6 className="mb-1"><b>Kontak</b></h6>
                            {event.contact_persons.map((values, key) =>
                                <p key={key}>{values.name}: {values.contact}</p>
                            )}

                            <h6 className="mb-1"><b>Registrasi</b></h6>
                            <h6 className="mb-1">Investasi</h6>
                            {event.fees.map((values, key) =>
                                <p key={key}>{values.fee_type_id}: {values.amount}</p>
                            )}
                            <h6 className="mb-1">Fasilitas</h6>
                            {event.facilities.map((values, key) =>
                                <p key={key}>{values.description}</p>
                            )}

                        </div>
                    </div>
                </div>

                <br/><br/>
                <Footer />
            </div>
        )
    }
}