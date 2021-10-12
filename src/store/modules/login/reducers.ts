import { ActionTypes } from "./actionTypes"
import { LoginActions, LoginState } from './types'

const INITIAL_STATE: LoginState = {
  pending: false,
  error: null,
}

export const loginReducer = (state = INITIAL_STATE, action: LoginActions) => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        pending: true
      }

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }

    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }

    default:
      return {
        ...state
      }
  }
}