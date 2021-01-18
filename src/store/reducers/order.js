import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    purchased: false,
};


const purchaseProductsStart = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};

const purchaseProductsSuccess = (state, action) => {
    let isPurchased = false;
    const message = action.responseObj.message;
    console.log('message', message)

    if (message === 'success') {
        isPurchased = true;
    };

    return {
        ...state,
        loading: false,
        purchased: isPurchased,
    };
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_PRODUCTS_START: return purchaseProductsStart(state, action);
        case actionTypes.PURCHASE_PRODUCTS_SUCCESS: return purchaseProductsSuccess(state, action);
        default: return state;
    };
};

export default reducer;