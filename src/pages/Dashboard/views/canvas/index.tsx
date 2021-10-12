import React from 'react'
import { IUseCanvasViewModel } from '../../viewModels/canvasViewModel'
import { CanvasStyled } from './styles'

type CanvasViewModelProps = {
  viewModel: IUseCanvasViewModel
}

export const CanvasView = ({ viewModel }: CanvasViewModelProps) => {
  return (
    <CanvasStyled
      onMouseDown={viewModel.startDrawing}
      onMouseUp={viewModel.finishDrawing}
      onMouseMove={viewModel.draw}
      ref={viewModel.canvasRef}
    />
  )
}