import { call, select, put } from 'redux-saga/effects';
import { searchUserByUsername } from '../src/api/userController';
import { fetchUser, getUser } from '../src/scenes/popup/duck';

describe('Popup saga test fetchUser', () => {
    const action = {
        payload: 'lololo',
    };
    const res = ['lololo', 'mmm'];
    const array = ['User is not found!'];
    const generator = fetchUser(action);

    it('Select getUser', () => {
        expect(generator.next().value).toEqual(select(getUser));
    });

    it('Call searchUserByUsername', () => {
        expect(generator.next(action).value).toEqual(call(searchUserByUsername, action.payload));
    });
    // it('Put fetchUser', () => {
    //     expect(generator.next(array).value)
    //         .toEqual(
    //             put({
    //                 type: 'popup/FETCH_USERS',
    //                 payload: array,
    //             }),
    //         );
    // });
    // it('Saga done', () => {
    //     expect(generator.next().done).toBe(true);
    // });
});
