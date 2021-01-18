import { put } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* purchaseProductsSaga(action) {
    yield put(actions.purchaseProductsStart());
    console.log('orderData', action.orderData)
    try {
        const response = yield fetch('http://localhost:8080/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {...action.orderData}
            ),
        });
        const responseJson = yield response.json();
        console.log('responseJson', responseJson)
        yield put(actions.purchaseProductsSuccess(responseJson));
    } catch (error) {
        yield put(actions.purchaseProductsFail(error));
    }
};