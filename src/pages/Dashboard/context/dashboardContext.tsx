import React, { createContext, useRef, useState } from "react"
import { CanvasConfigsAndCoordinatesPayload } from "~/shared/JsonDataWebsocketMessage"

interface IDashboardContext {
  socketRef: React.MutableRefObject<WebSocket | null>,
  usernameRef: React.MutableRefObject<string | null>,
  roomRef: React.MutableRefObject<string | null>,
  coordinatesRef: React.MutableRefObject<Number[][] | null>,
  canvasConfigsAndCoordinatesState: CanvasConfigsAndCoordinatesPayload[],
  setCanvasConfigsAndCoordinatesState: (canvasConfigsAndCoordinates: CanvasConfigsAndCoordinatesPayload[]) => void,
  participantsInTheRoom: string[],
  setParticipantsInTheRoom: (participants: string[]) => void,
  drawersTurn: string,
  setDrawersTurn: (drawer: string) => void
}

export const DashboardContext = createContext<IDashboardContext | null>(null)

export const DashboardContextProvider = ({ children }) => {
  const socketRef = useRef<WebSocket | null>(null)
  const usernameRef = useRef<string | null>(null)
  const roomRef = useRef<string | null>(null)
  const coordinatesRef = useRef<Number[][] | null>([])

  const [canvasConfigsAndCoordinatesState, setCanvasConfigsAndCoordinatesState] = useState<CanvasConfigsAndCoordinatesPayload[] | null>([])

  const [participantsInTheRoom, setParticipantsInTheRoom] = useState([])

  const [drawersTurn, setDrawersTurn] = useState("")

  const defaultContext: IDashboardContext = {
    socketRef,
    usernameRef,
    roomRef,
    coordinatesRef,
    canvasConfigsAndCoordinatesState,
    setCanvasConfigsAndCoordinatesState,
    participantsInTheRoom,
    setParticipantsInTheRoom,
    drawersTurn,
    setDrawersTurn
  }

  return <DashboardContext.Provider value={defaultContext}> {children} </DashboardContext.Provider>

}