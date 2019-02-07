import { createAction, handleActions } from 'redux-actions';
import { call, put,select, takeLatest, takeEvery } from 'redux-saga/effects';
import { generateId } from '.././helper'
import { getList, addList, deleteList, updateList, getListById } from '../api/lists'
const uuid = require('uuid');

export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_BOARD = 'FETCH_BOARD';
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const CHANGE_DASHBOARD_TITLE = 'CHANGE_DASHBOARD_TITLE';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CHANGE_TASK_SELECTED = 'CHANGE_TASK_SELECTED';
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_DASHBOARD = 'ADD_DASHBOARD';

export const INPUT_TITLE_TEXT = 'INPUT_TITLE_TEXT';
export const INPUT_TASK_TEXT = 'INPUT_TASK_TEXT';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

export const actions = {
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),
    fetchBoard: createAction(FETCH_BOARD),
    fetchBoardSuccess: createAction(FETCH_BOARD_SUCCESS),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    changeDashboardTitle: createAction(CHANGE_DASHBOARD_TITLE),
    addList: createAction(ADD_LIST),
    deleteList: createAction(DELETE_LIST),
    addTask: createAction(ADD_TASK),
    changeTaskName: createAction(CHANGE_TASK_NAME),
    deleteTask: createAction(DELETE_TASK),
    addDashboard: createAction(ADD_DASHBOARD),
    changeTaskSelected: createAction(CHANGE_TASK_SELECTED),

    showSidebar: createAction(SHOW_SIDEBAR),
    hideSidebar: createAction(HIDE_SIDEBAR),
    addInputTitle: createAction(INPUT_TITLE_TEXT),
    addInputTask: createAction(INPUT_TASK_TEXT)
};

export const initialState = {
    data: [],
    oneList: {},
    inputTitle: '',
    inputTask: '',
    className: 'block-add'
};

export const reducer = handleActions({

    [FETCH_LIST_SUCCESS]: (state, action) => {
        return {...state, data: action.payload}
    },

    [FETCH_BOARD_SUCCESS]: (state, action) => {
        return {...state, oneList: action.payload}
    },

    [DELETE_DASHBOARD]: (state, action) => {
        return {...state, data: state.data.filter(item => item.dashboard_id !== action.payload)}
    },

    [CHANGE_DASHBOARD_TITLE]: (state, action) => {
        console.log(action)
        return { ...state, data: state.data.map(i => 
            i.dashboard_id === action.payload.id ? { ...i, title: action.payload.newTitle } : i)
        }
    },

    // [ADD_TASK]: (state, action) => {
    //     let newTask =
    //         {
    //             task_id: generateId(),
    //             selected: false,
    //             name: action.payload.task
    //         };
    //     return {
    //         ...state, data: state.data.map(item =>
    //             item.dashboard_id === action.payload.id ? {...item, tasks: [...item.tasks, newTask]} : item)
    //     }
    // },

    [CHANGE_TASK_NAME]: (state, action) => {
        return {...state, data: state.data.map(item => {
              if (item.dashboard_id === action.payload.dashboard_id) {
                item.tasks = item.tasks.map(task => {
                  if (task.task_id === action.payload.task_id) {
                    return {...task, name: action.payload.name}
                  }
                  return task;
                })
              }
              return item;
            })
        };
    },

    // [DELETE_TASK]: (state, action) => {
    //     return { ...state, data: state.data.map(item => {
    //             if (item.dashboard_id === action.payload.dashboard_id) {
    //                 return {...item, tasks: item.tasks.filter(task => task.task_id !== action.payload.task_id)}
    //             }
    //             return item
    //         })
    //     }
    // },

    [CHANGE_TASK_SELECTED]: (state, action) => {
        return {...state, data: state.data.map(item => {
              if (item.dashboard_id === action.payload.dashboard_id) {
                item.tasks = item.tasks.map(task => {
                  if (task.task_id === action.payload.task_id) {
                    return {...task, selected: action.payload.selected}
                  }
                  return task;
                })
              }
              return item;
            })
          }
    },

     [ADD_DASHBOARD]: (state, action) => {

         let newDashboard = {
             title: action.payload.addTitle,
             tasks: [
                 {
                     name: action.payload.addTask,
                     selected: false,
                 }
             ],
         }
  
        return {...state,
             data: [...state.data, newDashboard]
        }
     },


    [SHOW_SIDEBAR]: (state, action) => {
        return {...state, className: "block-add current"}
    },

    [HIDE_SIDEBAR]: (state, action) => {
        return {...state, className: "block-add"}
    },

    [INPUT_TITLE_TEXT]: (state, action) => {
        return {...state, inputTitle: action.payload}
    },

    [INPUT_TASK_TEXT]: (state, action) => {
        return {...state, inputTask: action.payload}
    }
}, initialState);

