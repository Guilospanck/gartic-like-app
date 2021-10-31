import React from 'react'

/** Views */
import { DashboardView } from './views'
import { CanvasView } from './views/canvas'
import { ChatView } from './views/chat'

/** ViewModels */
import { useCanvasViewModel } from './viewModels/canvasViewModel'
import { useChatViewModel } from './viewModels/chatViewModel'

/** Components */
const CanvasComponent = () => {
  const canvasViewModel = useCanvasViewModel()
  return <CanvasView viewModel={canvasViewModel} />
}

/** Context */
import { DashboardContextProvider } from './context/dashboardContext'

const ChatComponent = () => {
  const viewModel = useChatViewModel()
  return <ChatView viewModel={viewModel} />
}

export const Dashboard = () => {
  return (
    <DashboardContextProvider>
      <DashboardView CanvasComponent={CanvasComponent} ChatComponent={ChatComponent} />
    </DashboardContextProvider>
  )
}
