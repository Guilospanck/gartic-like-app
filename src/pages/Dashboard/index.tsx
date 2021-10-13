import React from 'react'

/** Views */
import { DashboardView } from './views'
import { CanvasView } from './views/canvas'
import { ChatView } from './views/chat'

/** ViewModels */
import { useCanvasViewModel } from './viewModels/canvasViewModel'

/** Components */
const CanvasComponent = () => {
  const canvasViewModel = useCanvasViewModel()
  return <CanvasView viewModel={canvasViewModel} />
}

const ChatComponent = () => {
  return <ChatView />
}

export const Dashboard = () => {
  return (
    <DashboardView CanvasComponent={CanvasComponent} ChatComponent={ChatComponent} />
  )
}
