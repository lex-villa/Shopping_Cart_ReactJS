import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {connect} from 'react-redux';

import ProductDescription from '../../components/Product/ProductDescription/ProductDescription';
import Comments from '../../components/Comments/Comments';
import * as actions from '../../store/actions/index';

import './DetailsProduct.css';

const DetailProduct = (props) => {
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
                productAdded={() => props.onAddProduct(response)}
            />
            <div className='CommentContainer_ForDetailProduct'>
                <Comments 
                    comments={response.comments}
                />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (prodObj) => dispatch(actions.addProduct(prodObj)),
    }
};

export default connect(null, mapDispatchToProps)(DetailProduct);