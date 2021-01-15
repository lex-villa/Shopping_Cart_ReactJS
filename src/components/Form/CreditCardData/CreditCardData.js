import React, { useState, useEffect } from 'react';

import './CreditCardData.css';


const CreditCardData = (props) => {
    const { setCreditCardDataFormIsValid } = props;

    const [creditCardQuery, setCreditCardQuery] = useState("");

    const [inputName, setInputName] = useState(false);
    const [inputExpDate, setInputExpDate] = useState(false);
    const [inputCVV, setInputCVV] = useState(false);
    const [inputCreditCardNumber, setInputCreditCardNumber] = useState(false);


    const creditCardValidation = (ccQuery) => {
        fetch(`http://localhost:8080/validate/creditcard/${ccQuery}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.message === 'success') {
                    setInputCreditCardNumber(true);
                } else {
                    setInputCreditCardNumber(false);
                };
            })
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => creditCardValidation(creditCardQuery), 1500);

        return () => clearTimeout(timeOutId);
    }, [creditCardQuery]);

    useEffect(() => {
        const checkValidityCreditCardDataForm = () => {
            if (inputName && inputExpDate && inputCVV && inputCreditCardNumber) {
                setCreditCardDataFormIsValid(true);
            } else {
                setCreditCardDataFormIsValid(false);
            };
        };
        checkValidityCreditCardDataForm();
    }, [inputName, inputExpDate, inputCVV, inputCreditCardNumber, setCreditCardDataFormIsValid]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === 'Name') {
            if (value.length > 0) {
                setInputName(true);
            } else {
                setInputName(false);
            };
        };

        if (name === 'ExpDate') {
            if (value.length > 0) {
                setInputExpDate(true);
            } else {
                setInputExpDate(false);
            };
        };

        if (name === 'CVV') {
            if (value.length > 0) {
                setInputCVV(true);
            } else {
                setInputCVV(false);
            };
        };

    };

    return (
        <div className='CreditCardData_Container'>
            <p className='TitleForm_CreditCardData'>Credit Card data:</p>

            <div className='FormContainer_CreditCardData'>
                <div className='Row_CreditCardData'>
                    <div className='InputGroup_CreditCardData'>
                        <label>Credit Card Number</label>
                        <input type='text' value={creditCardQuery} onChange={(e) => setCreditCardQuery(e.target.value)} />
                    </div>
                </div>

                <div className='Row_CreditCardData'>
                    <div className='InputGroup_CreditCardData'>
                        <label>Full Name</label>
                        <input type='text' name='Name' onChange={handleChange} />
                    </div>
                </div>

                <div className='Row_CreditCardData'>
                    <div className='InputGroup_CreditCardData'>
                        <label>Exp. Date</label>
                        <input type='text' name='ExpDate' onChange={handleChange} />
                    </div>
                    <div className='InputGroup_CreditCardData'>
                        <label>CVV</label>
                        <input type='text' name='CVV' onChange={handleChange} />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default CreditCardData;