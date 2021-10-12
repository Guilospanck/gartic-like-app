import { ActionTypes } from "./actionTypes"

export interface LoginRequestPayload {
  username: string,
  password: string
}

export type LoginRequest = {
  type: typeof ActionTypes.LOGIN_REQUEST
  payload: LoginRequestPayload
}

export type LoginSuccess = {
  type: typeof ActionTypes.LOGIN_SUCCESS
}

export interface LoginFailurePayload {
  error: string
}

export type LoginFailure = {
  type: typeof ActionTypes.LOGIN_FAILURE
  payload: LoginFailurePayload
}

export type LoginActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure

export interface LoginState {
  pending: boolean,
  error: string | null
}