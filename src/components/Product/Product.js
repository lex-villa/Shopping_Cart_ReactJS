import React from 'react';

import Button from '../UI/Button/Button';
import starRate from '../../assets/star-rate.svg';
import logoComment from '../../assets/comment.png';

import './Product.css';

const Product = () => {
    return (
        <div className='CardProduct'>
            <p>Basic</p>
            <div>
                <img />
            </div>
            <div>
                <p>Coffee Maker</p>
                <div>
                    <img src={starRate} alt='star-rate-logo' />
                    <img src={starRate} alt='star-rate-logo' />
                    <img src={starRate} alt='star-rate-logo' />
                    <img src={starRate} alt='star-rate-logo' />
                    <>2</>
                    <img src={logoComment} alt='logo-comment' className='LogoComment' />
                </div>
                <p>$105</p>
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