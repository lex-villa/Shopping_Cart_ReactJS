import React from 'react';

import cheems from '../../../assets/cheems.jpg';
import starRate from "../../../assets/star-rate.svg";
import logoComment from '../../../assets/comment.png';
import Button from '../../UI/Button/Button';

import './ProductDescription.css';

const ProductDescription = (props) => {
    const { name, description, rate, price, img } = props;

    return (
        <div className='ProductDescriptionContainer'>
            <div className='ImgContainer_ForDetails'>
                <img src={img} alt='products' />
            </div>
            <div className="Details_ForDetails">
                <p className='ProductName_ForDetails'>{name}</p>
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
                    <p className='Price_ForDetails'>${price}</p>
                    <p className='BasicLabel_ForDetails'>Basic</p>
                </div>
                <div className='Description_ForDetails'>
                    <p>{description}</p>
                </div>
                <p className='SeeMore'>See more.</p>
                <div className='Btn_ForDetails'>
                    <Button
                        btnType='AddToCart'
                        clicked={props.productAdded}
                    >
                        Add to cart
                </Button>
                </div>
            </div>
        </div>
    )
};

export default ProductDescription;