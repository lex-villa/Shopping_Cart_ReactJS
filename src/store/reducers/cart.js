import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartProducts: [],
    totalPrice: 0,
    itemCounter: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            const productToAdd = {
                ...action.product,
                id: action.product.id + Math.random(),
            }
            return {
                ...state,
                cartProducts: state.cartProducts.concat(productToAdd),
                totalPrice: state.totalPrice + parseFloat(action.product.price),
                itemCounter: state.itemCounter + 1,
            };

        case actionTypes.REMOVE_PRODRUCT:
            const cartProductsUpdated = state.cartProducts.filter(product => product.id !== action.id) 
            return {
                ...state,
                cartProducts: cartProductsUpdated,
                totalPrice: state.totalPrice - parseFloat(action.price),
                itemCounter: state.itemCounter - 1,
            };

        default: return state;
    };
};

export default reducer;