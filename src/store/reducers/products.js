import { fetchProducts } from '../actions';
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

const addPage = (state, action) => {
    return {
        ...state,
        pageNumber: state.pageNumber + 1,
    };
};
const fetchProductsStart = (state, action) => {
    return {
        ...state,
        loading: true,
    };
};
const fetchProductsSuccess = (state, action) => {
    return {
        ...state,
        response: {
            ...action.payload,
        },
        products: state.products.concat(action.payload.products),
        loading: false,
    };
};
const filterBasics = (state, action) => {
    return {
        ...state,
        filterOption: action.filterOption,
        pageNumber: 1,
        products: [],
    };
};
const filterBasicsRemoved = (state, action) => {
    return {
        ...state,
        filterOption: null,
        pageNumber: 1,
        products: [],
    };
};
const filterSort = (state, action) => {
    return {
        ...state,
        sortOption: action.sortOption,
        pageNumber: 1,
        products: [],
    };
};
const filterSortRemoved = (state, action) => {
    return {
        ...state,
        sortOption: null,
        pageNumber: 1,
        products: [],
    };
};
const filterRangePrices = (state, action) => {
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
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PAGE: return addPage(state, action);
        case actionTypes.FETCH_PRODUCTS_START: return fetchProductsStart(state, action);
        case actionTypes.FETCH_PRODUCTS_SUCCESS: return fetchProductsSuccess(state, action);
        case actionTypes.FILTER_BASICS: return filterBasics(state, action);
        case actionTypes.FILTER_BASICS_REMOVED: return filterBasicsRemoved(state, action);
        case actionTypes.FILTER_SORT: return filterSort(state, action);
        case actionTypes.FILTER_SORT_REMOVED: return filterSortRemoved(state, action);
        case actionTypes.FILTER_RANGE_PRICES: return filterRangePrices(state, action);
        default: return state;
    };
};

export default reducer;