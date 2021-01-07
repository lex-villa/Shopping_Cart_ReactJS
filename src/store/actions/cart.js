import * as actionTypes from './actionTypes';

export const addProduct = (prodObj) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        product: prodObj,
    };
};

export const removeProduct = (idProduct, price) => {
    return {
        type: actionTypes.REMOVE_PRODRUCT,
        id: idProduct,
        price: price,
    };
};