import { actions, reducer } from '../src/scenes/dashboard/duck';

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
});
