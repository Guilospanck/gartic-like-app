import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "~/store/modules/rootReducers"

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
  messageReceived: JsonData
}

export const useChatViewModel = () => {
  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState()

  const socket = useSelector((store: RootState) => store.socketReducer.socket)

  useEffect(() => {
    if (socket) {
      socket.onmessage = (event) => {
        if (event?.data) {
          setMessageReceived(JSON.parse(event.data))
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
      sendMessage()
    }
  }

  const sendMessage = () => {
    setMessage("")

    socket.send(JSON.stringify({
      username: "GuiSend",
      room: "whiteroom",
      message,
      timestamp: new Date().toLocaleString('pt-br')
    }))

  }

  return {
    sendMessage,
    message,
    handleMessage,
    handleTextAreaKeyDown,
    messageReceived
  }
}