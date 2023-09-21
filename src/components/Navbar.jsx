import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { ReactSVG } from "react-svg";
import Menu from '../files/vectors/hamMenu.svg'
import menuClose from '../files/images/menuClose.svg'
import circle from '../files/images/circle.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  return (
    <div className='font-mont h-20 | pt-7 pb-5 px-12 | flex justify-between border-b border-divider'>
      <h1 className='font-clashDisplay font-sxl font-bold'>get<span className='text-text-purple'>linked</span></h1>

      <div onClick={() => setClicked(!clicked)} className={`md:hidden z-20 w-6 h-6 flex justify-center items-center ${clicked? 'border-2 border-lg-from-purple rounded-full': ''}`}>
        <ReactSVG src={clicked? menuClose: Menu} />
      </div>

      {/*  */}
      <div className={`absolute md:relative md:right-0 left-0 top-0 z-10 md:z-auto | ${clicked? 'block': 'hidden'} md:block | h-screen md:h-auto px-12 py-20 md:py-0 | bg-bg-purple w-full | flex flex-col md:flex-row items-start md:items-end gap-4 | `}>
        <HashLink 
          to={`#timeline`} 
          className='text-lg font-medium hover:text-text-purple duration-500'
          smooth>
            Timeline</HashLink>
        <HashLink 
          to={`#overview`} 
          className='text-lg font-medium hover:text-text-purple duration-500'
          smooth>
            Overview</HashLink>
        <HashLink 
          to={`#FAQs`} 
          className='text-lg font-medium hover:text-text-purple duration-500'
          smooth>
            FAQs</HashLink>
        <Link 
          to={`.`} 
          className='text-lg font-medium hover:text-text-purple duration-500'
          >
            Contact</Link>

        <button className='w-38 h-12 rounded my-6 mb-2 | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple'>Register</button>
      </div>
    </div>
  )
}

export default Navbar