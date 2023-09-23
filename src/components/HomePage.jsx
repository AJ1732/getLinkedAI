import React from 'react'
import { Link } from 'react-router-dom';
import { ReactSVG } from "react-svg";
import underline from '../files/vectors/curvedUnderline.svg'
import lgUnderline from '../files/vectors/lgCurvedUnderline.svg'
import homepagePurple1 from '../files/images/homepagePurple1.png'
import homepagePurpleLaptop from '../files/images/homepagePurpleLaptop.png'
import homepagePurpleLaptop2 from '../files/images/homepagePurpleLaptop2.png'


const HomePage = () => {
  return (
    <div className='home h-110 relative sm:h-fit px-10 pt-8 | text-center | flex flex-col justify-start items-center gap-10 |  sm:h-100 sm:px-0 sm:gap-32 sm:pb-32'>
      <img className='absolute -top-2 z-0 opacity-50 bg-blend-hard-light sm:hidden' src={homepagePurple1} alt="" />
      <img className='absolute -top-2 z-0 opacity-50 bg-blend-hard-light hidden sm:block sm:-top-32 sm:-left-20' src={homepagePurpleLaptop} alt="" />
      
      <div className='z-10 flex flex-col justify-center items-center gap-10'>
        {/* div */}
        <div className='relative w-96 | sm:w-full sm:self-end'>
          <h2 className='font-serif font-bold text-base italic tracking-normal | sm:text-right sm:pr-5  sm:text-4xl'>Igniting a Revolution in HR Innovation</h2>
          <ReactSVG src={underline} className='absolute right-8 | sm:hidden sm:right-10' />
          <ReactSVG src={lgUnderline} className='absolute right-8 hidden | sm:block sm:right-8' />
        </div>

        {/*  */}   
        <div className='flex flex-col justify-center items-center gap-4 | sm:flex-row sm:h-96 sm:w-full justify-between sm:w-screen sm:max-w-200'>
          <div className=''>
            <div className='flex flex-col justify-center items-center gap-2 | sm:h-full sm:text-left sm:justify-between sm:items-start sm:gap-5'>
              <div className='font-clashDisplay text-txl font-bold tracking-wide | sm:pt-10 sm:text-6xl'>
                <h2>getlinked Tech</h2> 

                <div className='flex justify-center items-center'>
                  <h2>Hackathon <span className='text-text-purple'>1.0</span></h2>
                  <img className='w-8 h-8 | sm:w-16 sm:h-16' src="https://s3-alpha-sig.figma.com/img/1971/15ec/e07a2f6b05388994672be66411f81f42?Expires=1696204800&Signature=UuvuW64j93ZUVltNLOX~es8PMxtHlWwJWARnTkR6n31bFmCOyQew8t8lgHBjSavsM0zDiKwaG4FNQQjFHQCi6qB0f8G4uxL4pbBYRjJy7zMNg1oHfdzGEIhowzBJdvb6Old5YbHRxOgpOJ2h1GDbXF4v6h6yBSt665XOnIFWjets9HHD2n7BGe56N8yO~iu4Vqhk8mUgPEF-qJIDIaYgJGy4uF-QCQ~tYignyBmLJ5QHU6Kapn7A1dPA5s6wceHqXNLfuXAWAtMBLmrTZ1ZQCImqtXmEHJPNfudjvfUdMp1V6xSHeIrqReXNXAY4YU8mp80T49oP3l1FK5joGlFY6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                  <img className='w-5 h-5 | sm:w-12 sm:h-12' src="https://s3-alpha-sig.figma.com/img/ad71/a4dd/666167cffb0c9bf39fca6a2d11c90feb?Expires=1696204800&Signature=B06x0hH~eDZfVMO3f6l5vh~b-4Cmm3ieK3dsajMfQOAhzPCDV0Aqb3sBSsJrQlzRhYkxv7CWT2gK9fDy0trv2y1kBcaVESQZizi5YqdvkbfwklcEF1ZI6uAbzLG6R6imDmdBefBWRJNDzCWKK1dDDxJZzRLyG3zgGuP9egPcdMm79Wxq2mxVAyH-mFZxk0eQlVmQcI9uZOUqnAVpuvJR2JbPtc3ET3bRR14uctMXv6SQKJo3k9yFO1G8LZUokRiYUSJDVYFgK~324CNaFfMP~w5zhNvhDce60bFiCnn-5wExmoNDlUofNuNJaRBLZEK~E5AZSoTjFXDs9tLlpk3xbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                </div>
              </div>

              <p className='text-ssxl font-normal w-83 tracking-wider | sm:w-109 sm:text-xl'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

              <Link to={`register`} className='w-38 h-12 py-3 rounded my-6 mb-2 | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple | mt-8'>Register</Link>

              <div className='text-unica font-normal | flex gap-2 | sm:mt-16 sm:gap-6'>
                <span className='flex items-end'>
                  <p className='text-5xl h-11 | sm:text-6xl sm:h-13'>00</p>
                  <p className='text-sxxl'>H</p>
                </span>
                <span className='flex items-end'>
                  <p className='text-5xl h-11 | sm:text-6xl sm:h-13'>00</p>
                  <p className='text-sxxl'>M</p>
                </span>
                <span className='flex items-end'>
                  <p className='text-5xl h-11 | sm:text-6xl sm:h-13'>00</p>
                  <p className='text-sxxl'>S</p>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className=' bg-blend-luminosity'>
          <img className='grayscale bg-blend-luminosity | absolute -right-2 w-140 bottom-0 | sm:bottom-56 sm:w-110 sm:-right-10' src="https://s3-alpha-sig.figma.com/img/2cea/d700/cfbd4eb06b68c33fac2a89295904df2c?Expires=1696204800&Signature=Pl8bxQP7ZWA8IQ~PcHxowSaaCsU8KsCWsjtAdV6WbycHB9CRSS3HmiUrIoLq7x8FSDNA5qhlVqpaF9PjBCB7vHkotMawDRLRihUUfrQSiMjhzG1sXACFmEqCbgbAOnmThDsh05K5hvMNlu0aZjKfhaWi3WigTfEpzQu79zcsA-xggSvAG3k5-pvQEoXQiViO6zISNYUBUgSoT6iO4SJ7jwGKZOA1tL3MGCzbwMyaTEqn8yLde~kSrWX34kogEmUFU9ziDrla9dgaxjRFUFtuDiw2J5NKDjGqV5QjoAQwb~SsNsFDcCq3Jq76s-4WdTGa2vBih1ibhsrAHsdeW0m6xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <img className='bg-blend-hard-light opacity-60 | absolute -right-6 bottom-1 | sm:z-30 sm:bottom-56 sm:w-110 sm:-right-16' src="https://s3-alpha-sig.figma.com/img/396e/75fa/de110c53101d2c3b8d00dc3a9a731502?Expires=1696204800&Signature=Ky6eZfwSXR-K8ofkhqoUpCsffIuoP6W9hytfsWN1hmPVKG1IRlPD69f8Xq9zvmLC3tSwADxA4iRGDYcvhGpX~md2L2ndUj~F7sJwwiXmykZS96haoFNDyNGtksMtryjvuzr~Val2Vgbq0MybjztkMKoHEhmckVjTg8GilY6nF5GnBagvXUhoYQg8JgdQvKt-Jt8cZZCCFAAVajGpknnX5~W~~hlHHL~610Fy4t5~sIozGBSrGfluPyoZmKOvdIcPKaGkRZLzIqjGyAa6XIkikeackxHDwHirgwga2CqPasKa2xhvJJyi0H~COH8Vxb9~grKAAxpnxPxpSUEWh4QKGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        </div>
      </div>
      <img className='absolute -top-2 opacity-50 bg-blend-hard-light hidden sm:block sm:-top-32 sm:-right-40 sm:z-20' src={homepagePurpleLaptop2} alt="" />
    </div>






  
  )
}

export default HomePage