import {
    call, put, select, delay, takeEvery, fork, all, take,
} from 'redux-saga/effects';
import { safeTakeEvery, safeTakeLatest } from '../../src/helpers/saga';
import {
    followUser as followUserApi, searchUserByUsername,
} from '../../src/api/userController';
import { mutate, getSubscribe } from '../../src/scenes/container/settings/subscribes/duck';

describe('Follow user saga test', () => {
    const generatorMutate = mutate();
    it('Fetch user call saga test', () => {
        expect(generatorMutate.next().value).toEqual(select(getSubscribe));
    });

    const res = [
        {
            username: 'rostiktest',
            name: 'test',
            email: 'test@test.test',
            gravatarUrl: 'https://www.gravatar.com/avatar/dd46a756faad4727fb679320751f6dea',
        },
    ];

    // it('Fetch user put saga test', () => {
    //     expect(generatorMutate.next(res).value).toEqual(put({
    //         type: 'settings/FETCH_CURRENT_USER_SUCCESS',
    //         payload: res,
    //     }));
    // });
});
