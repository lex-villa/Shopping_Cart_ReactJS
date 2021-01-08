import * as actionTypes from './actionTypes';

export const addPage = () => {
    return {
        type: actionTypes.ADD_PAGE,
    };
};

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START,
    };
};

export const fetchProductsSuccess = (payload) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: payload,
    };
};

export const fetchProductsFail = (error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error: error,
    };
};

export const fetchProducts = (pageNumber, filterOption, sortOption) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        pageNumber: pageNumber,
        filterOption: filterOption,
        sortOption: sortOption,
    };
};