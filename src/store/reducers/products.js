import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.products,
            };

        default: return state;
    };
};

export default reducer;