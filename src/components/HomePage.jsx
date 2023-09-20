import React from 'react'
import { ReactSVG } from "react-svg";
import underline from '../files/vectors/curvedUnderline.svg'


const HomePage = () => {
  return (
    <div className='h-fit px-10 | text-center | flex flex-col justify-center items-center gap-10'>
      <div className='w-80 relative'>
        <h2 className='font-serif font-bold text-base italic tracking-normal'>Igniting a Revolution in HR Innovation</h2>
        <ReactSVG src={underline} className='absolute right-4' />
      </div>

      {/*  */}
      <div>
        <div className='font-mont | flex flex-col justify-center items-center gap-2'>
          <div className='font-clashDisplay text-txl font-bold tracking-wide'>
            <h2>getlinked Tech</h2> 

            <div className='flex justify-center items-center'>
              <h2>Hackathon <span className='text-text-purple'>1.0</span></h2>
              <img className='w-8 h-8' src="https://s3-alpha-sig.figma.com/img/1971/15ec/e07a2f6b05388994672be66411f81f42?Expires=1696204800&Signature=UuvuW64j93ZUVltNLOX~es8PMxtHlWwJWARnTkR6n31bFmCOyQew8t8lgHBjSavsM0zDiKwaG4FNQQjFHQCi6qB0f8G4uxL4pbBYRjJy7zMNg1oHfdzGEIhowzBJdvb6Old5YbHRxOgpOJ2h1GDbXF4v6h6yBSt665XOnIFWjets9HHD2n7BGe56N8yO~iu4Vqhk8mUgPEF-qJIDIaYgJGy4uF-QCQ~tYignyBmLJ5QHU6Kapn7A1dPA5s6wceHqXNLfuXAWAtMBLmrTZ1ZQCImqtXmEHJPNfudjvfUdMp1V6xSHeIrqReXNXAY4YU8mp80T49oP3l1FK5joGlFY6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              <img className='w-5 h-5' src="https://s3-alpha-sig.figma.com/img/ad71/a4dd/666167cffb0c9bf39fca6a2d11c90feb?Expires=1696204800&Signature=B06x0hH~eDZfVMO3f6l5vh~b-4Cmm3ieK3dsajMfQOAhzPCDV0Aqb3sBSsJrQlzRhYkxv7CWT2gK9fDy0trv2y1kBcaVESQZizi5YqdvkbfwklcEF1ZI6uAbzLG6R6imDmdBefBWRJNDzCWKK1dDDxJZzRLyG3zgGuP9egPcdMm79Wxq2mxVAyH-mFZxk0eQlVmQcI9uZOUqnAVpuvJR2JbPtc3ET3bRR14uctMXv6SQKJo3k9yFO1G8LZUokRiYUSJDVYFgK~324CNaFfMP~w5zhNvhDce60bFiCnn-5wExmoNDlUofNuNJaRBLZEK~E5AZSoTjFXDs9tLlpk3xbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
          </div>

          <p className='text-ssxl font-normal w-66 tracking-wider'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>

          <button className='w-38 h-12 rounded my-6 mb-2 | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple'>Register</button>

          <div className='text-unica font-normal | flex gap-2'>
            <span className='flex items-end'>
              <p className='text-5xl h-11'>00</p>
              <p className='text-sxxl'>H</p>
            </span>
            <span className='flex items-end'>
              <p className='text-5xl h-11'>00</p>
              <p className='text-sxxl'>M</p>
            </span>
            <span className='flex items-end'>
              <p className='text-5xl h-11'>00</p>
              <p className='text-sxxl'>S</p>
            </span>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='relative bg-blend-luminosity'>
        <img className='grayscale bg-blend-luminosity | w-96' src="https://s3-alpha-sig.figma.com/img/2cea/d700/cfbd4eb06b68c33fac2a89295904df2c?Expires=1696204800&Signature=Pl8bxQP7ZWA8IQ~PcHxowSaaCsU8KsCWsjtAdV6WbycHB9CRSS3HmiUrIoLq7x8FSDNA5qhlVqpaF9PjBCB7vHkotMawDRLRihUUfrQSiMjhzG1sXACFmEqCbgbAOnmThDsh05K5hvMNlu0aZjKfhaWi3WigTfEpzQu79zcsA-xggSvAG3k5-pvQEoXQiViO6zISNYUBUgSoT6iO4SJ7jwGKZOA1tL3MGCzbwMyaTEqn8yLde~kSrWX34kogEmUFU9ziDrla9dgaxjRFUFtuDiw2J5NKDjGqV5QjoAQwb~SsNsFDcCq3Jq76s-4WdTGa2vBih1ibhsrAHsdeW0m6xg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        <img className='bg-blend-hard-light opacity-60 | absolute -top-4 -right-2' src="https://s3-alpha-sig.figma.com/img/396e/75fa/de110c53101d2c3b8d00dc3a9a731502?Expires=1696204800&Signature=Ky6eZfwSXR-K8ofkhqoUpCsffIuoP6W9hytfsWN1hmPVKG1IRlPD69f8Xq9zvmLC3tSwADxA4iRGDYcvhGpX~md2L2ndUj~F7sJwwiXmykZS96haoFNDyNGtksMtryjvuzr~Val2Vgbq0MybjztkMKoHEhmckVjTg8GilY6nF5GnBagvXUhoYQg8JgdQvKt-Jt8cZZCCFAAVajGpknnX5~W~~hlHHL~610Fy4t5~sIozGBSrGfluPyoZmKOvdIcPKaGkRZLzIqjGyAa6XIkikeackxHDwHirgwga2CqPasKa2xhvJJyi0H~COH8Vxb9~grKAAxpnxPxpSUEWh4QKGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
    </div>
  )
}

export default HomePage