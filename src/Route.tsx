import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { WaitingRoom } from './pages/WaitingRoom'
import { NewRoom } from './pages/NewRoom'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/waitingroom" component={WaitingRoom} />
        <Route path="/newroom" component={NewRoom} />
      </Switch>
    </BrowserRouter>
  )
}
