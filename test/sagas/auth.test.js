import {
    call, put, select, delay,
} from 'redux-saga/effects';
import { authorization as authorizationApi, refreshToken } from '../../src/api/auth';
import { authorization, refreshTokenProcess, setDefaultApiToken, rehydrateSaga, logout, LOGIN_SUCCESS, getToken } from '../../src/scenes/account/authorization/duck';


describe('Auth saga test', () => {
    const action = {
        type: 'LOGIN_SUCCESS',
        payload: {
            password: 'rostik',
            usernameOrEmail: 'rostik',
        },
    };

    const generatorAuth = authorization(action);

    it('Auth saga test', () => {
        expect(generatorAuth.next().value).toEqual(call(authorizationApi, action.payload));
    });

    // const token = {
    //     data: {
    //         accessToken: 'jdkskdkjskjkjsjkdsjkds',
    //     },
    // };

    const res = {
        data: {
            user: action.payload.usernameOrEmail,
            accessToken: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU0NzE3ODcwLCJleHAiOjE1NTQ3MTg3NzB9.eGhIZzp6BolVT1W6s6Mv0BkgukgTJbnOI-h__j4aglCHfRfyqF61vMo3piHI5UWeyP83AwP9P85nipwVxbsQUA',
        },
    };

    it('Auth put saga test', () => {
        expect(generatorAuth.next(res).value).toEqual(put({
            type: 'LOGIN_SUCCESS',
            payload: {
                user: 'rostik',
                token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU0NzE3ODcwLCJleHAiOjE1NTQ3MTg3NzB9.eGhIZzp6BolVT1W6s6Mv0BkgukgTJbnOI-h__j4aglCHfRfyqF61vMo3piHI5UWeyP83AwP9P85nipwVxbsQUA',
            },
        }));
    });

    it('Auth saga test', () => {
        expect(generatorAuth.next().value).toEqual(call(setDefaultApiToken, res.data.accessToken));
    });

    it('Saga done', () => {
        expect(generatorAuth.next().done).toBe(true);
    });

    const generatorRefreshToken = refreshTokenProcess();

    it('Auth refresh token saga test', () => {
        expect(generatorRefreshToken.next().value).toEqual(delay(60000));
    });

    it('Auth refresh token call saga test', () => {
        expect(generatorRefreshToken.next().value).toEqual(call(refreshToken));
    });

    const { token } = {
        token: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU0NzE3ODcwLCJleHAiOjE1NTQ3MTg3NzB9.eGhIZzp6BolVT1W6s6Mv0BkgukgTJbnOI-h__j4aglCHfRfyqF61vMo3piHI5UWeyP83AwP9P85nipwVxbsQUA',
        user: 'rostik',
    };

    // const { data: { accessToken } } = 'ghfjhgfhfjgfg';

    // it('Auth refresh token call saga test', () => {
    //     expect(generatorRefreshToken.next(accessToken).value).toEqual(call(setDefaultApiToken, accessToken));
    // });

    // it('Auth refresh token put saga test', () => {
    //     expect(generatorRefreshToken.next().value).toEqual(put({
    //         type: 'REFRESH_TOKEN',
    //     }));
    // });

    const generatorRehydrate = rehydrateSaga();

    it('Auth refresh token select saga test', () => {
        expect(generatorRehydrate.next().value).toEqual(select(getToken));
    });

    // it('Auth refresh token call saga test', () => {
    //     expect(generatorRehydrate.next().value).toEqual(call(setDefaultApiToken, token));
    // });

});
