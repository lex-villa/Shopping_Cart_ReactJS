import React from 'react';
import { connect } from 'react-redux';

import Backdrop from '../../UI/Backdrop/Backdrop';
import closeLogo from '../../../assets/close.png';
import Button from '../../UI/Button/Button';
import ProductInCart from '../../Product/ProductInCart/ProductInCart';

import './SideCartProducts.css';

const SideCartProducts = (props) => {

    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }

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
                    <Button btnType="Details">Proceed to payment</Button>
                </div>
                {props.productsInCart.map((product) => {
                    return(
                        <>
                            <ProductInCart 
                                img={product.img}
                                name={product.name}
                                price={product.price}    
                            />
                        </>
                    );
                })}
                <p className="Subtotal">Subtotal: <span>${props.totalPrice}</span></p>
                <div className="btnProceedPayment">
                    <Button btnType="Details">Proceed to payment</Button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        productsInCart: state.cart.cartProducts,
        totalPrice: state.cart.totalPrice,
    };
};

export default connect(mapStateToProps)(SideCartProducts);