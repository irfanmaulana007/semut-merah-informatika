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

const companyTypeOptions = [{id: 1, name: 'BUMN'}, {id: 2, name: 'Swasta'}]
const educationOptions = [{id: 1, name: 'D3'}, {id: 2, name: 'S1'}, {id: 3, name: 'S2'}, {id: 4, name: 'S3'}]
export default class ModalRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_id: this.props.eventId,
            name: '',
            email: '',
            phone: '',
            education: 0,
            company: '',
            company_type: 0,
            occupation_id: 0,
            idcard: '',
            payment_amount: 0
        }
    }


    handleDocumentClick = (e) => {
        // on Enter button
        if (e.keyCode === 13) { this.doRegister() }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleDocumentClick, false);
    }

    componentDidMount () {
        document.getElementById('firstElement').focus()
        document.addEventListener("keydown", this.handleDocumentClick, false);

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
                MailService.sendRegistrantInformation(res.data);
                swal("Register success", "We'll send you the invitation link on your email", "success");
                this.props.handleCloseModal();
            } )
            .finally(() => store.dispatch(stopLoading()));
        }
    }

    render() {
        const { payment_amount } = this.state;

        const { occupationList } = this.props
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
                        <div className="col-md-8 order-last order-md-first p-0">
                            <div className="pt-4 pb-2">
                                <div className="container">
                                    <FormGroup id="firstElement" name='name' required autoFocus onChange={this.handleChange} />
                                    <FormGroup name='email' label="email corporate" required onChange={this.handleChange} />
                                    <FormGroup name='phone' label="phone (WA)" required onChange={this.handleChange} />
                                    <FormGroup name='company' required onChange={this.handleChange} />
                                </div>
                            </div>

                            <h6 className="text-danger small text-center mt-0">{store.getState().utils.formError}</h6>

                            <div className="row">
                                <div className="col text-right pb-5">
                                    
                                    <button className="btn btn-theme btn-sm" onClick={this.doRegister}>Register</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 order-first order-md-last p-0 bg-light pt-3 pb-3">
                            <div className="container">
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
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}