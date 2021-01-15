import { takeEvery } from 'redux-saga/effects';
import { purchaseProducts } from '../actions';

import * as actionTypes from '../actions/actionTypes';
import { purchaseProductsSaga } from './order';
import { fetchProductsSaga } from './products';


export function* watchProducts() {
    yield takeEvery(actionTypes.FETCH_PRODUCTS, fetchProductsSaga);
};

export function* watchOrder() {
    yield takeEvery(actionTypes.PURCHASE_PRODUCTS, purchaseProductsSaga);
};