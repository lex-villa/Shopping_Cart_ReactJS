import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PaymentForm from './PaymentForm/PaymentForm';
import PaymentProducts from './PaymentProducts/PaymentProducts';
import * as actions from '../../store/actions/index';

import './Payment.css';

const Payment = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);

    return (
        <div className='PaymentSection_Container'>
            <div className='firstContainer'>
                <PaymentForm
                    setFormIsValid={setFormIsValid}
                    setBtnDisabled={setBtnDisabled}
                />
            </div>
            <div>
                <PaymentProducts
                    productsInCart={props.productsInCart}
                    totalPrice={props.totalPrice}
                    onProductRemoved={props.onProductRemoved}
                    btnDisabled={btnDisabled}
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

const mapDispatchToProps = (dispatch) => {
    return {
        onProductRemoved: (idProduct, price) => dispatch(actions.removeProduct(idProduct, price)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);