import * as actionTypes from './actionTypes';

export const addPage = () => {
    return {
        type: actionTypes.ADD_PAGE,
    };
};

export const filterBasics = (filterOption) => {
    return {
        type: actionTypes.FILTER_BASICS,
        filterOption: filterOption,
    };
};

export const filterBasicsRemoved = () => {
    return {
        type: actionTypes.FILTER_BASICS_REMOVED,
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

export const fetchProducts = (pageNumber, filterOption) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        pageNumber: pageNumber,
        filterOption: filterOption,
    };
};