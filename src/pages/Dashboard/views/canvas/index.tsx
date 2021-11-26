import React from 'react'
import { IUseCanvasViewModel } from '../../viewModels/canvasViewModel'
import { CanvasContainer, CanvasStyled, Container, ClearButton, ExitButton, PlayerTurnName, ButtonsContainer } from './styles'
import { ProgressBar } from '../../../../components/ProgressBar'

type CanvasViewModelProps = {
  viewModel: IUseCanvasViewModel
}

export const CanvasView = ({ viewModel }: CanvasViewModelProps) => {
  return (
    <Container>
      <ProgressBar percentage={viewModel.drawersTurnProgressBarPercentage} />
      <ButtonsContainer>
        <ExitButton onClick={viewModel.onExitButtonClick}>Exit</ExitButton>
        {
          viewModel.drawersTurn ?
            <PlayerTurnName>Player's Turn: <b>{viewModel.drawersTurn}</b></PlayerTurnName> :
            <span>Waiting for participants...</span>
        }
        {
          !viewModel.disableCanvas &&
          <ClearButton onClick={viewModel.onClearButtonClick}>Clear</ClearButton>
        }
      </ButtonsContainer>
      <CanvasContainer id="canvas-container">
        <CanvasStyled
          onMouseDown={viewModel.startDrawing}
          onMouseUp={viewModel.finishDrawing}
          onMouseMove={viewModel.draw}
          ref={viewModel.canvasRef}
        />
      </CanvasContainer>
    </Container>
  )
}