import { ActionTypes } from "./actionTypes"
import { DeleteMessagesByRoom, DeleteMessagesByRoomPayload, DispatchMessage, DispatchMessagePayload } from "./types"

export const dispatchMessage = (payload: DispatchMessagePayload): DispatchMessage => ({
  type: ActionTypes.DISPATCH_MESSAGE,
  payload
})

export const deleteMessagesByRoom = (payload: DeleteMessagesByRoomPayload): DeleteMessagesByRoom => ({
  type: ActionTypes.DELETE_ALL_MESSAGES_BY_ROOM,
  payload
})