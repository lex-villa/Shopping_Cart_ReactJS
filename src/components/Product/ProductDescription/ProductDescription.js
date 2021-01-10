import React from 'react';

import cheems from '../../../assets/cheems.jpg';
import starRate from "../../../assets/star-rate.svg";
import logoComment from '../../../assets/comment.png';
import Button from '../../UI/Button/Button';

import './ProductDescription.css';

const ProductDescription = () => {
    return (
        <div className='ProductDescriptionContainer'>
            <div className='ImgContainer_ForDetails'>
                <img src={cheems} alt='products' />
            </div>
            <div className="Details_ForDetails">
                <p className='ProductName_ForDetails'>Coffe Maker</p>
                <div className='RateSection_ForDetails'>
                    <div className='StarsRate_ForDetails'>
                        <img src={starRate} alt='star-rate' />
                        <img src={starRate} alt='star-rate' />
                        <img src={starRate} alt='star-rate' />
                        <img src={starRate} alt='star-rate' />
                    </div>
                    <div className='Comments_ForDetails'>
                        <p>2</p>
                        <img src={logoComment} alt='logo-comment' />
                    </div>
                </div>
                <div className='PricingContainer_ForDetails'>
                    <p className='Price_ForDetails'>$105</p>
                    <p className='BasicLabel_ForDetails'>Basic</p>
                </div>
                <div className='Description_ForDetails'>
                    <p>Descripcion vrgas</p>
                </div>
                <p className='SeeMore'>See more.</p>
                <div className='Btn_ForDetails'>
                    <Button
                        btnType='AddToCart'
                    // clicked={props.productAdded}
                    >
                        Add to cart
                </Button>
                </div>
            </div>
        </div>
    )
};

export default ProductDescription;