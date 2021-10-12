import React from "react"
import { ChatContainer, MessagesContainer, TextContainer, TextAreaStyled, SendButton } from "./styles"

export const ChatView = () => {
  return (
    <ChatContainer>
      <MessagesContainer />
      <TextContainer>
        <TextAreaStyled name="writemessage" id="writer" placeholder="Type your guess!" />
        <SendButton>Send</SendButton>
      </TextContainer>
    </ChatContainer>
  )
}