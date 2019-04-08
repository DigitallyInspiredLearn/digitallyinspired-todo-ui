import {
    call, put, select, delay, takeEvery, fork, all, take,
} from 'redux-saga/effects';
import { safeTakeEvery, safeTakeLatest } from '../../src/helpers/saga';
import {
    followUser as followUserApi, searchUserByUsername,
} from '../../src/api/userController';
import {
    fetchUsersNames, mutate, getFollowUser, getUsername, followUsers,
} from '../../src/scenes/container/settings/followUser/duck';

describe('Follow user saga test', () => {
    const generatorFetchUserNames = fetchUsersNames();
    it('Fetch user call saga test', () => {
        expect(generatorFetchUserNames.next().value).toEqual(call(searchUserByUsername, ' '));
    });

    const res = {
        data: {
            email: 'test@ssss.ru',
            gravatarUrl: 'https://www.gravatar.com/avatar/d77228c264655f9edef0809a19958f6f',
            name: 'test',
            username: 'testtest',
        },
    };

    it('Fetch user put saga test', () => {
        expect(generatorFetchUserNames.next(res).value).toEqual(put({
            type: 'followUserReducer/FETCH_USERS',
            payload: res.data,
        }));
    });

    it('Saga done', () => {
        expect(generatorFetchUserNames.next().done).toBe(true);
    });

    const action = {
        type: 'followUserReducer/FOLLOW_USER',
        payload: 'test',
    };

    const r = {
        data: {
            message: 'Success',
        },
    };

    const generatorFollowUsers = followUsers(action);

    it('Follow user call saga test', () => {
        expect(generatorFollowUsers.next().value).toEqual(call(followUserApi, action.payload));
    });

    it('Follow user put saga test', () => {
        expect(generatorFollowUsers.next(r).value).toEqual(put({
            type: 'followUserReducer/GET_MESSAGE_ON_ACCESS_FOLLOWING',
            payload: r.data.message,
        }));
    });

    it('Saga done', () => {
        expect(generatorFollowUsers.next().done).toBe(true);
    });

    const generatorMutate = mutate();

    it('Fetch follow user select saga test', () => {
        expect(generatorMutate.next().value).toEqual(select(getFollowUser));
    });

    // it('Fetch username select saga test', () => {
    //     expect(generatorMutate.next().value).toEqual(select(getUsername));
    // });
});
