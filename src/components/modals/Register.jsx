import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Skeleton from 'react-loading-skeleton';
import Moment from 'react-moment';
import moment from 'moment';
import swal from 'sweetalert';
import _ from 'lodash';

import store from './../../store';
import { startLoading, stopLoading } from './../../actions';

import { EventRegistrationService, MailService } from './../../commons/api.service';
import { convertIntegerToCurrency } from './../../commons/utilities';
import FormGroup from './../utils/FormGroup';
import { eventRegistration } from './../../commons/validation';

export default class ModalRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_id: this.props.eventId,
            occupation_id: 0,
            name: '',
            company: '',
            email: '',
            phone: '',
            payment_amount: 0
        }
    }

    componentDidMount () {
        this.occupation.focus();

        const { fees } =  this.props.eventDetail;
        const currentDate = new Date();
        const endDate = new Date(fees[0].end_date);
        const currentDateToCompare = currentDate.getTime().toString().substr(0, 5);
        const endDateToCompare = endDate.getTime().toString().substr(0, 5);

        if (currentDateToCompare <= endDateToCompare) { this.setState({ payment_amount: _.get(_.find(fees, ['fee_type_id', 1]), 'amount', 0 ) }) }
        else { this.setState({ payment_amount: _.get(_.find(fees, ['fee_type_id', 2]), 'amount', 0 ) }) }
    }

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    doRegister = () => {
        if (eventRegistration(this.state)) {
            store.dispatch(startLoading('Register . . .'));
            EventRegistrationService.create(this.state)
            .then((res) => {
                MailService.sendPaymentInstruction(res.data);
                swal("Register success (" + res.data.data.code + ")", "We send you the invitation link on your email", "success");
                this.props.handleCloseModal();
            } )
            .finally(() => store.dispatch(stopLoading()));
        }
    }

    render() {
        const { payment_amount } = this.state;
        const { name, description, location, facilities, datetimes } = this.props.eventDetail;

        return (
            <Modal show={this.props.isModalShow} onHide={this.props.handleCloseModal} backdrop="static" size="xl" className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title className="h6 font-weight-bold w-100 text-center">
                        {name} <br/ >
                        <small>
                            Starts on&nbsp;
                            <Moment format="ddd, DD MMMM">{_.get(datetimes[0], 'date', '')}</Moment>&nbsp;
                            {moment(_.get(datetimes[0], 'start_time', ''), 'HH:mm:ss').format('HH:mm')} WIB
                        </small>
                    </Modal.Title>
                </Modal.Header>
                
                <Modal.Body className="p-0">
                    <div className="row">
                        <div className="col-8 p-0">
                            <div className="pl-5 pr-5 pt-2 pb-2">
                                <label htmlFor='occupation' className="text-uppercase text-muted small"><b>Occupation <span className="text-danger">*</span> </b></label>
                                <select id="occupation" name="occupation_id" ref={el => (this.occupation = el)} className="form-control" onChange={this.handleChange} >
                                    <option value="0">Select</option>
                                    {this.props.occupationList.map((values, key) =>
                                        <option key={key} value={values.id}>{values.name}</option>
                                    )}
                                </select>
                                <br />

                                <FormGroup name='name' required onChange={this.handleChange} />
                                <FormGroup name='company' required onChange={this.handleChange} />
                                <FormGroup name='email' required onChange={this.handleChange} />
                                <FormGroup name='phone' required onChange={this.handleChange} />
                            </div>

                            <h6 className="text-danger small text-center mt-0">{store.getState().utils.formError}</h6>

                            <div className="row">
                                <div className="col text-right pl-5 pr-5 pb-4">
                                    <button className="btn btn-theme btn-sm" onClick={this.doRegister}>Register</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 p-0 bg-light pl-5 pr-5 pt-3 pb-3">
                            <h5 className="font-weight-bold">Event Overview</h5>
                            <br/>

                            <h6>{description || <Skeleton />}</h6>
                            <br/>

                            <h6 className="text-muted small mb-1">Location</h6>
                            <h6>{location === 'online' ? 'Online Events' : location}</h6>
                            <br/>

                            <h6 className="text-muted small mb-1">Facilities</h6>
                            <ul className="pl-4">
                                {facilities.map((values, key) => 
                                    <li key={key}>{values.description}</li>
                                )}
                            </ul>
                            <br/>

                            <div className="font-weight-bold text-right">
                                <h5 className="mb-1">{convertIntegerToCurrency(payment_amount)}</h5>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}