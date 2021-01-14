import React, { useState, useEffect } from 'react';

import './ShippingData.css'

const ShippingData = () => {
    const [ziCodeQuery, setZipCodeQuery] = useState("");

    const ziCodeValidation = (zcQuery) => {
        fetch(`http://localhost:8080/validate/zipcode/${zcQuery}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                console.log('soy la respuesta de la validacion')
                console.log(responseJson)
            })
    };


    useEffect(() => {
        const timeOutId = setTimeout(() => ziCodeValidation(ziCodeQuery), 1500);

        return () => clearTimeout(timeOutId);
    }, [ziCodeQuery])


    return (
        <div className='ShippingDataContainer'>
            <p className='TitleForm_ShippingData'>Shipping data:</p>

            <div className='FormContainer_ShippingData'>
                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Name</label>
                        <input type='text' />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>Last Name</label>
                        <input type='text' />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Adress</label>
                        <input type='text' />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>City</label>
                        <input type='text' />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>State</label>
                        <input type='text' />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>Zip Code</label>
                        <input type='text' value={ziCodeQuery} onChange={(e) => setZipCodeQuery(e.target.value)} />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Phone Number</label>
                        <input type='text' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShippingData;