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
    width: 50%;
  }
`

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 40;
  width: 100%;
  height: 100%;

  overflow-y: auto;
  padding-bottom: 8px;
  border: none;
  box-shadow: -1px 2px 12px 0px #c7c6c5;  
`

export const MessageChatBalloon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background: #884eef;
  border: none;
  border-radius: 15px;
  padding: 3%;
  margin: 3px 7px;
  
  box-shadow: 3px 3px 6px 0px #191919;
  color: white;

  height: 40px;
  gap: 15px;

  @media(min-width: 800px) {
    height: 70px;
    flex-direction: column;    
    gap: 0px;
  }
`

export const UsernameContainer = styled.div`
  display: flex;
  font-weight: bold;

  @media(min-width: 800px) {
  }
`

export const MessageFromUserContainer = styled.div`
  display: flex;  
  word-break: break-word;

  @media(min-width: 800px) {
    word-break: normal;
  }
`

export const DateContainer = styled.div`   
  align-content: center;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  font-size: 10px;
  font-weight: bold;

  display: none;

  @media(min-width: 800px) {
    display: flex; 
  }
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