import * as actionTypes from './actionTypes';

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START,
    };
};

export const fetchProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        products: products,
    };
};

export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error,
    };
};

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsStart());

        fetch('http://localhost:8080/products')
        .then(response => {
            console.log('fetch de productos');
            console.log(response);
        })
        .catch(error => {
            dispatch(fetchProductsFail(error));
        });
    };
};