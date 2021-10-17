import styled from "styled-components"

export const ChatContainer = styled.div`
  justify-content: center;
  align-items: center;
  justify-items: center;
  
  width: 100%;
  flex-grow: 3;

  display: flex;
  flex-direction: column;
  gap: 1%;

  @media(min-width: 800px) {
    height: 100%;
  }
`

export const MessagesContainer = styled.div`
  display: flex;
  flex-grow: 4;
  width: 100%;
  height: 100px;

  border: none;
  box-shadow: -1px 2px 12px 0px #c7c6c5;  
`

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;

  flex-direction: row;
`

export const TextAreaStyled = styled.textarea`
  flex-grow: 2;
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
  height: 100%;

  border: none;
  background: #1dac1d;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 1px 12px 0px #1dac1d;
`