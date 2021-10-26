import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { RootState } from "~/store/modules/rootReducers"
import { dispatchMessage } from '~/store/modules/messages/actions'

type JsonData = {
  username: string
  room: string
  message: string
  timestamp: string
}

export interface IUseChatViewModel {
  sendMessage: () => void,
  message: string,
  handleMessage: (message: string) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void,
  messages: JsonData[]
}

export const useChatViewModel = () => {
  const [message, setMessage] = useState("")

  const dispatchActions = useDispatch()

  const socket = useSelector((store: RootState) => store.socketReducer.socket)
  const messages = useSelector((store: RootState) => store.messageReducer.messages)

  useEffect(() => {
    document.getElementById("messages-container").scrollTop = document.getElementById("messages-container").scrollHeight
  }, [messages])

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        if (event?.data) {
          const msg: JsonData = JSON.parse(event.data)
          dispatchActions(dispatchMessage({
            message: msg
          }))
        }
      }
    }
  }, [socket])

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
    const msgToSend = {
      username: "Guilospanck",
      room: "1",
      message,
      timestamp: new Date().toLocaleString('pt-br')
    }

    socket.send(JSON.stringify(msgToSend))
    setMessage("")
  }

  return {
    sendMessage,
    message,
    handleMessage,
    handleTextAreaKeyDown,
    messages
  }
}