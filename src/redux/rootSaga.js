import { takeLatest, call, all, put, delay } from "redux-saga/effects";
import userConstants from './userConstants';
import { userService } from "../_services/userService";

import {userInfoSuccess,
        userInfoFail,
        officeInfoSuccess,
        officeInfoFail,
        registerUserSuccess,
        registerUserFail} from "./userActions";

export function* userInfoAsync(user) {
  const{ payload } = user;
  console.log('user user', JSON.stringify(payload))
 try {
    const response = yield call(userService.register, { payload });
    console.log('response', response)
    if (response.status === 201 && response.status < 300) {
      console.log('response', response)
      yield put(userInfoSuccess(response));
    }
  } catch (error) {
    yield put(userInfoFail(error.response));
  }
}

export function* userInfo() {
  yield takeLatest("USERS_INFO_REQUEST", userInfoAsync);
}

export function* officeInfoAsync(user) {
  const{ payload } = user;
  console.log('user user', JSON.stringify(payload))
 try {
    const response = yield call(userService.register, { payload });
    console.log('response', response)
    if (response.status === 201 && response.status < 300) {
      console.log('response', response)
      yield put(officeInfoSuccess(response));
    }
  } catch (error) {
    yield put(officeInfoFail(error.response));
  }
}

export function* officeInfo() {
  yield takeLatest("OFFICE_INFO_REQUEST", officeInfoAsync);
}

export function* registerAsync(user) {
  const{ payload } = user;
  console.log('user user', JSON.stringify(payload))
 try {
    const response = yield call(userService.register, { payload });
    console.log('response', response)
    if (response.status === 201 && response.status < 300) {
      console.log('response', response)
      yield put(registerUserSuccess(response));
    }
  } catch (error) {
    yield put(registerUserFail(error.response));
  }
}

export function* registerUser() {
  yield takeLatest("USERS_REGISTER_REQUEST", registerAsync);
}

export default function* rootSaga() {
  yield all([
    call(officeInfo),
    call(userInfo),
    call(registerUser)
  ]);
}