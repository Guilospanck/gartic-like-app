import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RoomInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  width: 98%;

  gap: 1px;

  &:hover {
    border-color: #884eef;
  }

  border: 1px solid #c0b9b9;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;

`

export const InfoContainer = styled.div`
  @media(min-width: 800px) {
    width: 12%;
  }
`

export const RoomDiv = styled.div`
  display: flex;
  font-weight: bold;
`

export const ParticipantsDiv = styled.div`
  display: flex;
`

export const EnterButton = styled.button`
  border: none; 
  padding: 7px;
  width: 65px;
  background: #884eef;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
`

export const NewRoomButton = styled.button`
  border: none; 
  padding: 15px;
  width: 120px;
  background: #884eef;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
`