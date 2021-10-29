import React from "react"
import { IUseNewRoomViewModel } from "../viewModels/newRoomViewModel"
import {
  Container,
  InputAndButtonContainer,
  InsertNameInput,
  EnterButton,
} from './styles'

type Props = {
  viewModel: IUseNewRoomViewModel
}

export const NewRoomView = ({ viewModel }: Props) => {
  return (
    <Container>
      <InputAndButtonContainer>
        <InsertNameInput
          type='text'
          placeholder="Insert room's name"
          value={viewModel.roomName}
          onChange={(e) => viewModel.setRoomName(e.target.value)}
        />
        <EnterButton onClick={viewModel.onEnterClick}>ENTER</EnterButton>
      </InputAndButtonContainer>
    </Container>
  )
}