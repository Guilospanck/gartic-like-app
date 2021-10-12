import styled from "styled-components"

export const ChatContainer = styled.div`
  width: 100%;
  height: inherit;
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-template-rows: [messages] 95% [inputText] 4%;
  row-gap: 1%;
`

export const MessagesContainer = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
  border: none;
  box-shadow: -1px 2px 12px 0px #c7c6c5;
`

export const TextContainer = styled.div`
  width: 25vw;
  height: 100%;
  display: flex;
`

export const TextAreaStyled = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  box-shadow: -1px 2px 12px 0px #c7c6c5;

  &:focus {
    outline: none;
    border-color: black;
    box-shadow: 0 0 10px #719ECE;
  }
`

export const SendButton = styled.button`
  border: none;
  background: #1dac1d;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 1px 12px 0px #1dac1d;
`