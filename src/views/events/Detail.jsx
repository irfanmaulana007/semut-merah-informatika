import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment';
import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faVideo } from '@fortawesome/free-solid-svg-icons';

import store from './../../store';
import { startLoading, stopLoading } from './../../actions';

import { IMG_URL } from './../../commons/config';
import { EventService, OccupationService } from './../../commons/api.service';
import { convertIntegerToCurrency } from './../../commons/utilities';
import ModalRegister from './../../components/modals/Register';

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
                fees: [],
                event_speaker_activities: [],
                datetimes: []
            },
            isTicketAvailable: false,
            occupationList: [],
            isModalShow: false
        }
    }

    fetchEventDetail = () => {
        store.dispatch(startLoading('Load Event Detail . . .'));
        EventService.detail(this.state.eventNo)
        .then((res) => this.setState({ event: res.data.data.event, isTicketAvailable: res.data.data.status }))
        .finally(() => store.dispatch(stopLoading()));
    }

    fetchOccupations = () => {
        OccupationService.get()
        .then((res) => this.setState({ occupationList: res.data.data }))
    }

    componentDidMount () {
        this.fetchEventDetail();
        this.fetchOccupations();
    }

    handleShowModal = () => { this.setState({ isModalShow: true }) }
    handleCloseModal = () => { this.setState({ isModalShow: false }) }

    render () {
        const { event, isTicketAvailable, isModalShow } = this.state;

        return (
			<div className="h-100">
				<Navigation />

                <div id="eventDetail" className="container content">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/events">
                                    Events
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>{event.name}</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <img src={IMG_URL + event.img_url} alt="banner" width="100%" />
                        </div>
                    </div>
                    <br/>
                    
                    <div className="row">
                        <div className="col-md-8 pr-4">
                            <h5><b>{event.name}</b></h5>

                            <p>{event.description}</p>

                            <h6 className="mb-1"><b>Pre-requisites</b></h6>
                            <p>{event.precondition}</p>

                            <h6 className="mb-1"><b>Facilities</b></h6>
                            <ul>
                                {event.facilities.map((values, key) =>
                                    <li key={key}>{values.description}</li>
                                )}
                            </ul>

                            <h6 className="mb-1"><b>Speakers</b></h6>
                            <ul>
                                {event.event_speaker_activities.map((values, key) =>
                                    <li className="mt-1 mb-0 text-capitalize" key={key}>{values.speaker.name} (Data Scientist) <a href={values.speaker.linkedin} rel="noopener noreferrer" target="_blank">Linkedin Profile</a></li>
                                )}
                            </ul>
                        </div>

                        <div className="col-md-4 pl-4">
                            {event.datetimes.map((values, key) =>
                                <p className="mb-1" key={key}>
                    				<FontAwesomeIcon className="mr-3" icon={faClock} />
                                    <Moment format="ddd, DD MMMM">{values.date}</Moment>:&nbsp;
                                    {moment(values.start_time, 'HH:mm:ss').format('hh:mm A')} -&nbsp;
                                    {moment(values.end_time, 'HH:mm:ss').format('hh:mm A')} WIB
                                </p>
                            )}
                            <br/>

                            {event.location === 'online'
                                ? 
                                <div>
                                    <FontAwesomeIcon className="mr-3" icon={faVideo} /> Online Events
                                    <p className="small mt-1 mb-0">*Link will be given on email</p>
                                </div>
                                :
                                <div>
                                    <FontAwesomeIcon className="mr-3" icon={faClock} /> {event.location}
                                </div>
                            }
                            <br/>

                            <h6 className="mb-2">Registration</h6>
                            {event.fees.map((values, key) =>
                                <p className="mt-1 mb-0" key={key}><b>{values.fee_type.name}</b>: {convertIntegerToCurrency(values.amount)}</p>
                            )}
                            {_.get(_.find(event.fees, ['fee_type_id', 1]), 'amount') !== 0 && <p className="small mt-1 mb-0">*Early Bird until <Moment format="DD MMMM">{_.get(_.find(event.fees, ['fee_type_id', 1]), 'end_date', '')}</Moment></p>}
                            <br/>

                            <h6 className="mb-2">Contact</h6>
                            {event.contact_persons.map((values, key) =>
                                <p className="m-0" key={key}>+62 {values.contact} ({values.name})</p>
                            )}
                            <br/>

                            {event.capacity &&
                                <div>
                                    <h6 className="mb-2">Capacity</h6>
                                    <p className="m-0">{event.capacity} person(s)</p>
                                    <br/>
                                </div>
                            }
                        </div>
                    </div>
                    
                    <br/><br/>
                    <div className="row">
                        <div className="col-6 offset-3">
                            <button className="btn btn-theme btn-sm btn-block font-weight-bold" onClick={this.handleShowModal} 
                            disabled={_.get(event.datetimes[0], 'date') < moment().format('YYYY-MM-DD') || !isTicketAvailable}>
                                {isTicketAvailable ? 'Register' : 'Fully Booked'}
                            </button>
                        </div>
                    </div>
                </div>

                { 
                    isModalShow &&
                    <ModalRegister
                        isModalShow={isModalShow}
                        handleCloseModal={this.handleCloseModal}
                        occupationList={this.state.occupationList}
                        eventId={this.state.eventNo}
                        eventDetail={this.state.event}
                    />
                }

                <br/><br/>
                <Footer />
            </div>
        )
    }
}