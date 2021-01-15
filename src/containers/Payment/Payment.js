import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PaymentForm from './PaymentForm/PaymentForm';
import PaymentProducts from './PaymentProducts/PaymentProducts';
import * as actions from '../../store/actions/index';

import './Payment.css';

const Payment = (props) => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [orderData, setOrderData] = useState({});

    const handlePurchaseClick = () => {
        if(formIsValid) {
            props.onPurchaseProducts(orderData);
        };
    };

    return (
        <div className='PaymentSection_Container'>
            <div className='firstContainer'>
                <PaymentForm
                    setFormIsValid={setFormIsValid}
                    setBtnDisabled={setBtnDisabled}
                    setOrderData={setOrderData}
                />
            </div>
            <div>
                <PaymentProducts
                    productsInCart={props.productsInCart}
                    totalPrice={props.totalPrice}
                    onProductRemoved={props.onProductRemoved}
                    btnDisabled={btnDisabled}
                    handlePurchaseClick={handlePurchaseClick}
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
        onPurchaseProducts: (orderData) => dispatch(actions.purchaseProducts(orderData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);