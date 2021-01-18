import React from 'react';
import logoSuccess from '../../../assets/success1.webp';

import './Success.css';

const Success = () => {
    return(
        <div className='SuccessLogo'>
            <img src={logoSuccess} alt='Success' />
            <p>Congratulations! your order has shipped</p>
        </div>
    )
};

export default Success;