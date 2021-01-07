import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* fetchProductsSaga(action) {
    try {
        const response = yield fetch(`http://localhost:8080/products?page=${action.pageNumber}`);
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