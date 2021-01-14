import React, { useState, useEffect } from 'react';

import './CreditCardData.css';


const CreditCardData = () => {
    const [creditCardQuery, setCreditCardQuery] = useState("");

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
                console.log('soy la respuesta de la validacion credicticia')
                console.log(responseJson)
            })
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => creditCardValidation(creditCardQuery), 1500);

        return () => clearTimeout(timeOutId);
    }, [creditCardQuery])

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
                        <input type='text' />
                    </div>
                </div>

                <div className='Row_CreditCardData'>
                    <div className='InputGroup_CreditCardData'>
                        <label>Exp. Date</label>
                        <input type='text' />
                    </div>
                    <div className='InputGroup_CreditCardData'>
                        <label>CVV</label>
                        <input type='text' />
                    </div>
                </div>
            </div>

        </div>
    )
};

export default CreditCardData;