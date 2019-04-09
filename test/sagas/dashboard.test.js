import { call, put, select } from 'redux-saga/effects';
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
    getMutateList,
    getSorting, reducer, actions,
} from '../../src/scenes/dashboard/duck';
import {
    addDashboard, deleteList, getMyList, getSharedLists, shareTodoListToUser, updateList,
} from '../../src/api/dashboard';
import { addTask, deleteTask as deleteTaskApi, updateTask } from '../../src/api/task';

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
    it('updateSelectedTask  call', () => {
        expect(generator.next(action).value).toEqual(call(
            updateTask, action.payload.idTask, {
                body: action.payload.nameTask,
                isComplete: !action.payload.selected,
            },
        ));
    });
    it('fetchAllLists updateNameTask Selectedcall',
        () => expect(generator.next().value).toEqual(call(fetchAllLists)));
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('updateTitleDashboard  test', () => {
    const action = { payload: { newTitle: '', id: 1 } };
    const list = { id: 1, todoListName: 'New value' };

    const generator = updateTitle(action);
    it('updateTitleDashboard  select', () => {
        expect(generator.next(action).value).toEqual(select(
            getToDoBoardFiltered, action.payload.id,
        ));
    });
    it('updateList  call', () => {
        expect(generator.next(list).value).toEqual(call(
            updateList, action.payload.id, list,
        ));
    });
    it('fetchAllLists updateTitleDashboard call', () => {
        expect(generator.next().value).toEqual(call(fetchAllLists));
    });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});

describe('fetchAllLists saga test', () => {
    const generator = fetchAllLists();
    const data = {
        selectedMy: true,
        selectedShared: true,
        pageSize: 4,
        currentPage: 0,
        sort: 'By id, low to high',
        sortValue: 'id,asc',
        myList: [{ id: 1, name: 'name' }],
        sharedList: [{ id: 1, name: 'shared' }],
    };

    it('Select getDashboard', () => {
        expect(generator.next().value).toEqual(select(getDashboard));
    });
    it('Call getMyList', () => {
        expect(
            generator.next(data).value,
        ).toEqual(call(
            getMyList, data.currentPage, data.pageSize, data.sortValue,
        ));
    });
    it('Put FETCH_MY_LISTS_SUCCESS', () => {
        expect(
            generator.next(data).value,
        ).toEqual(put({
            type: 'dashboard/FETCH_MY_LISTS_SUCCESS',
            payload: {
                myLists: data.name,
                countElements: data.totalElements,
                countPages: data.currentPage,
            },
        }));
    });
    it('Call getSharedLists',
        () => {
            expect(generator.next(data).value).toEqual(call(getSharedLists));
        });
    it('Put FETCH_SHARED_LISTS_SUCCESS', () => {
        expect(generator.next(data).value).toEqual(
            put({
                type: 'dashboard/FETCH_SHARED_LISTS_SUCCESS',
                payload: {
                    sharedList: data.sharedList,
                },
            }),
        );
    });
    it('Put FETCH_DASHBOARD_SUCCESS', () => {
        expect(
            generator.next(data.myList).value,
        ).toEqual(
            put({
                type: 'dashboard/FETCH_DASHBOARD_SUCCESS',
                payload: {
                    toDoBoardRaw: data.myList,
                },
            }),
        );
    });
    it('Saga done', () => {
        expect(generator.next().done).toBe(true);
    });
});

describe('mutate  test', () => {
    const generator = mutate();
    const allList = getMutateList(
        [
            { id: 1, todoListName: 'value' },
            { id: 1, todoListName: 'wwwv' },
        ],
        'va',
    );

    it('mutate  select', () => {
        expect(generator.next().value).toEqual(select(getDashboard));
    });
    it('put dashboard/MUTATE_SUCCESS', () => {
        expect(generator.next(allList).value).toEqual(
            put({
                type: 'dashboard/MUTATE_SUCCESS',
                payload: allList,
            }),
        );
    });
    it('Saga done', () => { expect(generator.next().done).toBe(true); });
});
