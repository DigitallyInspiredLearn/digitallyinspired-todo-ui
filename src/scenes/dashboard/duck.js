import { createAction, handleActions } from 'redux-actions';
import {
    call, put, select, delay,
} from 'redux-saga/effects';
import {
    getMyList,
    addDashboard,
    updateList,
    getSharedLists,
    shareTodoListToUser, disableTodoList,
} from '../../api/dashboard';

import {
    updateTask,
    addTask,
    deleteTask as deleteTaskApi,
} from '../../api/task';
import { safeTakeEvery, safeTakeLatest } from '../../helpers/saga';
import { getTagTaskKeys,
    getTags,
    addTag as addTagAPI,
    deleteTag as deleteTagAPI,
    addTagToTask as addTagToTaskAPI,
    removeTagFromTask as removeTagFromTaskAPI,
} from '../../api/tag';

export const INITIALIZE = 'dashboard/INITIALIZE';
export const FETCH_DASHBOARD = 'dashboard/FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'dashboard/FETCH_DASHBOARD_SUCCESS';

export const FETCH_TAG_TAKS_KEYS_SUCCESS = 'dashboard/FETCH_TAG_TAKS_KEYS_SUCCESS';

export const UPDATE_VIEW_LIST = 'dashboard/UPDATE_VIEW_LIST';
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

export const UPDATE_COMMENT = 'UPDATE_COMMENT';

export const FETCH_TAGS = 'tags/FETCH_TAGS';
export const FETCH_TAGS_SUCCESS = 'tags/FETCH_TAGS_SUCCESS';
export const ADD_TAG = 'tags/ADD_TAG';
export const ADD_TAG_TO_TASK = 'tags/ADD_TAG_TO_TASK';
export const DELETE_TAG = 'tags/DELETE_TAG';
export const VISIBLE_POPAP_ADD_TAG = 'tags/VISIBLE_POPAP_ADD_TAG';
export const REMOVE_TAG_FROM_TASK = 'tags/REMOVE_TAG_FROM_TASK';
export const GET_SELECTED_TAGS = 'tags/GET_SELECTED_TAGS';

export const actions = {
    initialize: createAction(INITIALIZE),
    changeSize: createAction(CHANGE_SIZE),
    changeSort: createAction(CHANGE_SORT),
    fetchDashboard: createAction(FETCH_DASHBOARD),
    fetchDashboardSuccess: createAction(FETCH_DASHBOARD_SUCCESS),
    fetchTagTaskKeysSuccess: createAction(FETCH_TAG_TAKS_KEYS_SUCCESS),
    updateViewLists: createAction(UPDATE_VIEW_LIST),
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
    updateComment: createAction(UPDATE_COMMENT),
    fetchTags: createAction(FETCH_TAGS),
    fetchTagsSuccess: createAction(FETCH_TAGS_SUCCESS),
    addTag: createAction(ADD_TAG),
    addTagToTask: createAction(ADD_TAG_TO_TASK),
    deleteTag: createAction(DELETE_TAG),
    visiblePopap: createAction(VISIBLE_POPAP_ADD_TAG),
    removeTagFromTask: createAction(REMOVE_TAG_FROM_TASK),
    getSelectedTags: createAction(GET_SELECTED_TAGS),
};

const initialState = {
    toDoBoardRaw: [],
    toDoBoard: [],
    currentPage: 0,
    viewList: 'my',
    search: '',
    pageSize: '4/page',
    totalElements: 0,
    sort: 'By id, low to high',
    tagTaskKeys: [],
    tags: [],
    selectedTags: [],
    stringIdSelectedTag: '&tagId=',
    visible: false,
};

