import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pageNumber: 1,
    items: null,
    nextPage: null,
    pages: null,
    prevPage: null,
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...action.payload,
                products: state.products.concat(action.payload.products),
            };

        default: return state;
    };
};

export default reducer;