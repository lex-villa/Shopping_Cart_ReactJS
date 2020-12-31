import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import Product from '../../components/Product/Product';


const Products = (props) => {
    const { onFetchProducts, products } = props;

    useEffect(() => {
        onFetchProducts();
    }, [onFetchProducts]);

    return (
        <>
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
        </>
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