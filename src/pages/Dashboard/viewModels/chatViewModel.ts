import { useCallback, useContext, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RootState } from "~/store/modules/rootReducers"
import { dispatchMessage, deleteMessagesByRoom } from '~/store/modules/messages/actions'
import { useLocation } from "react-router-dom"

import { DashboardContext } from "../context/dashboardContext"
import { CanvasConfigsAndCoordinatesPayload, CanvasConfigType, JsonData } from "~/shared/JsonDataWebsocketMessage"

export interface IUseChatViewModel {
  sendMessage: () => void,
  message: string,
  handleMessage: (message: string) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void,
  messages: JsonData[],
  room: string,
  participantsInTheRoom: string[]
}

let socket = null

export const useChatViewModel = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()

  const { socketRef, usernameRef, roomRef,
    coordinatesRef, setCanvasConfigsAndCoordinatesState,
    participantsInTheRoom, setParticipantsInTheRoom,
    setDrawersTurn } = useContext(DashboardContext)

  const [username] = useState(query.get('username'))
  const [room] = useState(query.get('room'))

  usernameRef.current = username
  roomRef.current = room

  const url = `${process.env.WEBSOCKET_URL}?username=${username}&room=${room}`

  const [message, setMessage] = useState("")

  const dispatchActions = useDispatch()

  const messages = useSelector((store: RootState) => store.messageReducer.messages)

  useEffect(() => {
    document.getElementById("messages-container").scrollTop = document.getElementById("messages-container").scrollHeight
  }, [messages])

  useEffect(() => {
    document.getElementById("participants-container").scrollTop = document.getElementById("participants-container").scrollHeight
  }, [participantsInTheRoom])

  const memoizedSocket = useCallback(() => {
    if (!socket) return

    socket.onopen = (event) => {
      console.log("Opened dashboard: \n")
      console.log(event)
    }

    socket.onerror = (event) => {
      console.log("Error dashboard: \n")
      console.log(event)
    }

    socket.onmessage = (event) => {
      if (event?.data) {
        const data = JSON.parse(event.data)

        // set participants turn
        if(data.timestamp){
          setDrawersTurn(data.username)
          return
        }

        // broadcast when a new user enters the room
        if (data.participants) {
          setParticipantsInTheRoom(data.participants)
          return
        }

        let message = data
        if (!data.length) {
          message = [data]
        }

        const msg: JsonData[] = message

        _verifyAndSetCanvasConfigsAndCoordinates(msg)

        dispatchActions(dispatchMessage({
          message: msg
        }))
      }
    }
  }, [])

  useEffect(() => {
    socket = new WebSocket(url)
    socketRef.current = socket
    memoizedSocket()

    return function cleanup() {
      const msgToSend: JsonData = {
        username: username,
        room: room,
        message: 'closing dashboard...',
        date: new Date().toLocaleString('pt-br'),
        close: true
      }

      socket.send(JSON.stringify(msgToSend))
      socketRef.current = null
      usernameRef.current = null
      roomRef.current = null
      coordinatesRef.current = null
      dispatchActions(deleteMessagesByRoom({ room }))
    }
  }, [])

  const handleMessage = (message: string) => {
    setMessage(message)
  }

  const handleTextAreaKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.shiftKey == false) {
      e.preventDefault()
      if (message.length === 0) return
      sendMessage()
    }
  }

  const sendMessage = () => {
    const msgToSend: JsonData = {
      username: username,
      room: room,
      message,
      date: new Date().toLocaleString('pt-br'),
      close: false,
      canvasCoordinates: null,
      canvasConfigs: null,
    }

    socket.send(JSON.stringify(msgToSend))
    setMessage("")
  }

  const _verifyAndSetCanvasConfigsAndCoordinates = (msg: JsonData[]) => {
    let canvasConfigsAndCoordinatesArray: CanvasConfigsAndCoordinatesPayload[] = []
    msg.forEach(item => {
      if (item.canvasConfigs) {
        const parsedCoordinates: Number[][] = JSON.parse(item?.canvasCoordinates)
        const parsedConfigs: CanvasConfigType = JSON.parse(item?.canvasConfigs)
        canvasConfigsAndCoordinatesArray.push({
          configs: parsedConfigs,
          coordinates: parsedCoordinates,
          username: item.username
        })
      }
    })
    setCanvasConfigsAndCoordinatesState(canvasConfigsAndCoordinatesArray)
  }

  return {
    sendMessage,
    message,
    handleMessage,
    handleTextAreaKeyDown,
    messages,
    room,
    participantsInTheRoom
  }
}