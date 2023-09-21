import React from 'react'
import Overview from './Overview'
import Timeline from './Timeline'
import HomePage from './HomePage'
import FAQs from './FAQs'
import PrizeRewards from './PrizeRewards'
import PartnersSponsors from './PartnersSponsors'
import Privacy from './Privacy'
import Footer from './Footer'

const LandingPage = () => {
  return (
    <div>
      <HomePage />
      <Overview />
      <FAQs />
      <Timeline />
      <PrizeRewards />
      <PartnersSponsors />
      <Privacy />
      <Footer />
    </div>
  )
}

export default LandingPage