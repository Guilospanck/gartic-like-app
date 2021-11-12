import styled from "styled-components"

export const ChatAndParticipantsContainer = styled.div`
  justify-content: center;
  align-items: center;
  justify-items: center;
  
  width: 100%;
  height: 100%;
  flex-grow: 3;

  display: flex;
  flex-direction: row;
  gap: 1%;

  @media(min-width: 800px) {
    height: 100%;
    width: 50%;
    flex-direction: column;
  }
`

export const ParticipantsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100%;
  height: 300px;

  overflow-y: auto;
  box-shadow: 3px 4px 8px 0px #979797;
`

interface ParticipantIndex {
  index: number
}

export const IndividualParticipantContainer = styled.div<ParticipantIndex>`
  padding: 5px;    
  width: 100%;
  margin-bottom: 1px;
  background: ${props => props.index % 2 === 0 ? "#d9cdee" : "#fff"};
`

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 300px;
  width: 100%;
  
  @media(min-width: 800px) {
    max-height: 65%;    
  }
`

export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;

  overflow-y: auto;
  padding-bottom: 8px;
  border: none;
  box-shadow: -1px 2px 12px 0px #c7c6c5;  

  @media(min-width: 800px) {
    flex-grow: 4;
  }
`

export const MessageChatBalloon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background: #884eef;
  border: none;
  border-radius: 15px;
  margin: 3px 7px;

  padding-left: 3%;
  padding-right: 3%;
  padding-top: 1%;
  
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