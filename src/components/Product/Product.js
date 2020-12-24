import React from 'react';

import Button from '../UI/Button/Button';
import starRate from '../../assets/star-rate.svg';
import logoComment from '../../assets/comment.png';
import cheemsImg from '../../assets/cheems.jpg';

import './Product.css';

const Product = () => {
    return (
        <div className='CardProduct'>
            <p className='BasicLabel'>BASIC</p>
            <div className='ProductImgContainer'>
                <img src={cheemsImg} alt='product-image' />
            </div>
            <div>
                <p className='ProductName'>Coffee Maker</p>
                <div className='RateSection'>
                    <div className='StarsRate'>
                        <img src={starRate} alt='star-rate-logo' />
                        <img src={starRate} alt='star-rate-logo' />
                        <img src={starRate} alt='star-rate-logo' />
                        <img src={starRate} alt='star-rate-logo' />
                    </div>
                    <div className='Comments'>
                        <p>2</p>
                        <img src={logoComment} alt='logo-comment' />
                    </div>
                </div>
                <p className='Price'>$105</p>
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