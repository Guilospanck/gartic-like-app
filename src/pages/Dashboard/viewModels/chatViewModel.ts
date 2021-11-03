import { useCallback, useContext, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RootState } from "~/store/modules/rootReducers"
import { dispatchMessage, deleteMessagesByRoom } from '~/store/modules/messages/actions'
import { useLocation } from "react-router-dom"

import { DashboardContext } from "../context/dashboardContext"
import { JsonData } from "~/shared/JsonDataWebsocketMessage"

export interface IUseChatViewModel {
  sendMessage: () => void,
  message: string,
  handleMessage: (message: string) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void,
  messages: JsonData[],
  room: string
}

let socket = null

export const useChatViewModel = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  const query = useQuery()

  const { socketRef, usernameRef, roomRef, coordinatesRef, setCoordinatesState } = useContext(DashboardContext)

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

        let message = data
        if (!data.length) {
          message = [data]
        }

        const msg: JsonData[] = message

        let coordinatesArray = []
        msg.forEach(item => {
          if(item.canvasCoordinates){
            const parsed = JSON.parse(item.canvasCoordinates)
            coordinatesArray.push(parsed)
          }
        })
        setCoordinatesState(coordinatesArray)

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
      canvasCoordinates: null
    }

    socket.send(JSON.stringify(msgToSend))
    setMessage("")
  }

  return {
    sendMessage,
    message,
    handleMessage,
    handleTextAreaKeyDown,
    messages,
    room
  }
}