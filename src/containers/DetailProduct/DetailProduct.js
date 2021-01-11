import React from 'react';

import ProductDescription from '../../components/Product/ProductDescription/ProductDescription';
import Comments from '../../components/Comments/Comments';

import './DetailsProduct.css';

const DetailProduct = () => {
    return (
        <div className='DetailProductContainer'>
            <ProductDescription />
            <div className='CommentContainer_ForDetailProduct'>
                <Comments />
            </div>
        </div>
    );
};

export default DetailProduct;