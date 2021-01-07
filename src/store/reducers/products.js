import * as actionTypes from '../actions/actionTypes';

const initialState = {
    response: {
        pageNumber: null,
        items: null,
        nextPage: null,
        pages: null,
        prevPage: null,
    },
    pageNumber: 1,
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PAGE:
            return {
                ...state,
                pageNumber: state.pageNumber + 1,
            };

        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                response: {
                    ...action.payload,
                },
                products: state.products.concat(action.payload.products),
            };

        default: return state;
    };
};

export default reducer;