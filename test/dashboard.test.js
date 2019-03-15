import { actions, reducer } from '../src/scenes/dashboard/duck';

const initialState = {
    data: {
        todoTaskName: 'List',
        tasks: [
            {
                id: 12,
                body: 'Task',
            },
        ]
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

describe('Dashboard test', () => {
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
        const action = actions.updateTaskName({idTask: 12, newTaskName: 'Task'});
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
        const action2 = actions.updateTaskName({idTask: 1, newTaskName: 'NewTask'});
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
