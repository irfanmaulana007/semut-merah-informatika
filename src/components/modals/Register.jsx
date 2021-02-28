import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Skeleton from 'react-loading-skeleton';
import Moment from 'react-moment';
import moment from 'moment';
import swal from 'sweetalert';
import _ from 'lodash';

import store from './../../store';
import { startLoading, stopLoading } from './../../actions';

import { EventRegistrationService } from './../../commons/api.service';
import { convertIntegerToCurrency } from './../../commons/utilities';
import FormGroup from './../utils/FormGroup';
import { eventRegistration } from './../../commons/validation';

import BCA_logo from './../../assets/bca-logo.png';

export default class ModalRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event_id: this.props.eventId,
            occupation_id: 0,
            name: '',
            company: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount () {
        this.occupation.focus();
    }

    handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

    doRegister = () => {
        if (eventRegistration(this.state)) {
            store.dispatch(startLoading('Register . . .'));
            EventRegistrationService.create(this.state)
            .then((res) => {
                swal("Register success (" + res.data.data.code + ")", "We send you the invitation link on your email", "success");
                this.props.handleCloseModal();
            } )
            .finally(() => store.dispatch(stopLoading()));
        }
    }

    render() {
        const { name, fees, datetimes } = this.props.eventDetail;

        return (
            <Modal show={this.props.isModalShow} onHide={this.props.handleCloseModal} backdrop="static" size="xl" className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>Event RSVP</Modal.Title>
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
                        </div>

                        <div className="col-4 p-0 bg-light">
                            <div className="bg-theme text-white pl-5 pr-5 pt-3 pb-3">
                                <h5 className="font-weight-bold">Event Overview</h5>
                                <br/>

                                <Moment format="ddd, DD MMMM">{_.get(datetimes[0], 'date', '')}</Moment>:&nbsp;
                                {moment(_.get(datetimes[0], 'start_time', ''), 'HH:mm:ss').format('hh:mm A')} WIB
                                <br/>

                                <h6 className="font-weight-bold mt-2">{name || <Skeleton />}</h6>
                                <br/>

                                <h5 className="font-weight-bold text-right">{convertIntegerToCurrency(_.get(_.find(fees, ['fee_type_id', 1]), 'amount', 0 ))|| <Skeleton width={100} />}</h5>
                            </div>
                            <div className="pl-5 pr-5 pt-3 pb-3">
                                <h5 className="font-weight-bold">Payment</h5>
                                <br/>

                                <h6 className="text-muted small">BANK TRANSFER</h6>
                                <div className="row border pt-2 pb-2 bg-white">
                                    <div className="col-1">
                                        <input type="radio" checked className="mt-3" />
                                    </div>
                                    <div className="col-3">
                                        <img src={BCA_logo} alt="BCA Logo" height="40px"/>
                                    </div>
                                    <div className="col-7 text-black">
                                        <p className="m-0">5271412798</p>
                                        <p className="m-0">(Irfan Maulana)</p>
                                    </div>
                                </div>
                                
                                <br/>
                                <button className="btn btn-theme btn-sm btn-block" onClick={this.doRegister}>Confirmation Payment</button>
                                <h6 className="small mt-2 font-italic">*Click the button if you already make a payment.</h6>

                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}