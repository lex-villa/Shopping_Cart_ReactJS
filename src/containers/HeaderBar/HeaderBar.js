import React from 'react';
import { connect } from 'react-redux';

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
                <ShoppingCartLogo clicked={props.clicked} itemCounter={props.itemCounter} />
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