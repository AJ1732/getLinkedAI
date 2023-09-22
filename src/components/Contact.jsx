import React from 'react'
import { Link } from 'react-router-dom'
import back from '../files/vectors/back.svg'
import insta from '../files/images/instagram.svg'
import x from '../files/images/x.svg'
import facebook from '../files/images/facebook.svg'
import linkedin from '../files/images/linkedin.svg'

const Contact = () => {
  return (
    <div className=' bg-bg-two-purple h-fit py-12 px-10 border-b border-divider | flex flex-col justify-start items-center gap-10 | sm:flex-row-reverse sm:items-start sm:justify-between sm:px-4 '>
      <Link to={`../`} className='self-start sm:hidden'>
        <img src={back} alt="" />
      </Link>
      <div className='flex flex-col gap-6 justify-start items-center | sm:bg-privacy-div sm:w-110 sm:p-20 sm:rounded-xl sm:items-start sm:gap-8'>
        <div className='text-xl text-text-purple font-semibold font-clashDisplay self-start'>
          <h2>Questions or need assistance?</h2>
          <h2 className='sm:pt-2'>Let us know about it</h2>
        </div>

        <p className='text-xs self-start | sm:hidden'>Email us below to any question related to our event</p>
      
        <form className='flex flex-col gap-6 text-base | sm:w-full sm:gap-10'>
          <input 
            type="text"
            placeholder="Teams's Name"
            className='bg-input py-3.5 px-6 w-full border rounded' />
          <input 
            type="text"
            placeholder="Topic"
            className='bg-input py-3.5 px-6 border rounded | sm:hidden'  />
          <input 
            type="email"
            placeholder="Email"
            className='bg-input py-3.5 px-6 border rounded'  />
          <textarea 
            type="text"
            placeholder="Message"
            className='bg-input h-40 py-3.5 px-6 border rounded'  />
        </form>

        <button className='w-38 h-12 rounded my-6 mb-2 | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple | sm:self-start'>Submit</button>
      </div>

      <div className='sm:flex sm:flex-col sm:gap-5'>
        <div className='hidden | sm:block sm:flex sm:flex-col sm:gap-5 sm:mt-20 sm:font-medium'>
          <h2 className='font-clashDisplay text-text-purple text-txl font-semibold'>Get in touch</h2>

          <div className='text-base'>
            <p>Contact</p>
            <p>Information</p>
          </div>

          <div>
            <p>27,Alara Street</p>
            <p>Yaba 100012</p>
            <p>Lagos State</p>
          </div>

          <p>Call Us : 07067981819</p>

          <div>
            <p>we are open from Monday-Friday</p>
            <p>08:00am - 05:00pm</p>
          </div>
        </div>

        <div className='flex flex-col gap-2 sm:gap-4'>
          <h2 className='text-xs text-center text-text-purple font-medium | sm:text-left sm:text-base'>Share on</h2>
          <div className='flex justify-center items-center gap-4 | sm:justify-start'>
            <img className='w-5 h-5 | w-7 h-7' src={insta} alt="instagram" />
            <img className='w-4 h-4 | w-6 h-6' src={x} alt="x" />
            <img className='w-4 h-4 | w-6 h-6' src={facebook} alt="facebook" />
            <img className='w-5 h-5 | w-7 h-7' src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact