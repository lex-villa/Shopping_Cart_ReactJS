import React from 'react';
import { connect } from 'react-redux';

import PaymentForm from './PaymentForm/PaymentForm';
import PaymentProducts from './PaymentProducts/PaymentProducts';

import './Payment.css';

const Payment = (props) => {
    return (
        <div className='PaymentSection_Container'>
            <div className='firstContainer'>
                <PaymentForm />
            </div>
            <div>
                <PaymentProducts 
                    productsInCart={props.productsInCart}
                    totalPrice={props.totalPrice}
                />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        productsInCart: state.cart.cartProducts,
        totalPrice: state.cart.totalPrice,
    };
};

export default connect(mapStateToProps)(Payment);