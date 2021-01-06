import React from 'react';

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
                <p className="Subtotal">Subtotal: <span>$315</span></p>
                <div className="btnProceedPayment">
                    <Button btnType="Details">Proceed to payment</Button>
                </div>
                <ProductInCart />
                <ProductInCart />
                <ProductInCart />
                <ProductInCart />
                <ProductInCart />
                <p className="Subtotal">Subtotal: <span>$315</span></p>
                <div className="btnProceedPayment">
                    <Button btnType="Details">Proceed to payment</Button>
                </div>
            </div>
        </>
    );
};

export default SideCartProducts;