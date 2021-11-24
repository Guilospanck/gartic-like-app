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
  setDrawersTurn: (drawer: string) => void,
  drawersTurnProgressBarPercentage: number,
  updateProgressBar: () => void
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

  const [drawersTurnProgressBarPercentage, setDrawersTurnProgressBarPercentage] = useState(0)

  const TIME_BETWEEN_USERS = 20 // seconds
  const DECREMENTAL_PACE = 100 / TIME_BETWEEN_USERS
  const updateProgressBar = () => {
    setDrawersTurnProgressBarPercentage(100)
    let id = 0
    let progress = 100
    const timer = setInterval(() => {
      progress -= DECREMENTAL_PACE
      setDrawersTurnProgressBarPercentage(progress)
      id++
      if (id === 20) {
        setDrawersTurnProgressBarPercentage(100)
        clearInterval(timer)
      }
    }, 1 * 1000)
  }

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
    setDrawersTurn,
    drawersTurnProgressBarPercentage,
    updateProgressBar
  }

  return <DashboardContext.Provider value={defaultContext}> {children} </DashboardContext.Provider>

}