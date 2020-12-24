import React from 'react';

import Logo from '../../components/Navigation/Logo/Logo';
import ShoppingCartLogo from '../../components/Navigation/ShoppingCartLogo/ShoppingCartLogo';

import './HeaderBar.css';

const HeaderBar = () => {
    return (
        <header className='HeaderBar'>
            <div className='LogoGlobantContainer'>
                <Logo />
            </div>
            <div className='LogoShoppingCartContainer'>
                <ShoppingCartLogo />
            </div>
        </header>
    )
};

export default HeaderBar;