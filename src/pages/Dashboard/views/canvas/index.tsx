import React from 'react'
import { IUseCanvasViewModel } from '../../viewModels/canvasViewModel'

type CanvasViewModelProps = {
  viewModel: IUseCanvasViewModel
}

export const CanvasView = ({ viewModel }: CanvasViewModelProps) => {
  return (
    <canvas
      onMouseDown={viewModel.startDrawing}
      onMouseUp={viewModel.finishDrawing}
      onMouseMove={viewModel.draw}
      ref={viewModel.canvasRef}
    />
  )
}