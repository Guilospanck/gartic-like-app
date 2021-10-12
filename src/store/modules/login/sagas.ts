import { all, call, takeLatest, put } from "@redux-saga/core/effects"
import { ActionTypes } from "./actionTypes"
import { loginSuccess, loginFailure } from './actions'
import { LoginRequest } from "./types";

import axios from '../../../services/axios'

function* loginRequest({ payload }: LoginRequest) {
  try {
    const url = process.env.LOGIN
    const { username, password } = payload

    const { data } = yield call(axios.post, url, { name: username, password })
    
    localStorage.setItem('token', data.token)

    yield put(
      loginSuccess()
    )
  } catch (e) {
    yield put(
      loginFailure({
        error: e.message
      })
    )
  }
}

function* loginSaga() {
  yield all([
    takeLatest(ActionTypes.LOGIN_REQUEST, loginRequest),
  ])
}

export default loginSaga