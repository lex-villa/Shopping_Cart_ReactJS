import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Logo from '../../components/Navigation/Logo/Logo';
import ShoppingCartLogo from '../../components/Navigation/ShoppingCartLogo/ShoppingCartLogo';

import './HeaderBar.css';

const HeaderBar = (props) => {
    const location = useLocation();

    console.log(location)

    return (
        <header className='HeaderBar'>
            <div className='LogoGlobantContainer'>
                <Logo />
            </div>
            <div className='LogoShoppingCartContainer'>
                {location.pathname !== '/Payment' ? <ShoppingCartLogo clicked={props.clicked} itemCounter={props.itemCounter} /> : null}

            </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        itemCounter: state.cart.itemCounter,
    };
};

export default connect(mapStateToProps)(HeaderBar);