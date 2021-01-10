import React from 'react';

import ProductDescription from '../../components/Product/ProductDescription/ProductDescription';
import Comments from '../../components/UI/Comments/Comments';

import './DetailsProduct.css';

const DetailProduct = () => {
    return (
        <div className='DetailProductContainer'>
            <ProductDescription />
            <Comments />
        </div>
    );
};

export default DetailProduct;