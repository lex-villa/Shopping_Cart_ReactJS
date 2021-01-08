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

export const filterSort = (sortOption) => {
    return {
        type: actionTypes.FILTER_SORT,
        sortOption: sortOption,
    };
};

export const filterSortRemoved = () => {
    return {
        type: actionTypes.FILTER_SORT_REMOVED,
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