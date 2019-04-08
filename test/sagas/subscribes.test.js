import {
    call, put, select, delay, takeEvery, fork, all, take,
} from 'redux-saga/effects';
import { safeTakeEvery, safeTakeLatest } from '../../src/helpers/saga';
import {
    followUser as followUserApi, searchUserByUsername, getFollowers,
} from '../../src/api/userController';
import { mutate, getSubscribe, getSubscribers } from '../../src/scenes/container/settings/subscribes/duck';

describe('Follow user saga test', () => {
    const generatorMutate = mutate();
    it('Fetch user call saga test', () => {
        expect(generatorMutate.next().value).toEqual(select(getSubscribe));
    });

    const res = {
        data: [
            {
                username: 'rostiktest',
                name: 'test',
                email: 'test@test.test',
                gravatarUrl: 'https://www.gravatar.com/avatar/dd46a756faad4727fb679320751f6dea',
            },
        ],
    };

    const generatorGetSubscribers = getSubscribers();

    it('Fetch user call saga test', () => {
        expect(generatorGetSubscribers.next().value).toEqual(call(getFollowers));
    });

    it('Fetch user put saga test', () => {
        expect(generatorGetSubscribers.next(res).value).toEqual(put({
            type: 'subscribeReducer/FETCH_SUBSCRIBERS_SUCCESS',
            payload: res.data,
        }));
    });
});
