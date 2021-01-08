import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* fetchProductsSaga(action) {
    const filterOption = action.filterOption;
    const sortOption = action.sortOption;

    try {
        const response = yield fetch(
            `http://localhost:8080/
            products?page=${action.pageNumber}
            &filter=${filterOption}
            &sort=${sortOption}`
        );
        const responseJSON = yield response.json();


        yield put(actions.fetchProductsSuccess(responseJSON))

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