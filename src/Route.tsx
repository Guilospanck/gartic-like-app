import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { WaitingRoom } from './pages/WaitingRoom'
import { NewRoom } from './pages/NewRoom'

export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/waitingroom" element={<WaitingRoom />} />
        <Route path="/newroom" element={<NewRoom />} />
      </Routes>
    </BrowserRouter>
  )
}
