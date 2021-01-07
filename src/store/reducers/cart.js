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
            }
            return {
                ...state,
                cartProducts: state.cartProducts.concat(productToAdd),
                totalPrice: state.totalPrice + parseFloat(action.product.price),
                itemCounter: state.itemCounter + 1,
            };

        default: return state;
    };
};

export default reducer;