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
    filterOption: null,
    sortOption: null,
    products: [],
    filteredProducts: [],
    isFilterRangePricesOn: false,
    rangeSelected: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PAGE:
            return {
                ...state,
                pageNumber: state.pageNumber + 1,
            };

        case actionTypes.FETCH_PRODUCTS_START:
            return {
                ...state,
                loading: true,
            };

        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                response: {
                    ...action.payload,
                },
                products: state.products.concat(action.payload.products),
                loading: false,
            };

        case actionTypes.FILTER_BASICS:
            return {
                ...state,
                filterOption: action.filterOption,
                pageNumber: 1,
                products: [],
            };

        case actionTypes.FILTER_BASICS_REMOVED:
            return {
                ...state,
                filterOption: null,
                pageNumber: 1,
                products: [],
            };

        case actionTypes.FILTER_SORT:
            return {
                ...state,
                sortOption: action.sortOption,
                pageNumber: 1,
                products: [],
            };

        case actionTypes.FILTER_SORT_REMOVED:
            return {
                ...state,
                sortOption: null,
                pageNumber: 1,
                products: [],
            };

        case actionTypes.FILTER_RANGE_PRICES:
            let filterProducts = [];
            if (action.range === 'first_range') {
                filterProducts = state.products.filter((product) => {
                    return +product.price >= 1 && +product.price <= 50;
                });
            } else if (action.range === 'second_range') {
                filterProducts = state.products.filter((product) => {
                    return +product.price >= 51 && +product.price <= 100;
                });
            } else if (action.range === 'third_range') {
                filterProducts = state.products.filter((product) => {
                    return +product.price >= 101 && +product.price <= 200;
                });
            } else {
                console.log('This text should not be displayed')
            }

            return {
                ...state,
                filteredProducts: filterProducts,
                isFilterRangePricesOn: true,
                rangeSelected: action.range,
            };

        default: return state;
    };
};

export default reducer;