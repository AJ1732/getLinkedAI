import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Timeline from './components/Timeline'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navbar />} />

          </Route>
        </Routes>
        <Timeline />
      </Router>
    </>
  )
}

export default App
