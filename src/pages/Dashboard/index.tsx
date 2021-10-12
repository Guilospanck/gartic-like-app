import React from 'react'

/** Views */
import { DashboardView } from './views'
import { CanvasView } from './views/canvas'

/** ViewModels */
import { useCanvasViewModel } from './viewModels/canvasViewModel'


const CanvasComponent = () => {
  const canvasViewModel = useCanvasViewModel()
  return <CanvasView viewModel={canvasViewModel} />
}


export const Dashboard = () => {
  return (
    <DashboardView CanvasComponent={CanvasComponent} />
  )
}
