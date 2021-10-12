import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'

export const AppRoute = () => {

  return (
    <BrowserRouter>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
