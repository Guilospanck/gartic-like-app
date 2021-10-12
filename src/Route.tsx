import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'

import { Dashboard } from './pages/Dashboard'

export const AppRoute = () => {

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
