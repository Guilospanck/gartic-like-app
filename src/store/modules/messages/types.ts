import { ActionTypes } from "./actionTypes"

import { JsonData } from "~/shared/JsonDataWebsocketMessage"

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