import { takeLatest, put, all, call } from 'redux-saga/effects';

import { USER_ACTION_TYPES } from './user-types';
import { signInSuccess, signInFaild } from './user-action';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from '../../utils/firebase';

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFaild(error));
  }
}

export function* isUserAuthenticaticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFaild(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION,
    isUserAuthenticaticated
  );
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
