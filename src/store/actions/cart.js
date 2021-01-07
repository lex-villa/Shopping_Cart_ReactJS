import * as actionTypes from './actionTypes';

export const addProduct = (prodObj) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        product: prodObj,
    };
};