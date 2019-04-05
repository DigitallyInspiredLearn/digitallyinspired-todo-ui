import {
    call, put, select, delay,
} from 'redux-saga/effects';
import {
    actions,
    reducer,
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

const initialState = {
    data: {
        todoTaskName: 'List',
        tasks: [
            {
                id: 12,
                body: 'Task',
            },
        ],
    },
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

describe('Dashboard redusers test', () => {
    it('CHANGE_SIZE test', () => {
        const action = actions.changeSize(10);
        const expected = {
            ...initialState,
            pageSize: 10,
        };
        const prevState2 = {
            ...initialState,
            currentPage: 10,
            pageSize: 8,
        };
        const action2 = actions.changeSize(7);
        const expected2 = {
            ...initialState,
            pageSize: 7,
            currentPage: 0,
        };
        expect(reducer(initialState, action)).toEqual(expected);
        expect(reducer(prevState2, action2)).toEqual(expected2);
    });
    it('CHANGE_SORT test', () => {
        const change1 = actions.changeSort('id,desc');
        const expected1 = {
            ...initialState,
            sort: 'id,desc',
        };
        const prevSortState = {
            ...initialState,
            sort: 'id,desc',
        };
        const change2 = actions.changeSort('todoListName,asc');
        const expected2 = {
            ...initialState,
            sort: 'todoListName,asc',
        };
        expect(reducer(initialState, change1)).toEqual(expected1);
        expect(reducer(prevSortState, change2)).toEqual(expected2);
    });
    it('SEARCH test', () => {
        const action = actions.search('kate');
        const expected = {
            ...initialState,
            search: 'kate',
        };
        const prevState2 = {
            ...initialState,
            search: 'null',
        };
        const action2 = actions.search('hello');
        const expected2 = {
            ...initialState,
            search: 'hello',
        };
        expect(reducer(initialState, action)).toEqual(expected);
        expect(reducer(prevState2, action2)).toEqual(expected2);
    });
    it('CHANGE_PAGINATION test', () => {
        const action = actions.changePagination(10);
        const expected = {
            ...initialState,
            currentPage: 10,
        };
        const prevState2 = {
            ...initialState,
            currentPage: 10,
        };
        const action2 = actions.changePagination(7);
        const expected2 = {
            ...initialState,
            currentPage: 7,
        };
        expect(reducer(initialState, action)).toEqual(expected);
        expect(reducer(prevState2, action2)).toEqual(expected2);
    });
    it('UPDATE_TASK_Name test', () => {
        const action = actions.updateTaskName({ idTask: 12, newTaskName: 'Task' });
        const expected = {
            ...initialState,
            data: {
                ...initialState.data,
                tasks: initialState.data.tasks.map(e => (e.id === 12
                    ? {
                        ...e, body: 'Task',
                    } : e)),
            },
        };
        const prevState2 = {
            ...initialState,
            data: {
                ...initialState.data,
                tasks: initialState.data.tasks.map(e => (e.id === 1
                    ? {
                        ...e, body: 'Test',
                    } : e)),
            },
        };
        const action2 = actions.updateTaskName({ idTask: 1, newTaskName: 'NewTask' });
        const expected2 = {
            ...initialState,
            data: {
                ...initialState.data,
                tasks: initialState.data.tasks.map(e => (e.id === 1
                    ? {
                        ...e, body: 'NewTask',
                    } : e)),
            },
        };
        expect(reducer(initialState, action)).toEqual(expected);
        expect(reducer(prevState2, action2)).toEqual(expected2);
    });
});

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

// describe('updateSelectedTask  test', () => {
//     const action = { payload: { idTask: 1 } };
//     const generator = updateSelectedTask(action);
//     it('delay test updateSelectedTask', () => {
//         expect(generator.next().value).toEqual(delay(150));
//     });
//     it('updateNameTask  call', () => {
//         expect(generator.next(action).value).toEqual(call(
//             updateTask, action.payload.idTask, {
//                 body: action.payload.nameTask,
//                 isComplete: !action.payload.selected,
//             },
//         ));
//     });
//     it('fetchAllLists updateNameTask Selectedcall', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
//     it('Saga done', () => { expect(generator.next().done).toBe(true); });
// });

describe('fetchAllLists saga test', () => {
    const generator = fetchAllLists();
    const action = { currentPage: 0, pageSize: 4, sortValue: 'todoListName,asc' };
    it('Select getDashboard', () => { expect(generator.next().value).toEqual(select(getDashboard)); });
    it('Call getMyList', () => {
        expect(
            generator.next([{
                currentPage: 0,
                pageSize: 4,
                sortValue: 'todoListName,asc',
            },
            ]).value,
        ).toEqual(call(getMyList, action));
    });
    it('Put FETCH_MY_LISTS_SUCCESS', () => {
        expect(
            generator.next({}).value,
        ).toEqual(put({
            type: 'dashboard/FETCH_MY_LISTS_SUCCESS',
            payload: {
                myLists: [
                ],
                countElements: 2,
                countPages: 1,
            },
        }));
    });
    it('Call getSharedLists', () => { expect(generator.next({}).value).toEqual(call(getSharedLists)); });
    it('Put FETCH_SHARED_LISTS_SUCCESS', () => {
        expect(generator.next({ sharedList: [] }).value).toEqual(
            put({
                type: 'dashboard/FETCH_SHARED_LISTS_SUCCESS',
                payload: {
                    sharedList: [],
                },
            }),
        );
    });
    it('Put FETCH_DASHBOARD_SUCCESS', () => {
        expect(
            generator.next({
                toDoBoardRaw: [],
            }).value,
        ).toEqual(
            put({
                type: 'dashboard/FETCH_DASHBOARD_SUCCESS',
                payload: {
                    toDoBoardRaw: [
                    ],
                },
            }),
        );
    });
    it('Saga done', () => {
        expect(generator.next().done).toBe(true);
    });
});

// describe('updateTitleDashboard  test', () => {
//     const action = { payload: { newTitle: 'new', id: 1 } };
//     const generator = updateTitle(action);
//     it('updateTitleDashboard  select', () => {
//         expect(generator.next().value).toEqual(select(
//             getToDoBoardFiltered(action.payload.id),
//         ));
//     });
//     it('updateList  call', () => {
//         expect(generator.next().value).toEqual(call(
//             updateList, action.payload.id, action.payload.newTitle,
//         ));
//     });
//     it('fetchAllLists updateTitleDashboard call', () => { expect(generator.next().value).toEqual(call(fetchAllLists)); });
//     it('Saga done', () => { expect(generator.next().done).toBe(true); });
// });

// export function* updateSelectedTask(action) {
//     yield delay(150);
//     yield call(updateTask, action.payload.idTask, {
//         body: action.payload.nameTask,
//         isComplete: !action.payload.selected,
//     });
//     yield call(fetchAllLists);
// }

// });


// describe('mutate  test', () => {
//     const generator = mutate();
//     it('mutate  select', () => {expect(generator.next().value).toEqual(select(getDashboard));});
//     it('put dashboard/MUTATE_SUCCESS', () => {
//         expect(
//             generator.next([{
//                 createdBy: 58,
//                 createdDate: 1554110943375,
//                 id: 69,
//                 modifiedBy: 58,
//                 modifiedDate: 1554110943470,
//                 tasks:[
//                     {id: 118, body: "hlhli", isComplete: false},
//                     {id: 117, body: "jhgwrgwr", isComplete: true},
//                     {id: 114, body: "bkjbl", isComplete: true},
//                     {id: 115, body: "bkjblj", isComplete: false},
//                     {id: 116, body: "мтуцолптуцл", isComplete: false},
//                     {id: 119, body: "guiuhol", isComplete: true},
//                 ],
//                 todoListName: "DashboardList"}]).value
//         ).toEqual(
//             put({
//                 type: 'dashboard/MUTATE_SUCCESS',
//                 payload: [{
//                     createdBy: 58,
//                     createdDate: 1554110943375,
//                     id: 69,
//                     modifiedBy: 58,
//                     modifiedDate: 1554110943470,
//                     tasks:[
//                         {id: 118, body: "hlhli", isComplete: false},
//                         {id: 117, body: "jhgwrgwr", isComplete: true},
//                         {id: 114, body: "bkjbl", isComplete: true},
//                         {id: 115, body: "bkjblj", isComplete: false},
//                         {id: 116, body: "мтуцолптуцл", isComplete: false},
//                         {id: 119, body: "guiuhol", isComplete: true},
//                     ],
//                     todoListName: "DashboardList"}],
//             }),
//         );
//     });
//     it('Saga done', () => {expect(generator.next().done).toBe(true);});
// });
