import {createAction, handleActions} from 'redux-actions';
import {
    call, put, select, delay,
} from 'redux-saga/effects';
import {
    getMyList,
    deleteList,
    addDashboard,
    updateList,
    getSharedLists,
    shareTodoListToUser,
} from '../../api/dashboard';
import {
    updateTask,
    addTask,
    deleteTask as deleteTaskApi,
} from '../../api/task';
import {safeTakeEvery, safeTakeLatest} from '../../helpers/saga';

export const FETCH_DASHBOARD = 'dashboard/FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'dashboard/FETCH_DASHBOARD_SUCCESS';

export const FETCH_MY_LISTS_SUCCESS = 'dashboard/FETCH_MY_LISTS_SUCCESS';
export const FETCH_SHARED_LISTS_SUCCESS = 'dashboard/FETCH_SHARED_LISTS_SUCCESS';

export const SELECTED_MY_LISTS = 'dashboard/SELECTED_MY_LISTS';
export const SELECTED_SHARED_LISTS = 'dashboard/SELECTED_SHARED_LISTS';

export const ADD_DASHBOARD = 'dashboard/ADD_DASHBOARD';
export const DELETE_DASHBOARD = 'dashboard/DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'dashboard/UPDATE_TITLE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD_SUCCESS = 'dashboard/UPDATE_TITLE_DASHBOARD_SUCCESS';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const UPDATE_TASK_NAME_SUCCESS = 'UPDATE_TASK_NAME_SUCCESS';
export const DELETE_TASK = 'DELETE_TASK';

export const SEARCH = 'dashboard/SEARCH';
export const MUTATE = 'dashboard/MUTATE';
export const MUTATE_SUCCESS = 'dashboard/MUTATE_SUCCESS';

export const SHARE_LIST = 'dashboard/SHARE_LIST';
export const CHANGE_SIZE = 'dashboard/CHANGE_SIZE';
export const CHANGE_SORT = 'dashboard/CHANGE_SORT';

export const CHANGE_PAGINATION = 'CHANGE_PAGINATION';

export const actions = {
    changeSize: createAction(CHANGE_SIZE),
    changeSort: createAction(CHANGE_SORT),
    fetchDashboard: createAction(FETCH_DASHBOARD),
    fetchDashboardSuccess: createAction(FETCH_DASHBOARD_SUCCESS),
    updateSelectedMyLists: createAction(SELECTED_MY_LISTS),
    updateSelectedSharedLists: createAction(SELECTED_SHARED_LISTS),
    fetchMyListsSuccess: createAction(FETCH_MY_LISTS_SUCCESS),
    fetchSharedListsSuccess: createAction(FETCH_SHARED_LISTS_SUCCESS),
    addNewDashboard: createAction(ADD_DASHBOARD),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    updateTitleDashboard: createAction(UPDATE_TITLE_DASHBOARD),
    updateTitleSuccess: createAction(UPDATE_TITLE_DASHBOARD_SUCCESS),
    addTask: createAction(ADD_TASK),
    deleteTask: createAction(DELETE_TASK),
    updateCheckbox: createAction(UPDATE_CHECKBOX),
    updateTaskName: createAction(UPDATE_TASK_NAME),
    updateTaskNameSuccess: createAction(UPDATE_TASK_NAME_SUCCESS),
    search: createAction(SEARCH),
    mutate: createAction(MUTATE),
    mutateSuccessDashboard: createAction(MUTATE_SUCCESS),
    shareList: createAction(SHARE_LIST),
    changePagination: createAction(CHANGE_PAGINATION),
};


const initialState = {
    myList: [],
    sharedList: [],
    toDoBoardRaw: [],
    toDoBoard: [],
    selectedMy: true,
    currentPage: 0,
    selectedShared: false,
    search: '',
    pageSize: 4,
    totalElements: 0,
    sort: 'id,asc',
};

export const reducer = handleActions({
    [CHANGE_SIZE]: (state, action) => ({...state, pageSize: action.payload, currentPage: 0}),
    [CHANGE_SORT]: (state, action) => ({...state, sort: action.payload}),
    [FETCH_DASHBOARD_SUCCESS]: (state, action) => ({...state, toDoBoardRaw: action.payload}),
    [MUTATE_SUCCESS]: (state, action) => ({...state, toDoBoard: action.payload}),
    [FETCH_MY_LISTS_SUCCESS]: (state, action) => ({
        ...state,
        myList: action.payload.myLists,
        totalElements: action.payload.countElements,
        totalPages: action.payload.countPages,
    }),
    [FETCH_SHARED_LISTS_SUCCESS]: (state, action) => ({...state, sharedList: action.payload}),

    [UPDATE_TITLE_DASHBOARD]: (state, action) => ({
        ...state,
        toDoBoardRaw: state.toDoBoardRaw.map(e => (e.id === action.payload.id
            ? {...e, todoListName: action.payload.newTitle} : e)),
    }),
    [UPDATE_CHECKBOX]: (state, action) => ({
        ...state,
        toDoBoardRaw: state.toDoBoardRaw.map(i => (
            i.id === action.payload.idDashboard ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? {...e, isComplete: !action.payload.selected} : e)),
            } : i
        )),
    }),
    [UPDATE_TASK_NAME]: (state, action) => ({
        ...state,
        toDoBoardRaw: state.toDoBoardRaw.map(i => (
            i.id === action.payload.idDashboard ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? {...e, body: action.payload.newTaskName} : e)),
            } : i
        )),
    }),

    [SELECTED_MY_LISTS]: (state, action) => ({...state, selectedMy: action.payload}),
    [SELECTED_SHARED_LISTS]: (state, action) => ({...state, selectedShared: action.payload}),
    [SEARCH]: (state, action) => ({...state, search: action.payload}),
    [CHANGE_PAGINATION]: (state, action) => ({...state, currentPage: action.payload}),
}, initialState);

