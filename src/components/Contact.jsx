import React from 'react'
import { Link } from 'react-router-dom'
import back from '../files/vectors/back.svg'
import insta from '../files/images/instagram.svg'
import x from '../files/images/x.svg'
import facebook from '../files/images/facebook.svg'
import linkedin from '../files/images/linkedin.svg'

const Contact = () => {
  return (
    <div className=' bg-bg-two-purple h-screen py-12 px-10 border-b border-divider | flex flex-col justify-start items-center gap-10'>
      <Link to={`../`} className='self-start sm:hidden'>
        <img src={back} alt="" />
      </Link>
      <div className='flex flex-col gap-6 justify-start items-center'>
        <div className='text-xl text-text-purple font-semibold font-clashDisplay self-start'>
          <h2>Questions or need assistance?</h2>
          <h2>Let us know about it</h2>
        </div>

        <p className='text-xs self-start'>Email us below to any question related to our event</p>
      
        <div className='flex flex-col gap-6 text-base'>
          <input 
            type="text"
            placeholder="Teams's Name"
            className='bg-input py-3.5 px-6 w-full border rounded' />
          <input 
            type="text"
            placeholder="Topic"
            className='bg-input py-3.5 px-6 border rounded'  />
          <input 
            type="email"
            placeholder="Email"
            className='bg-input py-3.5 px-6 border rounded'  />
          <textarea 
            type="text"
            placeholder="Message"
            className='bg-input py-3.5 px-6 border rounded'  />
        </div>

        <button className='w-38 h-12 rounded my-6 mb-2 | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple'>Submit</button>
        
      </div>

      <div>
        <div className='flex flex-col gap-2'>
          <h2 className='text-xs text-center text-text-purple font-medium'>Share on</h2>
          <div className='flex justify-center items-center gap-4'>
            <img className='w-5 h-5' src={insta} alt="instagram" />
            <img className='w-4 h-4' src={x} alt="x" />
            <img className='w-4 h-4' src={facebook} alt="facebook" />
            <img className='w-5 h-5' src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact