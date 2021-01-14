import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Backdrop from '../../UI/Backdrop/Backdrop';
import closeLogo from '../../../assets/close.png';
import Button from '../../UI/Button/Button';
import ProductInCart from '../../Product/ProductInCart/ProductInCart';
import * as actions from '../../../store/actions/index';

import './SideCartProducts.css';

const SideCartProducts = (props) => {
    const { productsInCart, itemCounter } = props;

    const [btnDisabled, setBtnDisabled] = useState(true);

    const history = useHistory();


    useEffect(() => {
        if (itemCounter > 0) {
            setBtnDisabled(false);
        };
    }, [itemCounter])


    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

    const handleClick = () => {
        props.closed();
        history.push('/Payment')
    };

    return (
        <>
            <Backdrop isShown={props.open} isClicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className='TitleSideCartProducts'>
                    <p className="P_tag-TitleSideCartProducts">Cart:</p>
                    <img src={closeLogo} className="Img_tag-TitleSideCartProducts" alt="close button" onClick={props.closed} />
                </div>
                <p className="Subtotal">Subtotal: <span>${props.totalPrice}</span></p>
                <div className="btnProceedPayment">
                    <Button btnType="Details" clicked={handleClick} disabled={btnDisabled}>Proceed to payment</Button>
                </div>
                <div className='ProductInCart_SideCartProducts'>
                    {productsInCart.map((product) => {
                        return (
                            <ProductInCart
                                key={product.id}
                                img={product.img}
                                name={product.name}
                                price={product.price}
                                productRemoved={() => props.onProductRemoved(product.id, product.price)}
                            />
                        );
                    })}
                </div>
                <p className="Subtotal">Subtotal: <span>${props.totalPrice}</span></p>
                <div className="btnProceedPayment">
                    <Button btnType="Details" clicked={handleClick} disabled={btnDisabled}>Proceed to payment</Button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        productsInCart: state.cart.cartProducts,
        totalPrice: state.cart.totalPrice,
        itemCounter: state.cart.itemCounter,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onProductRemoved: (idProduct, price) => dispatch(actions.removeProduct(idProduct, price)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideCartProducts);