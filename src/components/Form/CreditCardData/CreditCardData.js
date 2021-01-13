import React from 'react';

import './CreditCardData.css';

const CreditCardData = () => {
    return(
        <div className='CreditCardData_Container'>
            <p className='TitleForm_CreditCardData'>Credit Card data:</p>

            <div className='FormContainer_CreditCardData'>
                <div className='Row_CreditCardData'>
                    <div className='InputGroup_CreditCardData'>
                        <label>Credit Card Number</label>
                        <input type='text' />
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