import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../UI/Button/Button';
import starRate from '../../assets/star-rate.svg';
import logoComment from '../../assets/comment.png';

import './Product.css';

const Product = (props) => {
    const { name, rate, price, commentsCounter, isBasics, imgURL, id } = props;

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
                <NavLink to={`/ProductDetail/${id}`} className='BtnProduct'>
                    <Button
                        btnType='Details'
                    >
                        See Details
                    </Button>
                </NavLink>
                <div className='BtnProduct'>
                    <Button
                        btnType='AddToCart'
                        clicked={props.productAdded}
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Product;