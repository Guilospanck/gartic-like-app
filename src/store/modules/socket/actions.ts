import { ActionTypes } from "./actionTypes"
import { DispatchSocket, DispatchSocketPayload } from "./types"

export const dispatchSocket = (payload: DispatchSocketPayload): DispatchSocket => ({
  type: ActionTypes.DISPATCH_SOCKET,
  payload
})