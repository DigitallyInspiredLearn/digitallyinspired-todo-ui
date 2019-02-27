import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { mainReducer } from './reducer';
import { saga as followSaga } from '../scenes/header/settings/followUser/duck';
import { saga as listSaga } from '../scenes/list/duck';
import { saga as popupSaga } from '../scenes/popup/duck';
import loginPageSaga from '../scenes/login/duck';
import { saga as profileSaga } from '../scenes/header/settings/profile/duck';
import { saga } from '../scenes/dashboard/duck';
import { saga as subscribeSaga } from '../scenes/header/settings/subscribes/duck';

const persistConfig = {
    key: 'app',
    whitelist: ['auth'],
    storage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        saga(),
        listSaga(),
        loginPageSaga(),
        popupSaga(),
        followSaga(),
        profileSaga(),
        subscribeSaga(),
    ]);
}

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
