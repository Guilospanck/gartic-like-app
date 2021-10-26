import React, { Fragment } from "react"
import { IUseChatViewModel } from "../../viewModels/chatViewModel"
import { ChatContainer, MessagesContainer, TextContainer, TextAreaStyled, SendButton } from "./styles"

interface Props {
  viewModel: IUseChatViewModel
}

export const ChatView = ({ viewModel }: Props) => {
  
  return (
    <ChatContainer>
      <MessagesContainer>
        {
          viewModel.messages?.map((msg, index) => {
            return (
              <Fragment key={index}>
                <div>{msg?.username}</div>
                <div>{msg?.room}</div>
                <div>{msg?.message}</div>
                <div>{msg?.timestamp}</div>
              </Fragment>
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
        />
        <SendButton onClick={viewModel.sendMessage}>Send</SendButton>
      </TextContainer>
    </ChatContainer>
  )
}