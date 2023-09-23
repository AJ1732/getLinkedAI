import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './components/Contact'
import Register from './components/Register'
import LandingPage from './components/LandingPage'
import Error from './components/Error'

function App() {

  return (
    <div className='bg-bg-purple text-white font-mont overflow-hidden'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='contact' element={<Contact />} />
            <Route path='register' element={<Register />} />
            <Route path='*' element={<Error />}/> 
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
