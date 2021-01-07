import React from 'react';

import shoppingCartSVG from '../../../assets/cart.svg';

import './ShoppingCartLogo.css'

const ShoppingCartLogo = (props) => {
    return (
        <div className='CartToggle' onClick={props.clicked}>
            <img src={shoppingCartSVG} alt='shopping-cart-svg' />
            <p className='PriceShoppingCart'>{props.itemCounter}</p>
        </div>
    );
};

export default ShoppingCartLogo;