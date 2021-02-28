/* eslint-disable eqeqeq */
import React from 'react';
import _ from 'lodash';
import NumberFormat from 'react-number-format';

export const convertCurrencyToInteger = (amount) => {
    let formatedAmount;
    formatedAmount = _.replace(amount, 'Rp ', '');
    formatedAmount = _.replace(formatedAmount, new RegExp('[.]','g'), '');

    return formatedAmount;
}

export const convertIntegerToCurrency = (amount) => {
    return <NumberFormat value={amount} displayType={'text'} thousandSeparator={"."} decimalSeparator={","} prefix={'Rp '} />
}

export const CurrencyFormat = (props) => {
    return <NumberFormat prefix={"Rp "} thousandSeparator={"."} decimalSeparator={","} {...props} />
}