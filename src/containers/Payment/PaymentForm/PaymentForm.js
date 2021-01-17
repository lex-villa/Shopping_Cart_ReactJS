import React, { useState } from 'react';

import CreditCardData from '../../../components/Form/CreditCardData/CreditCardData';
import ShippingData from '../../../components/Form/ShippingData/ShippingData';

import './PaymentForm.css';

const PaymentForm = (props) => {
    const { setBtnDisabled, setFormIsValid, setOrderData } = props;

    const [shippingDataFormIsValid, setShippingDataFormIsValid] = useState(false);
    const [creditCardDataFormIsValid, setCreditCardDataFormIsValid] = useState(false);

    const [shippingData, setShippingData] = useState({});
    const [creditCardData, setCreditCardData] = useState({});


    const checkFormValidity = (shippingDataFormIsValid, creditCardDataFormIsValid) => {
        if (shippingDataFormIsValid && creditCardDataFormIsValid) {
            console.log('entro a cambiar este pedi')
            //Aqui es donde se quiebra
            setFormIsValid(true);
            setBtnDisabled(false);
            setOrderData({
                shippingData: {
                    ...shippingData,
                },
                creditCardData: {
                    ...creditCardData,
                },
            });
        } else {
            setFormIsValid(false);
            setBtnDisabled(true);
            console.log('vino al else')
        };

    };


    checkFormValidity(shippingDataFormIsValid, creditCardDataFormIsValid);

    // useState(() => {
    //     // checkFormValidity(shippingDataFormIsValid, creditCardDataFormIsValid);
    // //     if (shippingDataFormIsValid && creditCardDataFormIsValid) {
    // //         console.log('entro a cambiar este pedi')
    // //         setFormIsValid(true);
    // //         setBtnDisabled(false);
    // //         setOrderData({
    // //             shippingData: {
    // //                 ...shippingData,
    // //             },
    // //             creditCardData: {
    // //                 ...creditCardData,
    // //             },
    // //         });
    // //     } else {
    // //         setFormIsValid(false);
    // //         setBtnDisabled(true);
    // //         console.log('vino al else')
    // //     };

    // // }, [shippingDataFormIsValid, creditCardDataFormIsValid])

    return (
        <div className='PaymentFormContainer'>
            <ShippingData
                setShippingDataFormIsValid={setShippingDataFormIsValid}
                setShippingData={setShippingData}
            />
            <div className='CreditContainer'>
                <CreditCardData
                    setCreditCardDataFormIsValid={setCreditCardDataFormIsValid}
                    setCreditCardData={setCreditCardData}
                />
            </div>
        </div>
    )
};

export default PaymentForm;