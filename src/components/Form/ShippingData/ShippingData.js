import React from 'react';

import './ShippingData.css'

const ShippingData = () => {

    const inputValidation = () => {
        //esto sera asignado al onchange de los input
    };

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
                        <input type='text' />
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