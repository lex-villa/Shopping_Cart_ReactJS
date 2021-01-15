import React, { useState } from 'react';

import CreditCardData from '../../../components/Form/CreditCardData/CreditCardData';
import ShippingData from '../../../components/Form/ShippingData/ShippingData';

import './PaymentForm.css';

const PaymentForm = (props) => {
    const { setBtnDisabled, setFormIsValid } = props;

    const [shippingDataFormIsValid, setShippingDataFormIsValid] = useState(false);
    const [creditCardDataFormIsValid, setCreditCardDataFormIsValid] = useState(false);

    const checkFormValidity = (shippingDataFormIsValid, creditCardDataFormIsValid) => {
        if (shippingDataFormIsValid && creditCardDataFormIsValid) {
            setFormIsValid(true);
            setBtnDisabled(false);
        } else {
            setFormIsValid(false);
            setBtnDisabled(true);
        };
    };

    checkFormValidity(shippingDataFormIsValid, creditCardDataFormIsValid);

    // useState(() => {
    //     checkFormValidity(shippingDataFormIsValid, creditCardDataFormIsValid);
    // }, [shippingDataFormIsValid, creditCardDataFormIsValid])

    return (
        <div className='PaymentFormContainer'>
            <ShippingData
                setShippingDataFormIsValid={setShippingDataFormIsValid}
            />
            <div className='CreditContainer'>
                <CreditCardData
                    setCreditCardDataFormIsValid={setCreditCardDataFormIsValid}
                />
            </div>
        </div>
    )
};

export default PaymentForm;