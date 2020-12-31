import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Product from '../../components/Product/Product';

import './Products.css';


const Products = (props) => {
    const { onFetchProducts, products } = props;

    useEffect(() => {
        onFetchProducts();
    }, [onFetchProducts]);

    return (
        <div>
            <h2 className='ProductsSectionTitle'>Our products:</h2>
            <div className='ProductsGridContainer'>
                {products.map((product) => {
                    return (
                        <Product
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchProducts: () => dispatch(actions.fetchProducts()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);