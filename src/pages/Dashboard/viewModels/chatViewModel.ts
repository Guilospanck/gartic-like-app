import { useCallback, useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RootState } from "~/store/modules/rootReducers"
import { dispatchMessage } from '~/store/modules/messages/actions'
import { useLocation } from "react-router-dom"

type JsonData = {
  username: string
  room: string
  message: string
  timestamp: string
  close: boolean
}

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

  const [username, setUsername] = useState(query.get('username'))
  const [room, setRoom] = useState(query.get('room'))

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
      console.log(event)
      if (event?.data) {
        const msg: JsonData = JSON.parse(event.data)
        dispatchActions(dispatchMessage({
          message: msg
        }))
      }
    }
  }, [])

  useEffect(() => {
    socket = new WebSocket(url)
    memoizedSocket()

    return function cleanup () {
      const msgToSend: JsonData = {
        username: username,
        room: room,
        message,
        timestamp: new Date().toLocaleString('pt-br'),
        close: true
      }  
      socket.send(JSON.stringify(msgToSend))
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
      timestamp: new Date().toLocaleString('pt-br'),
      close: false
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