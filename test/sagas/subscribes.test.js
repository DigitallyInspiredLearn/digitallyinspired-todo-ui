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

    
});
