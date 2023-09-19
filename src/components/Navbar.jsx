import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  return (
    <div className='font-clashDisplay h-screen'>
      <HashLink to={`#timeline`} smooth>Timeline</HashLink>
    </div>
  )
}

export default Navbar