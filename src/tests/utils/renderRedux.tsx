// test-utils.js
import React from 'react'
import { render } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer

function renderWithRedux (
  Element:React.ReactElement,
  reducer:any,
  initialState:any
) {
  const Wrapper = ({ children }:any) => {
    const fakeStore = createStore(reducer, initialState)

    return <Provider store={fakeStore}>{children}</Provider>
  }
  return render(Element, {
    wrapper: Wrapper
  })
}

export { renderWithRedux }
