import React from 'react'
import check from '../files/images/greenChecked.svg'
import secure from '../files/images/secure.svg'
import privacyPurple from '../files/images/privacyPurple.png'
import privacyPurple2 from '../files/images/privacyPurple2.png'


const Privacy = () => {
  return (
    <div className='relative h-fit py-16 text-center px-10 | flex flex-col justify-start items-center gap-10 | sm:relative sm:px-0 sm:py-40 sm:flex-row sm:justify-between'>
      <img className='absolute -top-40 -right-10 z-0 opacity-40 bg-blend-hard-light | sm:hidden' src={privacyPurple} alt="" />
      <div className='z-10 flex flex-col justify-center items-center gap-8 | sm:text-left sm:items-start sm:gap-16 sm:-m-8'>
        <div className='flex flex-col justify-center items-center gap-5 | sm:items-start sm:gap-8'>
          <div className='flex flex-col justify-center items-center gap-2 | sm:items-start sm:gap-4'>
            <h2 className='w-52 text-xl font-clashDisplay font-bold tracking-wide | sm:text-txl sm:w-99'>Privacy Policy and <span className='text-text-purple | '>Terms</span></h2>
            <p className='text-xs text-gray | sm:text-sxxl'>Last updated on September 12, 2023</p>
          </div>
          <p className='w-72 text-xs | sm:text-sxxl sm:w-103 sm:'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
        </div>

        <div className='w-73 bg-privacy-div | py-11 px-5 | border border-text-purple rounded-m | sm:w-110 sm:text-left sm:px-16 sm:py-14'>
          <p className='text-xs !leading-7 : sm:text-sxxl sm:!leading-8'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
          
          <div className='mt-6 flex flex-col justify-center items-center gap-5 | sm:items-start'>
            <div className='text-left font-bold'>
              <h2 className='text-ssxl text-text-purple | sm:text-base'>Licensing Policy</h2>
              <p className='mt-1 text-xs | sm:text-sxxl sm:leading-8'>Here are terms of our Standard License:</p>
            </div>

            <div className='flex justify-between items-start gap-4 |'>
              <img className='mt-1 | sm:mt-2' src={check} alt="" />
              <p className='text-xs text-left |  sm:text-sxxl sm:leading-8'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
            </div>

            <div className='flex justify-between items-start gap-4'>
              <img className='mt-1 | sm:mt-2' src={check} alt="" />
              <p className='text-xs text-left | sm:text-sxxl sm:leading-8'>You are licensed to use the item available at any free source sites, for your project developement</p>
            </div>
          </div>

          <button className='w-28  py-3 rounded-md my-6 mb-2 | text-xs font-medium tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple | sm:ml-40 '>Read More</button>
        </div>
      </div>

      <div className='relative flex flex-col justify-center items-center | sm:h-full sm:self-start sm:-mt-20 sm:-mr-8'>
        <img className='sm:w-103 sm:' src={secure} alt="" />
        <img className='w-140 absolute -bottom-2 | sm:bottom-32' src="https://s3-alpha-sig.figma.com/img/6db9/36c6/c29a7f48697d2a5a69348e7d27a23b89?Expires=1696204800&Signature=bNxstTSEYXbZoBpwY1daRPhKxKT2QWcslEajrqcfM3PkXwQzsldJdVZMdFuDNGD0~OvSu0fMkW~B4w61OFHsHsU-xOBPxk4KGu5yJSoO~sWX8sZnErextViXDadeRA~JiVv14mGC8C3Zbcgd2wrcQ99WF2sO5PWiie3VNrr13n5ih485ZT318I4rgz8VgOXeuJelWcIKmR4K6baFO9SFd5TWgbKYQAvj8cL0BqLpA5u~LZpiaSdbKUE2B1yxZEiMieWWYbrUZWMf1hgZ1AB9nwRVcW2SscfUPWShC4SQOIuc6v05HxSnce9Mk45Ux6mMHhAonaddjBYxs3b5XKyJSQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        {/* img */}
      </div>   
      <img className='absolute bottom-96 -left-10 z-0 opacity-40 bg-blend-hard-light | sm:hidden' src={privacyPurple2} alt="" />

    </div>
  )
}

export default Privacy