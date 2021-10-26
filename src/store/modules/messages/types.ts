import { ActionTypes } from "./actionTypes"

type JsonData = {
  username: string
  room: string
  message: string
  timestamp: string
}

export interface DispatchMessagePayload {
  message: JsonData
}

export type DispatchMessage = {
  type: typeof ActionTypes.DISPATCH_MESSAGE
  payload: DispatchMessagePayload
}

export type MessageActions =
  | DispatchMessage

export interface MessageState {
  messages: JsonData[]
}