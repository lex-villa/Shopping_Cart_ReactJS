import React, { useState, useEffect } from 'react';

import './ShippingData.css'

const ShippingData = (props) => {
    const { setShippingDataFormIsValid } = props;

    const [ziCodeQuery, setZipCodeQuery] = useState("");

    const [inputName, setInputName] = useState(false);
    const [inputLastName, setInputLastName] = useState(false);
    const [inputAdress, setInputAdress] = useState(false);
    const [inputCity, setInputCity] = useState(false);
    const [inputState, setInputState] = useState(false);
    const [inputPhoneNumber, setInputPhoneNumber] = useState(false);
    const [inputZipCode, setInputZipCode] = useState(false)

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
                if (responseJson.message === 'success') {
                    setInputZipCode(true);
                } else {
                    setInputZipCode(false);
                };
            })
            .catch(error => console.log(error));
    };

    useEffect(() => {
        const timeOutId = setTimeout(() => ziCodeValidation(ziCodeQuery), 1500);

        return () => clearTimeout(timeOutId);
    }, [ziCodeQuery]);

    useEffect(() => {
        const checkValidityShippingDataForm = () => {
            console.log(inputName, inputLastName, inputAdress, inputCity, inputState, inputPhoneNumber, inputZipCode)
            if (inputName && inputLastName && inputAdress && inputCity && inputState && inputPhoneNumber && inputZipCode) {
                setShippingDataFormIsValid(true);
            } else {
                setShippingDataFormIsValid(false);
            };
        };
        checkValidityShippingDataForm();
    }, [inputName, inputLastName, inputAdress, inputCity, inputState, inputPhoneNumber, inputZipCode, setShippingDataFormIsValid])

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

        if (name === 'LastName') {
            if (value.length > 0) {
                setInputLastName(true);
            } else {
                setInputLastName(false);
            };
        };

        if (name === 'Adress') {
            if (value.length > 0) {
                setInputAdress(true);
            } else {
                setInputAdress(false);
            };
        };

        if (name === 'City') {
            if (value.length > 0) {
                setInputCity(true);
            } else {
                setInputCity(false);
            };
        };

        if (name === 'State') {
            if (value.length > 0) {
                setInputState(true);
            } else {
                setInputState(false);
            };
        };

        if (name === 'PhoneNumber') {
            if (value.length > 0) {
                setInputPhoneNumber(true);
            } else {
                setInputPhoneNumber(false);
            };
        };
    };

    return (
        <div className='ShippingDataContainer'>
            <p className='TitleForm_ShippingData'>Shipping data:</p>

            <div className='FormContainer_ShippingData'>
                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Name</label>
                        <input type='text' name='Name' onChange={handleChange} />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>Last Name</label>
                        <input type='text' name='LastName' onChange={handleChange} />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Adress</label>
                        <input type='text' name='Adress' onChange={handleChange} />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>City</label>
                        <input type='text' name='City' onChange={handleChange} />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>State</label>
                        <input type='text' name='State' onChange={handleChange} />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>Zip Code</label>
                        <input type='text' value={ziCodeQuery} onChange={(e) => setZipCodeQuery(e.target.value)} />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Phone Number</label>
                        <input type='text' name='PhoneNumber' onChange={handleChange} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShippingData;