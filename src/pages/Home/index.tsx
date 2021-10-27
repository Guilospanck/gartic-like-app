import React from 'react'

/** Views */
import { HomeView } from './views'

/** ViewModels */
import { useHomeViewModel } from './viewModels/homeViewModel'

/** Components */

export const Home = () => {
  const viewModel = useHomeViewModel()
  return (
    <HomeView viewModel={viewModel} />
  )
}
