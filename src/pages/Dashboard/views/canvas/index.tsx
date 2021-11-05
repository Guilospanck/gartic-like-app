import React from 'react'
import { IUseCanvasViewModel } from '../../viewModels/canvasViewModel'
import { CanvasStyled, Container, ClearButton } from './styles'

type CanvasViewModelProps = {
  viewModel: IUseCanvasViewModel
}

export const CanvasView = ({ viewModel }: CanvasViewModelProps) => {
  return (
    <Container>
      <CanvasStyled
        onMouseDown={viewModel.startDrawing}
        onMouseUp={viewModel.finishDrawing}
        onMouseMove={viewModel.draw}
        ref={viewModel.canvasRef}
      />
      {
        viewModel.disableCanvas ? null :
          <ClearButton onClick={viewModel.onClearButtonClick}>Clear</ClearButton>
      }
    </Container>
  )
}