import * as actionTypes from './actionTypes';

export const purchaseProductsStart = () => {
    return {
        type: actionTypes.PURCHASE_PRODUCTS_START,
    };
};

export const purchaseProductsSuccess = (responseObj) => {
    return {
        type: actionTypes.PURCHASE_PRODUCTS_SUCCESS,
        responseObj: responseObj,
    };
};

export const purchaseProductsFail = (error) => {
    return {
        type: actionTypes.PURCHASE_PRODUCTS_FAIL,
        error: error,
    };
};

export const purchaseProducts = (orderData) => {
    return {
        type: actionTypes.PURCHASE_PRODUCTS,
        orderData: orderData,
    };
};