export const reducer = handleActions({
    [CHANGE_SIZE]: (state, action) => ({ ...state, pageSize: action.payload, currentPage: 0 }),
    [CHANGE_SORT]: (state, action) => ({ ...state, sort: action.payload }),
    [CHANGE_PAGINATION]: (state, action) => ({ ...state, currentPage: action.payload }),
    [SEARCH]: (state, action) => ({ ...state, search: action.payload }),
    [FETCH_DASHBOARD_SUCCESS]: (state, action) => ({
        ...state,
        toDoBoardRaw: action.payload.toDoBoardRaw,
        totalElements: action.payload.totalElements,
        totalPages: action.payload.totalPages,
    }),
    [FETCH_TAG_TAKS_KEYS_SUCCESS]: (state, action) => ({ ...state, tagTaskKeys: action.payload }),
    [MUTATE_SUCCESS]: (state, action) => ({ ...state, toDoBoard: action.payload }),
    [UPDATE_VIEW_LIST]: (state, action) => ({ ...state, viewList: action.payload }),
    [FETCH_TAGS_SUCCESS]: (state, action) => ({ ...state, tags: action.payload }),
    [GET_SELECTED_TAGS]: (state, action) => ({ ...state, selectedTags: action.payload }),
    [VISIBLE_POPAP_ADD_TAG]: state => ({ ...state, visible: !state.visible }),
}, initialState);

export const getDashboard = state => state.dashboard;
// unsuccessful test
export const getSorting = (sort) => {
    
    let sortValue;
    switch (sort) {
        case 'By id, low to high':
            sortValue = 'id,asc';
            break;
        case 'By id, high to low':
            sortValue = 'id,desc';
            break;
        case 'By Name, a - Z':
            sortValue = 'todoListName,asc';
            break;
        case 'By Name, Z - a':
            sortValue = 'todoListName,desc';
            break;
        case 'By Created Date, low to high':
            sortValue = 'createdDate,asc';
            break;
        case 'By Created Date, high to low':
            sortValue = 'createdDate,desc';
            break;
        case 'By Modified Date, low to high':
            sortValue = 'modifiedDate,asc';
            break;
        case 'By Modified Date, high to low':
            sortValue = 'modifiedDate,desc';
            break;
        default:
            sortValue = 'todoListName,asc';
    }
    return sortValue;
};

export const getPageSize = (pageSize) => {
    let pageValue;
    switch (pageSize) {
        case '4/page':
            pageValue = 4;
            break;
        case '8/page':
            pageValue = 8;
            break;
        case '16/page':
            pageValue = 16;
            break;
        default:
            pageValue = 4;
    }
    return pageValue;
};

export function* fetchAllLists() {
    const {
        viewList, pageSize, currentPage, sort, selectedTags,
    } = yield select(state => state.dashboard);
    const sortValue = getSorting(sort);
    const pageValue = getPageSize(pageSize);
    const keys = (yield call(getTagTaskKeys, currentPage, pageValue, sortValue)).data;
    yield put(actions.fetchTagTaskKeysSuccess(keys));
        if (viewList === 'my') {
        const res = yield call(getMyList, currentPage, pageValue, sortValue, 'ACTIVE', selectedTags);
        yield put(actions.fetchDashboardSuccess({
            toDoBoardRaw: res.data.content,
            totalElements: res.data.totalElements,
            totalPages: res.data.totalPages,
        }));
    } else {
        const res = yield call(getSharedLists, currentPage, pageValue, sortValue);
        const shared = res.data.content.map(l => ({ ...l, shared: true }));
        yield put(actions.fetchDashboardSuccess({
            toDoBoardRaw: shared,
            totalElements: res.data.totalElements,
            totalPages: res.data.totalPages,
        }));
    }
}

export const getToDoBoardFiltered = id => state => state.dashboard.toDoBoardRaw.find(l => l.id === id);

export function* updateTitle(action) {
    const { payload: { newTitle, id } } = action;
    const list = yield select(getToDoBoardFiltered, id);
    const updatedList = { ...list, todoListName: newTitle, comment: '' };
    yield call(updateList, id, updatedList);
    yield call(fetchAllLists);
}

export function* updateComment(action) {
    const { payload: { id, title, newComment } } = action;
    const list = yield select(getToDoBoardFiltered, id);
    const updatedList = { ...list, todoListName: title, comment: newComment };
    yield call(updateList, id, updatedList);
    yield call(fetchAllLists);
}

export function* updateSelectedTask(action) {
    yield call(updateTask, action.payload.idTask, {
        body: action.payload.nameTask,
        isComplete: !action.payload.selected,
        priority: action.payload.priority,
        durationTime: action.payload.durationTime,
    });
    yield delay(100);
    yield call(fetchAllLists);
}

