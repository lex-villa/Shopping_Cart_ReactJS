import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PaymentForm from './PaymentForm/PaymentForm';
import PaymentProducts from './PaymentProducts/PaymentProducts';
import * as actions from '../../store/actions/index';

import './Payment.css';

const Payment = (props) => {
    const { purchased } = props;

    const [formIsValid, setFormIsValid] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [orderData, setOrderData] = useState({});

    const history = useHistory();

    const handlePurchaseClick = () => {
        if (formIsValid) {
            props.onPurchaseProducts(orderData);
        };
    };

    useEffect(() => {
        if (purchased) {
            history.push('/Success');
        };

    }, [purchased, history])

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
        purchased: state.order.purchased,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onProductRemoved: (idProduct, price) => dispatch(actions.removeProduct(idProduct, price)),
        onPurchaseProducts: (orderData) => dispatch(actions.purchaseProducts(orderData)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);