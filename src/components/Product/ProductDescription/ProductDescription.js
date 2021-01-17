import React, { useState } from 'react';

import starRate from "../../../assets/star-rate.svg";
import logoComment from '../../../assets/comment.png';
import Button from '../../UI/Button/Button';

import './ProductDescription.css';

const ProductDescription = (props) => {
    const { name, description, rate, price, img } = props;

    const [seeMoreIsClicked, setSeeMoreIsClicked] = useState(false);
    // const [stylesDescription, setStylesDescription] = useState({
    //     height: "40px",
    //     overflow: "hidden",
    //     fontSize: "14px",
    // });

    const stylesDescription = {
        height: "40px",
        overflow: "hidden",
        fontSize: "14px",
    };

    const stylesDescriptionVisible = {
        height: "fit-content",
        overflow: "none",
        fontSize: "14px",
    }

    const handleSeeMore = () => {
        // if (seeMoreIsClicked) {
        //     console.log('entro if')
        //     setSeeMoreIsClicked({
        //         height: "40px",
        //         overflow: "hidden",
        //         fontSize: "14px",
        //     });

        // } else {
        //     console.log('entro al esle')
        //     setStylesDescription({
        //         height: "fit-content",
        //         overflow: "none",
        //         fontSize: "14px",
        //     });
        // };

        setSeeMoreIsClicked(!seeMoreIsClicked);
    };

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
                <div style={seeMoreIsClicked ? stylesDescriptionVisible : stylesDescription}>
                    <p>{description}</p>
                </div>
                <p className='SeeMore' onClick={handleSeeMore}>
                    {seeMoreIsClicked ? 'See Less.' : 'See more.'}
                </p>
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