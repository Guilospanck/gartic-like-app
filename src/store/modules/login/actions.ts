import { ActionTypes } from "./actionTypes"
import {
  LoginRequest, LoginRequestPayload,
  LoginSuccess,
  LoginFailure, LoginFailurePayload
} from './types'

export const loginRequest = (payload: LoginRequestPayload): LoginRequest => ({
  type: ActionTypes.LOGIN_REQUEST,
  payload
})

export const loginSuccess = (): LoginSuccess => ({
  type: ActionTypes.LOGIN_SUCCESS
})

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload
})