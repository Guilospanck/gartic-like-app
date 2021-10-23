import React from "react"
import { IUseChatViewModel } from "../../viewModels/chatViewModel"
import { ChatContainer, MessagesContainer, TextContainer, TextAreaStyled, SendButton } from "./styles"

interface Props {
  viewModel: IUseChatViewModel
}

export const ChatView = ({ viewModel }: Props) => {
  return (
    <ChatContainer>
      <MessagesContainer>
        <div>{viewModel.messageReceived?.username}</div>
        <div>{viewModel.messageReceived?.room}</div>
        <div>{viewModel.messageReceived?.message}</div>
        <div>{viewModel.messageReceived?.timestamp}</div>
      </MessagesContainer>
      <TextContainer>
        <TextAreaStyled
          name="writemessage"
          id="writer"
          placeholder="Type your guess!"
          value={viewModel.message}
          onChange={(e) => viewModel.handleMessage(e.target.value)}
          onKeyDown={viewModel.handleTextAreaKeyDown}
        />
        <SendButton onClick={viewModel.sendMessage}>Send</SendButton>
      </TextContainer>
    </ChatContainer>
  )
}