export function* updateNameTask(action) {
    const {
        payload: {
            idTask, newTaskName, selected, priority,
        },
    } = action;
    yield call(updateTask, idTask, {
        body: newTaskName || 'New value',
        priority,
        isComplete: selected,
    });
    yield call(fetchAllLists);
}

export function* deleteDashboard(action) {
    yield call(disableTodoList, action.payload.id);
    yield call(fetchAllLists);
}

export function* deleteTask(action) {
    yield call(deleteTaskApi, action.payload.idTask);
    yield call(fetchAllLists);
}

export function* addNewTask(action) {
    yield call(addTask, action.payload.idDashboard,
        { body: action.payload.nameTask, priority: action.payload.priority, isComplete: false });
    yield call(fetchAllLists);
}

export function* addList(action) {
    yield call(addDashboard, action.payload);
    yield call(fetchAllLists);
}

// success test but problem with alert
export function* shareList(action) {
    try {
        yield call(shareTodoListToUser, action.payload.idList, action.payload.userName);
        yield call(fetchAllLists);
        // alert('Successfully shared!');
    } catch (e) {
        // e.response.status === 409 ? alert('This list is already shared with the selected user.') : null;
    }
}

// unsuccessful tests
export const getMutateList = (toDoBoardRaw, search) => (
    toDoBoardRaw && toDoBoardRaw.filter(
        list => list.todoListName.toLowerCase().includes(search.toLowerCase()),
    )
);
export function* mutate() {
    const { toDoBoardRaw, search } = yield select(getDashboard);
    yield put(actions.mutateSuccessDashboard(getMutateList(toDoBoardRaw, search)));
}

export function* fetchTags() {
    const tags = (yield call(getTags)).data;
    yield put(actions.fetchTagsSuccess(tags));
}

export function* initialize() {
    yield call(fetchTags);
    yield call(fetchAllLists);
}

export function* addTag(action) {
    const { payload: { tagName, color } } = action;
    yield call(addTagAPI, { tagName, color });
    yield call(fetchTags);
}

export function* deleteTag(action) {
    const { payload: { id } } = action;
    yield call(deleteTagAPI, id);
    yield call(fetchTags);
}

export function* addTagToTask(action) {
    const { payload: { idTask, idTag } } = action;
    yield call(addTagToTaskAPI, idTag, idTask);
    yield call(fetchTags);
}

export function* removeTagFromTask(action) {
    const { payload: { idTask, idTag } } = action;
    yield call(removeTagFromTaskAPI, idTag, idTask);
    yield call(fetchTags);
}

export function* getSelectedTegInString() {
    yield call(fetchAllLists);
}

export function* saga() {
    yield safeTakeLatest([INITIALIZE, FETCH_TAGS], initialize);
    yield safeTakeEvery([
        FETCH_DASHBOARD, UPDATE_VIEW_LIST, CHANGE_SIZE, CHANGE_PAGINATION, CHANGE_SORT,
    ], fetchAllLists);
    yield safeTakeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield safeTakeEvery(ADD_DASHBOARD, addList);
    yield safeTakeLatest(UPDATE_CHECKBOX, updateSelectedTask);
    yield safeTakeEvery(DELETE_TASK, deleteTask);
    yield safeTakeEvery(ADD_TASK, addNewTask);
    yield safeTakeLatest(UPDATE_TITLE_DASHBOARD_SUCCESS, updateTitle);
    yield safeTakeLatest(UPDATE_COMMENT, updateComment);
    yield safeTakeLatest(UPDATE_TASK_NAME_SUCCESS, updateNameTask);
    yield safeTakeEvery([FETCH_DASHBOARD_SUCCESS, SEARCH], mutate);
    yield safeTakeEvery(SHARE_LIST, shareList);
    yield safeTakeEvery(ADD_TAG, addTag);
    yield safeTakeEvery(ADD_TAG_TO_TASK, addTagToTask);
    yield safeTakeEvery(DELETE_TAG, deleteTag);
    yield safeTakeEvery(REMOVE_TAG_FROM_TASK, removeTagFromTask);
    yield safeTakeEvery(GET_SELECTED_TAGS, getSelectedTegInString);
}
