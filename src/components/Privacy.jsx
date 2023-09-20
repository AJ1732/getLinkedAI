import React from 'react'
import check from '../files/images/greenChecked.svg'
import secure from '../files/images/secure.svg'

const Privacy = () => {
  return (
    <div className=' h-fit py-16 text-center px-10 border-b border-divider | flex flex-col justify-start items-center gap-10'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='w-52 text-xl font-clashDisplay font-bold tracking-wide'>Privacy Policy and <span className='text-text-purple'>Terms</span></h2>
            <p className='text-xs text-gray'>Last updated on September 12, 2023</p>
          </div>
          <p className='w-72 text-xs'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
        </div>

        <div className='w-73 bg-privacy-div | py-11 px-5 | border border-text-purple rounded-m'>
          <p className='text-xs !leading-7'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
          
          <div className='mt-6 flex flex-col justify-center items-center gap-5'>
            <div className='text-left font-bold'>
              <h2 className='text-ssxl text-text-purple'>Licensing Policy</h2>
              <p className='mt-1 text-xs'>Here are terms of our Standard License:</p>
            </div>

            <div className='flex justify-between items-start gap-4'>
              <img className='mt-1' src={check} alt="" />
              <p className='text-xs text-left'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
            </div>

            <div className='flex justify-between items-start gap-4'>
              <img className='mt-1' src={check} alt="" />
              <p className='text-xs text-left'>You are licensed to use the item available at any free source sites, for your project developement</p>
            </div>
          </div>

          <button className='w-28  py-3 rounded-md my-6 mb-2 | text-xs font-medium tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple'>Read More</button>
        </div>
      </div>

      <div className='relative flex flex-col justify-center items-center'>
        <img src={secure} alt="" />
        <img className='w-screen absolute -bottom-2' src="https://s3-alpha-sig.figma.com/img/6db9/36c6/c29a7f48697d2a5a69348e7d27a23b89?Expires=1696204800&Signature=bNxstTSEYXbZoBpwY1daRPhKxKT2QWcslEajrqcfM3PkXwQzsldJdVZMdFuDNGD0~OvSu0fMkW~B4w61OFHsHsU-xOBPxk4KGu5yJSoO~sWX8sZnErextViXDadeRA~JiVv14mGC8C3Zbcgd2wrcQ99WF2sO5PWiie3VNrr13n5ih485ZT318I4rgz8VgOXeuJelWcIKmR4K6baFO9SFd5TWgbKYQAvj8cL0BqLpA5u~LZpiaSdbKUE2B1yxZEiMieWWYbrUZWMf1hgZ1AB9nwRVcW2SscfUPWShC4SQOIuc6v05HxSnce9Mk45Ux6mMHhAonaddjBYxs3b5XKyJSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        {/* img */}
      </div>
      
    </div>
  )
}

export default Privacy