import React from 'react'

/** Views */
import { WaitingRoomView } from './views'

/** ViewModels */
import { useWaitingRoomViewModel } from './viewModels/waitingRoomViewModel'

/** Components */

export const WaitingRoom = () => {
  const viewModel = useWaitingRoomViewModel()

  return (
    <WaitingRoomView viewModel={viewModel} />
  )
}
