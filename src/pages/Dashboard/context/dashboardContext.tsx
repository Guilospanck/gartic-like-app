import React, { createContext, useRef, useState } from "react"

interface IDashboardContext {
  socketRef: React.MutableRefObject<WebSocket | null>,
  usernameRef: React.MutableRefObject<string | null>,
  roomRef: React.MutableRefObject<string | null>,
  coordinatesRef: React.MutableRefObject<Number[][] | null>,
  coordinatesState: Number[][],
  setCoordinatesState: (coordinates: Number[][]) => void
}

export const DashboardContext = createContext<IDashboardContext | null>(null)

export const DashboardContextProvider = ({ children }) => {
  const socketRef = useRef<WebSocket | null>(null)
  const usernameRef = useRef<string | null>(null)
  const roomRef = useRef<string | null>(null)
  const coordinatesRef = useRef<Number[][] | null>([])

  const [coordinatesState, setCoordinatesState] = useState<Number[][] | null>([])


  const defaultContext: IDashboardContext = {
    socketRef,
    usernameRef,
    roomRef,
    coordinatesRef,
    coordinatesState,
    setCoordinatesState
  }

  return <DashboardContext.Provider value={defaultContext}> {children} </DashboardContext.Provider>

}