function* func_getList() {
    console.log("getList");
    const response = yield call(getList);
    console.log(response.data)
    yield put(actions.fetchListSuccess(response.data));
}

function* func_addList(action){
    console.log("addList");

    let newDashboard = {
        title: action.payload.addTitle,
        tasks: [
            {
                task_id: '',
                name: action.payload.addTask,
                selected: false,
            }
        ],
    }
    console.log(newDashboard)
    yield call(addList, newDashboard);
    yield call(func_getList);
}

function* func_deleteList(action){
    console.log("deleteList");
    console.log(action)
    yield call(deleteList, action.payload);
}

function* func_addTask(action){
    console.log("addTask");
    console.log(action)
    const array = yield select(state => state.data);
    console.log(array)
    const list = array.find(item => item.dashboard_id === action.payload.id);
    console.log(list)
    let newTask =
            {
                task_id: uuid(),
                selected: false,
                name: action.payload.task
            };
    console.log(newTask)
    yield call(updateList, action.payload.id, {...list, tasks: [...list.tasks, newTask] });
    yield call(func_getList);
}

function* func_updateTitle(action){
    console.log("updTitle");
    console.log(action)
    const array = yield select(state => state.data);
    console.log(array)
    const list = array.find(item => item.dashboard_id === action.payload.id);
    console.log(list)
    yield call(updateList, action.payload.id, {...list, title: action.payload.newTitle});
}

function* func_updateTaskName(action){
    console.log("updTaskName");
    console.log(action)
    const array = yield select(state => state.data);
    console.log(array)
    const list = array.find(item => item.dashboard_id === action.payload.dashboard_id);
    console.log(list)
    //const task = list.tasks.find(i => i.task_id === action.payload.task_id);
    //console.log(task)
    yield call(updateList, action.payload.dashboard_id, {...list, name: action.payload.name});
}

function* func_updateTaskSelected(action){
    console.log("updTaskSelected");
    console.log(action)
    const array = yield select(state => state.data);
    console.log(array)
    const list = array.find(item => item.dashboard_id === action.payload.dashboard_id);
    console.log(list)
    yield call(updateList, action.payload.dashboard_id, {...list, selected: action.payload.selected});
}

function* func_deleteTask(action){
    console.log("deleteTask");
    console.log(action)
    const array = yield select(state => state.data);
    const list = array.find(item => item.dashboard_id === action.payload.dashboard_id);
    yield call(updateList, action.payload.dashboard_id, {...list, tasks: list.tasks.filter(task => task.task_id !== action.payload.task_id)});
    yield call (func_getList)
}


function* func_getBoard(action){
    console.log("getBoard");
    console.log(action)
    const response = yield call(getListById, action.payload);
    yield put(actions.fetchBoardSuccess(response.data));
}

export function* saga() {
    yield takeLatest(FETCH_LIST, func_getList);
    yield takeLatest(ADD_DASHBOARD, func_addList);
    yield takeLatest(DELETE_DASHBOARD, func_deleteList);
    yield takeLatest(CHANGE_DASHBOARD_TITLE, func_updateTitle);
    yield takeLatest(ADD_TASK, func_addTask);
    yield takeLatest(CHANGE_TASK_NAME, func_updateTaskName);
    yield takeLatest(CHANGE_TASK_SELECTED, func_updateTaskSelected);
    yield takeLatest(DELETE_TASK, func_deleteTask);
    yield takeLatest(FETCH_BOARD, func_getBoard);
}