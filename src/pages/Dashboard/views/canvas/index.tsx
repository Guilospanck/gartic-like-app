import React from 'react'
import { IUseCanvasViewModel } from '../../viewModels/canvasViewModel'
import { CanvasStyled, Container, ClearButton, ExitButton } from './styles'
import { ProgressBar } from '../../../../components/ProgressBar'

type CanvasViewModelProps = {
  viewModel: IUseCanvasViewModel
}

export const CanvasView = ({ viewModel }: CanvasViewModelProps) => {
  return (
    <Container>
      <div id="canvas-container">
        <ProgressBar percentage={viewModel.drawersTurnProgressBarPercentage} />
        <CanvasStyled
          onMouseDown={viewModel.startDrawing}
          onMouseUp={viewModel.finishDrawing}
          onMouseMove={viewModel.draw}
          ref={viewModel.canvasRef}
        />
      </div>
      {
        viewModel.disableCanvas ? null :
          <ClearButton onClick={viewModel.onClearButtonClick}>Clear</ClearButton>
      }
      <ExitButton onClick={viewModel.onExitButtonClick}>Exit</ExitButton>
    </Container>
  )
}