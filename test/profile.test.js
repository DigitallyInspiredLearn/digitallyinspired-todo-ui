import {
    call, put, select, delay,
} from 'redux-saga/effects';
import {
    getCurrentUser, editProfile as editProfileApi, deleteProfile as deleteProfileApi,
} from '../src/api/userController';
import { actions, reducer } from '../src/scenes/container/settings/profile/duck';
import { fetchUser, editProfile, deleteProfile } from '../src/scenes/container/settings/profile/duck';
// import fetchUser from '../src/scenes/container/settings/profile/duck'

const initialState = {
    currentUser: undefined,
};

describe('Profile test', () => {
    it('FETCH_CURRENT_USER_SUCCESS test', () => {
        const action = actions.fetchCurrentUserSuccess({
            username: 'rostik',
            name: 'Rostik',
            email: 'rostik@rostik.ru',
            gravatarUrl: 'https://www.gravatar.com/avatar/a2a0c92d5d0209e92370f11ef4b1b828',
        });
        const expected = {
            ...initialState,
            currentUser: {
                username: 'rostik',
                name: 'Rostik',
                email: 'rostik@rostik.ru',
                gravatarUrl: 'https://www.gravatar.com/avatar/a2a0c92d5d0209e92370f11ef4b1b828',
            },
        };
        const previousState = {
            ...initialState,
            currentUser: {
                username: 'rostik',
                name: 'Rostik',
                email: 'rostik@rostik.ru',
                gravatarUrl: 'https://www.gravatar.com/avatar/a2a0c92d5d0209e92370f11ef4b1b828',
            },
        };
        const action1 = actions.fetchCurrentUserSuccess({
            username: 'user',
            name: 'username',
            email: 'user@user.ru',
            gravatarUrl: 'https://www.gravatar.com/avatar/a2a0c92d5d0209e92370f11ef4b1b828',
        });
        const expected1 = {
            ...initialState,
            currentUser: {
                username: 'user',
                name: 'username',
                email: 'user@user.ru',
                gravatarUrl: 'https://www.gravatar.com/avatar/a2a0c92d5d0209e92370f11ef4b1b828',
            },
        };
        expect(reducer(initialState, action)).toEqual(expected);
        expect(reducer(previousState, action1)).toEqual(expected1);
    });
});

describe('Profile saga test', () => {
    const generatorFetch = fetchUser();
    it('Fetch user call saga test', () => {
        expect(generatorFetch.next().value).toEqual(call(getCurrentUser));
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
        expect(generatorFetch.next(res).value).toEqual(put({
            type: 'settings/FETCH_CURRENT_USER_SUCCESS',
            payload: res.data,
        }));
    });

    const action = {
        payload: {
            email: 'test@ssss.ru',
            name: 'test',
            password: '123456',
            username: 'testtest',
        },
    };

    const generatorEdit = editProfile(action);

    it('Edit profile saga test', () => {
        expect(generatorEdit.next(action).value).toEqual(call(editProfileApi, action.payload));
    });

    it('Fetch user call saga test', () => {
        expect(generatorEdit.next().value).toEqual(call(fetchUser));
    });

    it('Saga done', () => {
        expect(generatorEdit.next().done).toBe(true);
    });

    // const generatorDeleteProfile = deleteProfile();
    // it('Delete profile call saga test', () => {
    //     expect(generatorDelete.next().value).toEqual(call(fetchUser));
    // });
});
