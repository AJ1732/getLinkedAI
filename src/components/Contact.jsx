import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import back from '../files/vectors/back.svg'
import insta from '../files/images/instagram.svg'
import x from '../files/images/x.svg'
import facebook from '../files/images/facebook.svg'
import linkedin from '../files/images/linkedin.svg'
import contactPurple from '../files/images/contactPurple.png'
import contactPurpleLaptop from '../files/images/contactPurpleLaptop.png'

const Contact = () => {
  const baseUrl = "https://backend.getlinked.ai"

  // To post registration form to api
  const [contactData, setContactData] = useState({
    "email":"",
    "team_name": "",
    "team_topic": "",
    "message":"",
  })

  const handle = (e) => {
    const newData = {...contactData}
    newData[e.target.id] = e.target.value
    setContactData(newData)
  }

  console.log(contactData);


  async function postContact(e) {
    e.preventDefault();

    try {
      let result = await fetch(`${baseUrl}/hackathon/contact-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData)
      })

      console.log(result);
    } catch(e) {
      console.log(e);
    }
  }


  return (
    <div className='z-30  relative bg-bg-two-purple h-fit py-12 px-10 border-b border-divider | flex flex-col justify-start items-center gap-10 | sm:flex-row-reverse sm:items-start sm:justify-between sm:px-4 '>
      <img className='absolute top-2 -left-0 z-0 opacity-40 bg-blend-hard-light | sm:hidden' src={contactPurple} alt="" />
      <img className='absolute top-2 -left-0 z-0 opacity-40 bg-blend-hard-light | hidden sm:block sm:-left-28 sm:-top-56' src={contactPurpleLaptop} alt="" />
      
      <Link to={`../`} className='z-30 self-start sm:hidden'>
        <img src={back} alt="" />
      </Link>
      <div className='z-30 flex flex-col gap-6 justify-start items-center | sm:bg-privacy-div sm:w-110 sm:p-20 sm:rounded-xl sm:items-start sm:gap-8'>
        <div className='text-xl text-text-purple font-semibold font-clashDisplay self-start'>
          <h2>Questions or need assistance?</h2>
          <h2 className='sm:pt-2'>Let us know about it</h2>
        </div>

        <p className='text-xs self-start | sm:hidden'>Email us below to any question related to our event</p>
      
        <form onSubmit={(e) => postContact(e)} className='flex flex-col gap-6 text-base | sm:w-full sm:gap-10'>
          <input 
            type="text"
            id='team_name'
            required
            onChange={ (e) => handle(e) }
            placeholder="Teams's Name"
            className='bg-input py-3.5 px-6 w-full border rounded' />
          <input 
            type="text"
            id='team_topic'
            required
            onChange={ (e) => handle(e) }
            placeholder="Topic"
            className='bg-input py-3.5 px-6 border rounded | sm:hidden'  />
          <input 
            type="email"
            id='email'
            required
            onChange={ (e) => handle(e) }
            placeholder="Email"
            className='bg-input py-3.5 px-6 border rounded'  />
          <textarea 
            type="text"
            id='message'
            required
            onChange={ (e) => handle(e) }
            placeholder="Message"
            className='bg-input h-40 py-3.5 px-6 border rounded'  />
          
          
          <button className='w-38 h-12 rounded my-6 mb-2 self-center | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple | sm:w-'>Submit</button>
          
        </form>

      </div>

      <div className='z-30 sm:flex sm:flex-col sm:gap-5'>
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