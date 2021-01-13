import React from 'react';

import PaymentForm from './PaymentForm/PaymentForm';

import './Payment.css';

const Payment = () => {
    return (
        <div className='PaymentSection_Container'>
        <PaymentForm />
        {/* <p>{'<PaymentProducts />'}</p> */}
        </div>
    );
};

export default Payment;