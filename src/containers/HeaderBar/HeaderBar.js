import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Logo from '../../components/Navigation/Logo/Logo';
import ShoppingCartLogo from '../../components/Navigation/ShoppingCartLogo/ShoppingCartLogo';

import './HeaderBar.css';

const HeaderBar = (props) => {
    const location = useLocation();

    useEffect(() => {
        console.log('se renderiza header')
    }, [location.pathname])

    return (
        <header className='HeaderBar'>
            <div className='LogoGlobantContainer'>
                <Logo />
            </div>
            <div className='LogoShoppingCartContainer'>
                {location.pathname === '/Payment' || location.pathname === '/Success' ?
                    null
                    : 
                    <ShoppingCartLogo clicked={props.clicked} itemCounter={props.itemCounter} />
                }
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