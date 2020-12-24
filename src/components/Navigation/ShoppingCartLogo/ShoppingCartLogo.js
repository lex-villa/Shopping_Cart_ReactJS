import React from 'react';

import shoppingCartSVG from '../../../assets/cart.svg';

import './ShoppingCartLogo.css'

const ShoppingCartLogo = () => {
    return (
        <div>
            <img src={shoppingCartSVG} alt='shopping-cart-svg' />
            <p className='PriceShoppingCart'>3</p>
        </div>
    );
};

export default ShoppingCartLogo;