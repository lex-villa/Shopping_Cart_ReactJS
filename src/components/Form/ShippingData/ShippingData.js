import React, { useState, useEffect } from 'react';

import './ShippingData.css'

const ShippingData = (props) => {
    const { setShippingDataFormIsValid, setShippingData } = props;

    const [ziCodeQuery, setZipCodeQuery] = useState("");
    const [name, setName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [adress, setAdress] = useState(null);
    const [city, setCity] = useState(null);
    const [stateValue, setStateValue] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

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
                setShippingData({
                    address: adress,
                    city: city,
                    state: stateValue,
                    phoneNumber: phoneNumber,
                    fullName: `${name} ${lastName}`,
                    zipCode: ziCodeQuery,
                });
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
            setName(value);
            if (value.length > 0) {
                setInputName(true);
            } else {
                setInputName(false);
            };
        };

        if (name === 'LastName') {
            setLastName(value);
            if (value.length > 0) {
                setInputLastName(true);
            } else {
                setInputLastName(false);
            };
        };

        if (name === 'Adress') {
            setAdress(value);
            if (value.length > 0) {
                setInputAdress(true);
            } else {
                setInputAdress(false);
            };
        };

        if (name === 'City') {
            setCity(value);
            if (value.length > 0) {
                setInputCity(true);
            } else {
                setInputCity(false);
            };
        };

        if (name === 'State') {
            setStateValue(value);
            if (value.length > 0) {
                setInputState(true);
            } else {
                setInputState(false);
            };
        };

        if (name === 'PhoneNumber') {
            setPhoneNumber(value);
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
                        <input type='text' name='Name' value={name} onChange={handleChange} />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>Last Name</label>
                        <input type='text' name='LastName' value={lastName} onChange={handleChange} />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Adress</label>
                        <input type='text' name='Adress' value={adress} onChange={handleChange} />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>City</label>
                        <input type='text' name='City' value={city} onChange={handleChange} />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>State</label>
                        <input type='text' name='State' value={stateValue} onChange={handleChange} />
                    </div>
                    <div className='InputGroup_ShippingData'>
                        <label>Zip Code</label>
                        <input type='text' value={ziCodeQuery} onChange={(e) => setZipCodeQuery(e.target.value)} />
                    </div>
                </div>

                <div className='Row_ShippingData'>
                    <div className='InputGroup_ShippingData'>
                        <label>Phone Number</label>
                        <input type='text' name='PhoneNumber' value={phoneNumber} onChange={handleChange} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShippingData;