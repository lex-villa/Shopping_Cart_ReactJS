import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading: false,
    purchased: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.PURCHASE_PRODUCTS_SUCCESS:
            let isPurchased = false;
            const message = action.message;

            if (message === 'success') {
                isPurchased = true;
            };

            return {
                ...state,
                loading: false,
                purchased: isPurchased,
            };

        default:
            return state;
    };
};

export default reducer;