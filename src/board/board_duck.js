import { createAction, handleActions } from 'redux-actions';
import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { generateId } from '.././helper'
import { getList, addList, deleteList, updateList, getListById } from '../api/lists'

export const FETCH_BOARD = 'FETCH_BOARD';
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';

export const actions = {
    fetchBoard: createAction(FETCH_BOARD),
    fetchBoardSuccess: createAction(FETCH_BOARD_SUCCESS),
};

export const initialState = {
    data: [

    ]
};

export const boardReducer = handleActions({
    [FETCH_BOARD_SUCCESS]: (state, action) => {
        return {...state, data: action.payload}
    },
}, initialState);

function* func_getBoard(action){
    console.log("getBoard");
    console.log(action)
    const response = yield call(getList, action.payload);
    console.log(response.data)
}

export function* saga() {
    yield takeLatest(FETCH_BOARD, func_getBoard);
}