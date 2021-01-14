import React from 'react';

import trashIcon from '../../../assets/recycle-bin.png';

import './ProductInCart.css';

const ProductInCart = (props) => {
    return (
        <div className={"ProductItemCartContainer"}>
            <div className="ProductItemCart">
                <img className="Img_ProductItem" src={props.img} alt="product"/>
                <p className="Name_ProductItem">{props.name}</p>
                <p className="Price_ProductItem">${props.price}</p>
                <img className="TrashIcon_ProductItem" src={trashIcon} alt="trash button" onClick={props.productRemoved} />
            </div>
        </div>
    );
};

export default ProductInCart;