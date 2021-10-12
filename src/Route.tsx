import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'

export const AppRoute = () => {

  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact>
          <p>Home /</p>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
