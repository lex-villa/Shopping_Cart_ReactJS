import React from 'react';

import Logo from '../../components/Navigation/Logo/Logo';
import ShoppingCartLogo from '../../components/Navigation/ShoppingCartLogo/ShoppingCartLogo';

import './HeaderBar.css';

const HeaderBar = (props) => {
    return (
        <header className='HeaderBar'>
            <div className='LogoGlobantContainer'>
                <Logo />
            </div>
            <div className='LogoShoppingCartContainer'>
                <ShoppingCartLogo clicked={props.clicked} />
            </div>
        </header>
    )
};

export default HeaderBar;