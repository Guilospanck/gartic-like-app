import { ActionTypes } from "./actionTypes"

export interface DispatchSocketPayload {
  socket: WebSocket
}

export type DispatchSocket = {
  type: typeof ActionTypes.DISPATCH_SOCKET
  payload: DispatchSocketPayload
}

export type SocketActions =
  | DispatchSocket

export interface SocketState {
  socket: WebSocket | null
}