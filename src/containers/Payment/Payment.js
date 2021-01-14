import React from 'react';
import { connect } from 'react-redux';

import PaymentForm from './PaymentForm/PaymentForm';
import PaymentProducts from './PaymentProducts/PaymentProducts';
import * as actions from '../../store/actions/index';

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
                    onProductRemoved={props.onProductRemoved}
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