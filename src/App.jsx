import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import Layout from './components/Layout'
import Header from './components/Header'
// import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Register from './components/Register'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <div className='bg-bg-purple text-white font-mont overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
