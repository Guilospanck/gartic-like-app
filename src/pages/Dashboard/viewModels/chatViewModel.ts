import { useState } from "react"

export interface IUseChatViewModel {
  sendMessage: () => void,
  message: string,
  handleMessage: (message: string) => void,
  handleTextAreaKeyDown: (e: React.KeyboardEvent) => void
}

export const useChatViewModel = () => {
  const [message, setMessage] = useState("")

  const handleMessage = (message: string) => {
    setMessage(message)
  }

  const handleTextAreaKeyDown = (e: React.KeyboardEvent) => {
    if(e.key === "Enter" && e.shiftKey == false) {
      e.preventDefault()
      sendMessage()
    }
  }

  const sendMessage = () => {
    console.log("Send message!" + message)
    setMessage("")
  }

  return {
    sendMessage,
    message,
    handleMessage,
    handleTextAreaKeyDown
  }
}