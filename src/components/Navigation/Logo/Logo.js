import React from 'react';
import { useHistory } from 'react-router-dom';

import globantLogo from '../../../assets/globant-shops.svg';

const Logo = () => {
    const history = useHistory();

    const handleClick = (e) => {
        history.push('/');
    };

    return (
        <>
            <img src={globantLogo} alt='Globant-Logo' onClick={handleClick} />
        </>
    );
};

export default Logo;