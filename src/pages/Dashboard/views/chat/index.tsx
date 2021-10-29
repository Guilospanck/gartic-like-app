import React from "react"
import { IUseChatViewModel } from "../../viewModels/chatViewModel"
import {
  ChatContainer, MessagesContainer, TextContainer, TextAreaStyled, SendButton,
  MessageChatBalloon, UsernameContainer, MessageFromUserContainer, DateContainer
} from "./styles"

interface Props {
  viewModel: IUseChatViewModel
}

export const ChatView = ({ viewModel }: Props) => {  

  return (
    <ChatContainer>
      <MessagesContainer id="messages-container">
        {
          viewModel.messages?.map((msg, index) => {
            if(msg.room !== viewModel.room) return null
            return (
              <MessageChatBalloon key={index}>
                <UsernameContainer>{msg?.username}</UsernameContainer>
                <MessageFromUserContainer>{msg?.message}</MessageFromUserContainer>
                <DateContainer>{msg?.timestamp}</DateContainer>
              </MessageChatBalloon>
            )
          })
        }
      </MessagesContainer>
      <TextContainer>
        <TextAreaStyled
          name="writemessage"
          id="writer"
          placeholder="Type your guess!"
          value={viewModel.message}
          onChange={(e) => viewModel.handleMessage(e.target.value)}
          onKeyDown={viewModel.handleTextAreaKeyDown}
          maxLength={21}
        />
        <SendButton onClick={viewModel.sendMessage}>Send</SendButton>
      </TextContainer>
    </ChatContainer>
  )
}