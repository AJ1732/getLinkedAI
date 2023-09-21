import React from 'react'
import insta from '../files/images/instagram.svg'
import x from '../files/images/x.svg'
import facebook from '../files/images/facebook.svg'
import linkedin from '../files/images/linkedin.svg'
import tel from '../files/images/tel.svg'
import location from '../files/images/location.svg'

const Footer = () => {
  return (
    <div className='h-fit text-left py-14 px-15 | flex flex-col gap-10'>
      {/* Intro */}
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col justify-between items-start gap-10 '>
          <div>
            <h2 className='text-xl font-clashDisplay tracking-wide font-bold'>get<span className='text-text-purple'>linked</span></h2>
            <p className='w-68 mt-3 text-xs !leading-5'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
          </div>
          <div className='text-xs flex gap-2'>
            <p>Terms of Use</p>
            <span className='w-x bg-text-purple'></span>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* Links */}
        <div className='text-xs flex flex-col justify-center items-start gap-4'>
          <h2 className='text-sxxl text-text-purple font-semibold'>Useful Links</h2>
          <p>Overview</p>
          <p>Timeline</p>
          <p>FAQs</p>
          <p>Register</p>
          <div className="flex justify-center items-center gap-5">
            <h2 className='text-text-purple font-semibold'>Follow us</h2>
            <img src={insta} alt="instagram" />
            <img src={x} alt="x" />
            <img src={facebook} alt="facebook" />
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
        
        {/* Contact */}
        <div className='pt-4 flex flex-col justify-center items-start gap-4'>
          <h2 className='text-sxxl text-text-purple font-semibold'>Contact Us</h2>
          <div>
            <div className='flex gap-4'>
              <img src={tel} alt="telephone" />
              <p className='text-xs'>+234  6707653444</p>
            </div>

            <div className='mt-6 flex items-start justify-start gap-4'>
              <img className='pt-1' src={location} alt="telephone" />
              <div className='text-xs flex flex-col gap-2'>
                <p>27,Alara Street</p>
                <p>Yaba 100012</p>
                <p>Lagos State</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div>
        <h2 className='text-xs text-center'>All rights reserved. © getlinked Ltd.</h2>
      </div>
    </div>
  )
}

export default Footer