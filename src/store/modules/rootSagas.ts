import { all, fork } from 'redux-saga/effects'
import loginSaga from './login/sagas'

export function* rootSaga() {
  yield all([
    fork(loginSaga),
  ])
}