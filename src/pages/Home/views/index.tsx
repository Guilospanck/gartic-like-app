import React from 'react'
import { IUseHomeViewModel } from '../viewModels/homeViewModel'
import {
  Container,
  InputAndButtonContainer,
  InsertNameInput,
  EnterButton,
} from './styles'

interface Props {
  viewModel: IUseHomeViewModel
}

export const HomeView = ({ viewModel }: Props) => {
  return (
    <Container>
      <InputAndButtonContainer>
        <InsertNameInput
          type='text'
          placeholder='Insert your username'
          value={viewModel.username}
          onChange={(e) => viewModel.setUsername(e.target.value)}
        />
        <EnterButton onClick={viewModel.onEnterClick}>ENTER</EnterButton>
      </InputAndButtonContainer>
    </Container>
  )
}