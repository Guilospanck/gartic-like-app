import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import { AppRoute } from './Route'

function App () {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  )
}

export default App
