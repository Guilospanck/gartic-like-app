import { ActionTypes } from "./actionTypes"
import { DispatchMessage, DispatchMessagePayload } from "./types"

export const dispatchMessage = (payload: DispatchMessagePayload): DispatchMessage => ({
  type: ActionTypes.DISPATCH_MESSAGE,
  payload
})