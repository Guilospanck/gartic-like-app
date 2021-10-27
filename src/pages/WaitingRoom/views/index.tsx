import React from 'react'
import { IUseWaitingRoomViewModel } from '../viewModels/waitingRoomViewModel'
import {
  RoomInfoContainer,
  InfoContainer,
  RoomDiv,
  ParticipantsDiv,
  EnterButton,
} from './styles'

interface Props {
  viewModel: IUseWaitingRoomViewModel
}

export const WaitingRoomView = ({ viewModel }: Props) => {
  return (
    <>
      {
        viewModel.participants.map((item, index) => (
          <RoomInfoContainer key={index}>
            <InfoContainer>
              <RoomDiv>Batata</RoomDiv>
            </InfoContainer>

            <InfoContainer>
              <ParticipantsDiv><strong>Participants:&nbsp;</strong> {item}</ParticipantsDiv>
            </InfoContainer>

            <InfoContainer>
              <EnterButton onClick={viewModel.onEnterClick}>Enter</EnterButton>
            </InfoContainer>
          </RoomInfoContainer>
        ))
      }
    </>
  )
}