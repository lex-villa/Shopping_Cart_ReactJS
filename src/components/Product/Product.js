import React from 'react';

import Button from '../UI/Button/Button';
import starRate from '../../assets/star-rate.svg';
import logoComment from '../../assets/comment.png';

import './Product.css';

const Product = (props) => {
    const {name, rate, price, commentsCounter, isBasics, imgURL} = props;

    return (
        <div className='CardProduct'>
            {isBasics ? <p className='BasicLabel'>BASIC</p> : <p className='BasicLabelFaked'></p>}
            <div className='ProductImgContainer'>
                <img src={imgURL} alt='product' />
            </div>
            <div>
                <p className='ProductName'>{name}</p>
                <div className='RateSection'>
                    <div className='StarsRate'>
                        <img src={starRate} alt='star-rate-logo' />
                        <img src={starRate} alt='star-rate-logo' />
                        <img src={starRate} alt='star-rate-logo' />
                        <img src={starRate} alt='star-rate-logo' />
                    </div>
                    <div className='Comments'>
                        <p>{commentsCounter}</p>
                        <img src={logoComment} alt='logo-comment' />
                    </div>
                </div>
                <p className='Price'>${price}</p>
            </div>
            <div className='ButtonsSection'>
                <div className='BtnProduct'>
                    <Button
                        btnType='Details'
                    >
                        See Details
                    </Button>
                </div>
                <div className='BtnProduct'>
                    <Button
                        btnType='AddToCart'
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Product;