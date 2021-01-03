import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import * as actions from '../../store/actions/index';
import Product from '../../components/Product/Product';

import './Products.css';


const Products = (props) => {
    const { onFetchProducts, products, pageNumber, state } = props;

    useEffect(() => {
        onFetchProducts(pageNumber);
        console.log("State del reducer desde el componente")
        console.log(state)
        console.log("Products del reducer desde el componente")
        console.log(products)

    }, [onFetchProducts, pageNumber]);

    return (
        <div>
            <h2 className='ProductsSectionTitle'>Our products:</h2>
            <div className='ProductsGridContainer'>
                {products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            imgURL={product.img}
                            commentsCounter={product.comments}
                            isBasics={product.basics}
                            rate={product.rate}
                        />
                    );
                })}
            </div>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        pageNumber: state.products.pageNumber,
        state: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProducts: (pageNumber) => dispatch(actions.fetchProducts(pageNumber)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);