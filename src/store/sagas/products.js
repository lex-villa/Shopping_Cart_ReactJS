import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* fetchProductsSaga(action) {
    const filterOption = action.filterOption;
    const sortOption = action.sortOption;

    let url = `http://localhost:8080/products?page=${action.pageNumber}`

    if (filterOption && sortOption) {
        url = `http://localhost:8080/products?page=${action.pageNumber}&filter=${filterOption}&sort=${sortOption}`

    } else if (filterOption) {
        url = `http://localhost:8080/products?page=${action.pageNumber}&filter=${filterOption}`;

    } else if (sortOption) {
        url = `http://localhost:8080/products?page=${action.pageNumber}&sort=${sortOption}`;
    };

    try {
        yield put(actions.fetchProductsStart());

        const response = yield fetch(url);
        const responseJSON = yield response.json();

        yield put(actions.fetchProductsSuccess(responseJSON))

        if (action.isFilterRangePricesOn) {
            yield put(actions.filterRangePrices(action.rangeSelected));
        };

    } catch (error) {
        yield put(actions.fetchProductsFail(error));
    };
};


// fetch(`http://localhost:8080/products?page=${pageNumber.current}`)
//             .then(response => {
//                 return response.json();
//             })
//             .then(responseJSON => {
//                 setResponse(responseJSON)
//                 setProducts([...products.current, ...responseJSON.products]);
//             })