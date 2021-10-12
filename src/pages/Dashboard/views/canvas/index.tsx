import React from 'react'
import { IUseCanvasViewModel } from '../../viewModels/canvasViewModel'

type CanvasViewModelProps = {
  viewModel: IUseCanvasViewModel
}

export const CanvasView = ({ viewModel }: CanvasViewModelProps) => {
  return (
    <canvas
      style={{ width: '100%', height: '100%' }}
      onMouseDown={viewModel.startDrawing}
      onMouseUp={viewModel.finishDrawing}
      onMouseMove={viewModel.draw}
      ref={viewModel.canvasRef}
    />
  )
}