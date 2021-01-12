import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductDescription from '../../components/Product/ProductDescription/ProductDescription';
import Comments from '../../components/Comments/Comments';

import './DetailsProduct.css';

const DetailProduct = () => {
    const { productId } = useParams()
    const [response, setResponse] = useState({})

        useEffect(() => {
            fetch(`http://localhost:8080/products/${productId}`)
                .then(response => {
                    return response.json();
                })
                .then(responseJSON => {
                    setResponse(responseJSON);
                })
                .catch(error => {
                    console.log(error);
                })
        }, [productId]);

    return (
        <div className='DetailProductContainer'>
            <ProductDescription 
                name={response.name}
                description={response.description}
                rate={response.rate}
                price={response.price}
                img={response.img}
            />
            <div className='CommentContainer_ForDetailProduct'>
                <Comments 
                    comments={response.comments}
                />
            </div>
        </div>
    );
};

export default DetailProduct;