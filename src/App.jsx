import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Templates from './pages/Templates'
import PortfolioViewer from './pages/PortfolioViewer'
import Contact from './pages/Contact' // ⬅️ Add this line

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/portfolio/:username" element={<PortfolioViewer />} />
      <Route path="/contact" element={<Contact />} /> 
    </Routes>
  )
}

export default App
