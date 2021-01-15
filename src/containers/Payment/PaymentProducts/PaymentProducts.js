import React from 'react';

import ProductInCart from '../../../components/Product/ProductInCart/ProductInCart';
import Button from '../../../components/UI/Button/Button';


import './PaymentProducts.css';

const PaymentProducts = (props) => {
    return (
        <div className='PaymentProductsContainer'>
            <p>Products</p>
            {props.productsInCart.map((product) => {
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
            <p className="Subtotal_PaymentProducts">Subtotal: <span>${props.totalPrice}</span></p>
            <div className="btnProceedPayment_PaymentProducts">
                <Button btnType='Payment' disabled={props.btnDisabled}>Proceed to payment</Button>
            </div>
        </div>
    );
};

export default PaymentProducts;