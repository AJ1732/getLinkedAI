import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { ReactSVG } from "react-svg";
import Menu from '../files/vectors/hamMenu.svg'

const Navbar = () => {
  return (
    <div className='font-inter h-20 | py-7 px-12 | flex justify-between'>
      <h1 className='font-clashDisplay font-sxl font-bold'>get<span className='text-text-purple'>linked</span></h1>

      <div>
        <ReactSVG src={Menu} />
      </div>

      <div className='hidden'>
        {/* <HashLink to={`#timeline`} smooth>Timeline</HashLink> */}

      </div>
    </div>
  )
}

export default Navbar