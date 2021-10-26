import { ActionTypes } from "./actionTypes"
import { MessageActions, MessageState } from './types'

const INITIAL_STATE: MessageState = {
  messages: []
}

export const messageReducer = (state = INITIAL_STATE, action: MessageActions) => {
  switch (action.type) {
    case ActionTypes.DISPATCH_MESSAGE:    
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      }
    default:
      return state
  }
}