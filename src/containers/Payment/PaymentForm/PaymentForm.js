import React from 'react';

import CreditCardData from '../../../components/Form/CreditCardData/CreditCardData';
import ShippingData from '../../../components/Form/ShippingData/ShippingData';

import './PaymentForm.css';

const PaymentForm = () => {
    return (
        <>
            <ShippingData />
            <CreditCardData/>
        </>
    )
};

export default PaymentForm;