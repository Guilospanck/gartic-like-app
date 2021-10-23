import { ActionTypes } from "./actionTypes"
import { SocketActions, SocketState } from './types'

const INITIAL_STATE: SocketState = {
  socket: null
}

export const socketReducer = (state = INITIAL_STATE, action: SocketActions) => {
  switch (action.type) {
    case ActionTypes.DISPATCH_SOCKET:
      return {
        ...state,
        socket: action.payload.socket
      }
    default:
      return {
        ...state
      }
  }
}