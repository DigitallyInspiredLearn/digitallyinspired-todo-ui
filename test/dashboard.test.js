import {
    call, put, select, delay,
} from 'redux-saga/effects';
import {
    fetchAllLists,
    deleteDashboard,
    updateTitle,
    updateSelectedTask,
    updateNameTask,
    deleteTask,
    addNewTask,
    addList,
    mutate,
    shareList,
    getDashboard,
    getToDoBoardFiltered,
} from '../src/scenes/dashboard/duck';
import {
    addDashboard, deleteList, getMyList, getSharedLists, shareTodoListToUser, updateList,
} from '../src/api/dashboard';
import { addTask, deleteTask as deleteTaskApi, updateTask } from '../src/api/task';

describe('shareList  test', () => {
    const action = { payload: { idList: 69, userName: 'anna1206a' } };
    const generator = shareList(action);
    it('shareTodoListToUser  call', () => {
        expect(generator.next(action).value).toEqual(call(
            shareTodoListToUser, action.payload.idList, action.payload.userName,
        ));
    });
    it('fetchAllLists shareList call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('addList  test', () => {
    const action = { payload: { todoListName: 'DashboardList', tasks: [{ body: '', isComplete: false }] } };
    const generator = addList(action);
    it('addList  call', () => {
        expect(generator.next(action).value).toEqual(call(addDashboard, action.payload));
    });
    it('fetchAllLists addList call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('addNewTask  test', () => {
    const action = { payload: { idDashboard: 69, nameTask: 'bjkk' } };
    const generator = addNewTask(action);
    it('addNewTask  call', () => {
        expect(generator.next(action).value).toEqual(call(
            addTask,
            action.payload.idDashboard,
            { body: action.payload.nameTask, isComplete: false },
        ));
    });
    it('fetchAllLists addNewTask call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('deleteTask  test', () => {
    const action = { payload: { idTask: 131 } };
    const generator = deleteTask(action);
    it('deleteTask  call', () => {
        expect(generator.next(action).value).toEqual(call(
            deleteTaskApi, action.payload.idTask,
        ));
    });
    it('fetchAllLists deleteTask call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('updateNameTask  test', () => {
    const action = { payload: { idTask: 1, newTaskName: '' } };
    const generator = updateNameTask(action);
    it('updateNameTask  call', () => {
        expect(generator.next(action).value).toEqual(call(
            updateTask, action.payload.idTask, {
                body: action.payload.newTaskName || 'New value',
                isComplete: action.payload.selected,
            },
        ));
    });
    it('fetchAllLists updateNameTask call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('deleteDashboard  test', () => {
    const action = { payload: { id: 1 } };
    const generator = deleteDashboard(action);
    it('deleteDashboard  call', () => {
        expect(generator.next().value).toEqual(call(
            deleteList, action.payload.id,
        ));
    });
    it('fetchAllLists deleteDashboard call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('updateSelectedTask  test', () => {
    const action = { payload: { idTask: 1 } };
    const generator = updateSelectedTask(action);
    it('delay test updateSelectedTask', () => {
        expect(generator.next().value).toEqual(delay(150));
    });
    it('updateSelectedTask  call', () => {
        expect(generator.next(action).value).toEqual(call(
            updateTask, action.payload.idTask, {
                body: action.payload.nameTask,
                isComplete: !action.payload.selected,
            },
        ));
    });
    it('fetchAllLists updateNameTask Selectedcall', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

//-----------------------------------------------------------
// describe('fetchAllLists saga test', () => {
//     const generator = fetchAllLists();
//     const action = { currentPage: 0, pageSize: 4, sortValue: 'todoListName,asc' };
//     it('Select getDashboard', () => { expect(generator.next().value).toEqual(select(getDashboard)); });
//     it('Call getMyList', () => {
//         expect(
//             generator.next(
//             ).value,
//         ).toEqual(call(getMyList, action.currentPage, action.pageSize, action.sortValue));
//     });
//     it('Put FETCH_MY_LISTS_SUCCESS', () => {
//         expect(
//             generator.next({}).value,
//         ).toEqual(put({
//             type: 'dashboard/FETCH_MY_LISTS_SUCCESS',
//             payload: {
//                 myLists: [
//                 ],
//                 countElements: 2,
//                 countPages: 1,
//             },
//         }));
//     });
//     it('Call getSharedLists', () => { expect(generator.next({}).value).toEqual(call(getSharedLists)); });
//     it('Put FETCH_SHARED_LISTS_SUCCESS', () => {
//         expect(generator.next({ sharedList: [] }).value).toEqual(
//             put({
//                 type: 'dashboard/FETCH_SHARED_LISTS_SUCCESS',
//                 payload: {
//                     sharedList: [],
//                 },
//             }),
//         );
//     });
//     it('Put FETCH_DASHBOARD_SUCCESS', () => {
//         expect(
//             generator.next({
//                 toDoBoardRaw: [],
//             }).value,
//         ).toEqual(
//             put({
//                 type: 'dashboard/FETCH_DASHBOARD_SUCCESS',
//                 payload: {
//                     toDoBoardRaw: [
//                     ],
//                 },
//             }),
//         );
//     });
//     it('Saga done', () => {
//         expect(generator.next().done).toBe(true);
//     });
// });
//
// describe('updateTitleDashboard  test', () => {
//     const action = { payload: { newTitle: 'new', id: 1 } };
//     const generator = updateTitle(action);
//     it('updateTitleDashboard  select', () => {
//         expect(generator.next().value).toEqual(select(
//             getToDoBoardFiltered(action.payload.id),
//         ));
//     });
//     it('updateList  call', () => {
//         expect(generator.next(action.payload.id, action.payload.newTitle).value).toEqual(call(
//             updateList, action.payload.id, action.payload.newTitle,
//         ));
//     });
//     it('fetchAllLists updateTitleDashboard call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
//     it('Saga done', () => { expect(generator.next().done).toBe(true); });
// });
//
// describe('mutate  test', () => {
//     const generator = mutate();
//     const res = [{
//         createdBy: 58,
//         createdDate: 1554110943375,
//         id: 69,
//         modifiedBy: 58,
//         modifiedDate: 1554110943470,
//         tasks:[
//             {id: 118, body: "hlhli", isComplete: false},
//         ],
//         todoListName: "DashboardList"}].filter();
//     it('mutate  select', () => { expect(generator.next().value).toEqual(select(getDashboard)); });
//     it('put dashboard/MUTATE_SUCCESS', () => {
//         expect(
//             generator.next(res).value
//         ).toEqual(
//             put({
//                 type: 'dashboard/MUTATE_SUCCESS',
//                 payload: res,
//             }),
//         );
//     });
//     it('Saga done', () => {expect(generator.next().done).toBe(true);});
// });
