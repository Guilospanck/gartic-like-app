import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import { Dashboard } from './pages/Dashboard'

import { dispatchSocket } from './store/modules/socket/actions'

export const AppRoute = () => {
  const dispatchActions = useDispatch()

  useEffect(() => {
    const url = `${process.env.WEBSOCKET_URL}?username=Guilospanck&room=1`
    const socket = new WebSocket(url)

    socket.onopen = (event) => {
      console.log("Opened: \n")
      console.log(event)
    }

    socket.onerror = (event) => {
      console.log("Error: \n")
      console.log(event)
    }

    dispatchActions(dispatchSocket({ socket }))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <p>Home /</p>
        </Route>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}
