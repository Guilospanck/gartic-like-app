import React from 'react'

/** Views */
import { NewRoomView } from './views'

/** ViewModels */
import { useNewRoomViewModel } from './viewModels/newRoomViewModel'

/** Components */

export const NewRoom = () => {
  const viewModel = useNewRoomViewModel()

  return (
    <NewRoomView viewModel={viewModel} />
  )
}