export const getDashboard = state => state.dashboard;
export function* fetchAllLists() {
    const {
        selectedMy, selectedShared, pageSize, currentPage, sort,
    } = yield select(getDashboard);
    let sortValue;
    switch (sort) {
        case 'todoListName, A - Z':
            sortValue = 'todoListName,asc';
            break;
        case 'todoListName, Z - A':
            sortValue = 'todoListName,desc';
            break;
        case 'createdDate, low to high':
            sortValue = 'createdDate,asc';
            break;
        case 'createdDate, high to low':
            sortValue = 'createdDate,desc';
            break;
        case 'modifiedDate, low to high':
            sortValue = 'modifiedDate,asc';
            break;
        case 'modifiedDate, high to low':
            sortValue = 'modifiedDate,desc';
            break;
        default:
            sortValue = 'id,asc';
    }
    const data = selectedMy
        ? (yield call(getMyList, currentPage, pageSize, sortValue)).data : {};
    const countElements = data.totalElements;
    const myLists = selectedMy ? data.content : [];
    const countPages = data.totalPages;
    yield put(actions.fetchMyListsSuccess({ myLists, countElements, countPages }));
    const sharedLists = selectedShared ? (yield call(getSharedLists)).data.map(l => ({...l, shared: true})) : [];
    yield put(actions.fetchSharedListsSuccess(sharedLists));
    const allList = myLists.concat(sharedLists);
    yield put(actions.fetchDashboardSuccess(allList));
}

export const getToDoBoardFiltered = id => state => state.dashboard.toDoBoardRaw.find(l => l.id === id);
export function* updateTitle(action) {
    const { payload: { newTitle, id } } = action;
    const list = yield select(getToDoBoardFiltered(id));
    console.log(list);
    const updatedList = {...list, todoListName: newTitle || 'New value'};
    yield call(updateList, id, updatedList);
    yield call(fetchAllLists);
}

export function* mutate() {
    const { toDoBoardRaw, search } = yield select(getDashboard);
    const allList = toDoBoardRaw.filter(list => list.todoListName.toLowerCase().includes(search.toLowerCase()));
    yield put(actions.mutateSuccessDashboard(allList));
}

//success test
export function* updateSelectedTask(action) {
    yield delay(150);
    yield call(updateTask, action.payload.idTask, {
        body: action.payload.nameTask,
        isComplete: !action.payload.selected,
    });
    yield call(fetchAllLists);
}

//success test
export function* updateNameTask(action) {
    const { payload: { idTask, newTaskName, selected } } = action;
    yield call(updateTask, idTask, {
        body: newTaskName || 'New value',
        isComplete: selected,
    });
    yield call(fetchAllLists);
}

//success test
export function* deleteDashboard(action) {
    yield call(deleteList, action.payload.id);
    yield call(fetchAllLists);
}

//success test
export function* deleteTask(action) {
    yield call(deleteTaskApi, action.payload.idTask);
    yield call(fetchAllLists);
}

//success test
export function* addNewTask(action) {
    yield call(addTask, action.payload.idDashboard, {body: action.payload.nameTask, isComplete: false});
    yield call(fetchAllLists);
}

//success test
export function* addList(action) {
    yield call(addDashboard, action.payload);
    yield call(fetchAllLists);
}

//success test but problem with alert
export function* shareList(action) {
    try {
        yield call(shareTodoListToUser, action.payload.idList, action.payload.userName);
        yield call(fetchAllLists);
        alert("Successfully shared!");
    }
    catch (e) {
        e.response.status === 409 ? alert("This list is already shared with the selected user.") : null;
    }
}

export function* saga() {
    yield safeTakeEvery([FETCH_DASHBOARD, SELECTED_MY_LISTS, SELECTED_SHARED_LISTS, CHANGE_SIZE, CHANGE_PAGINATION, CHANGE_SORT], fetchAllLists);
    yield safeTakeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield safeTakeEvery(ADD_DASHBOARD, addList);
    yield safeTakeLatest(UPDATE_CHECKBOX, updateSelectedTask);
    yield safeTakeEvery(DELETE_TASK, deleteTask);
    yield safeTakeEvery(ADD_TASK, addNewTask);
    yield safeTakeLatest(UPDATE_TITLE_DASHBOARD_SUCCESS, updateTitle);
    yield safeTakeLatest(UPDATE_TASK_NAME_SUCCESS, updateNameTask);
    yield safeTakeEvery([FETCH_DASHBOARD_SUCCESS, SEARCH], mutate);
    yield safeTakeEvery(SHARE_LIST, shareList);
}
