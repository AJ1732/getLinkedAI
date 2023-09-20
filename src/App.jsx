import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Overview from './components/Overview'
import Timeline from './components/Timeline'
import HomePage from './components/HomePage'
import FAQs from './components/FAQs'
import PrizeRewards from './components/PrizeRewards'
import PartnersSponsors from './components/PartnersSponsors'
import Privacy from './components/Privacy'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-bg-purple text-white font-mont'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Navbar />} />
          </Route>
        </Routes>
        <HomePage />
        <Overview />
        <FAQs />
        <Timeline />
        <PrizeRewards />
        <PartnersSponsors />
        <Privacy />
        <Footer />
      </Router>
    </div>
  )
}

export default App
