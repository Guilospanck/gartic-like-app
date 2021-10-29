import React from 'react'
import { IUseWaitingRoomViewModel } from '../viewModels/waitingRoomViewModel'
import {
  Container,
  RoomInfoContainer,
  InfoContainer,
  RoomDiv,
  ParticipantsDiv,
  EnterButton,
  NewRoomButton,
} from './styles'

interface Props {
  viewModel: IUseWaitingRoomViewModel
}

export const WaitingRoomView = ({ viewModel }: Props) => {
  return (
    <Container>
      {
        viewModel.rooms.map((item, index) => (
          <RoomInfoContainer key={index}>
            <InfoContainer>
              <RoomDiv>{item.room}</RoomDiv>
            </InfoContainer>

            <InfoContainer>
              <ParticipantsDiv><strong>Participants:&nbsp;</strong> {item.numOfParticipants}</ParticipantsDiv>
            </InfoContainer>

            <InfoContainer>
              <EnterButton onClick={(e) => viewModel.onEnterClick(e, item.room)}>Enter</EnterButton>
            </InfoContainer>
          </RoomInfoContainer>
        ))
      }
      <NewRoomButton onClick={viewModel.onNewRoomClick}>New Room</NewRoomButton>
    </Container>
  )
}