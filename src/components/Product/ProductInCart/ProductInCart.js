import React from 'react';

import trashIcon from '../../../assets/recycle-bin.png';
import cheems from '../../../assets/cheems.jpg';

import './ProductInCart.css';

const ProductInCart = () => {
    return (
        <div className={"ProductItemCartContainer"}>
            <div className="ProductItemCart">
                <img className="Img_ProductItem" src={cheems} alt="product"/>
                <p className="Name_ProductItem">Coffe Maker</p>
                <p className="Price_ProductItem">$105</p>
                <img className="TrashIcon_ProductItem" src={trashIcon} alt="trash button" />
            </div>
        </div>
    );
};

export default ProductInCart;