import { ActionTypes } from "./actionTypes"

import { JsonData } from "~/shared/JsonDataWebsocketMessage"

export interface DispatchMessagePayload {
  message: JsonData[]
}

export type DispatchMessage = {
  type: typeof ActionTypes.DISPATCH_MESSAGE
  payload: DispatchMessagePayload
}

/** Delete messages by room */
export interface DeleteMessagesByRoomPayload {
  room: string
}

export type DeleteMessagesByRoom = {
  type: typeof ActionTypes.DELETE_ALL_MESSAGES_BY_ROOM
  payload: DeleteMessagesByRoomPayload
}

export type MessageActions =
  | DispatchMessage
  | DeleteMessagesByRoom

export interface MessageState {
  messages: JsonData[]
}