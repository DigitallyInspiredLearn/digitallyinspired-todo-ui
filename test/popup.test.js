import { actions, reducer } from '../src/scenes/popup/duck';

const initialState = {
    users: [],
    search: '',
};

describe('Popup test', () => {
    it('SEARCH_USERS test', () => {
        const action = actions.searchUser('lk');
        const expected = {
            ...initialState,
            search: 'lk',
        };
        const prevState2 = {
            ...initialState,
            search: 'null'
        };
        const action2 = actions.searchUser('mama');
        const expected2 = {
            ...initialState,
            search: 'mama',
        };
        expect(reducer(initialState, action)).toEqual(expected);
        expect(reducer(prevState2, action2)).toEqual(expected2);
    });
    it('FETCH_USERS test', () => {
        const users = ['Daria', 'Mila'];
        const action = actions.fetchUser(users);
        const expected = {
            ...initialState,
            users: ['Daria', 'Mila'],
        };
        const prevState2 = {
            ...initialState,
            users: ['Maria']
        };
        const action2 = actions.fetchUser('Lilia');
        const expected2 = {
            ...initialState,
            users: 'Lilia',
        };
        expect(reducer(initialState, action)).toEqual(expected);
        expect(reducer(prevState2, action2)).toEqual(expected2);
    });
});

