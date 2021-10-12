import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Main } from "~/components/Main"

import { Dashboard } from './pages/Dashboard'

export const AppRoute = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Main>
        <Switch>
          <Route path="/" exact>
            <p>Home /</p>
          </Route>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Main>
    </BrowserRouter>
  )
}
