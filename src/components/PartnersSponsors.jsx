import React from 'react'
import partnerPurpleLaptop from '../files/images/partnerPurpleLaptop.png'
import partnerPurpleLaptop2 from '../files/images/partnerPurpleLaptop2.png'


const PartnersSponsors = () => {
  return (
    <div className='relative h-fit py-10 pb-24 text-center px-10 border-b border-divider | flex flex-col justify-start items-center gap-10'>
      <img className='absolute -top-40 -right-10 z-0 opacity-40 bg-blend-hard-light | hidden sm:block sm:-left-40 sm:-top-60' src={partnerPurpleLaptop} alt="" />
      
      {/* HEADLINE */}
      <div className='flex flex-col justify-center items-center gap-2 tracking-wide | sm:gap-6'>
        <h2 className='font-clashDisplay font-bold text-xl | sm:text-txl'>Partners and Sponsors</h2>
        <p className='w-80 font-mont text-xs leading-tight | sm:sxxl sm:w-103 sm:leading-7 sm:tracking-wider'>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
      </div>
      
      {/* SPONSORS */}

      <div className='w-80 h-40 bg-sponsor | flex justify-center items-center border border-text-purple rounded-m | sm:w-150 sm:h-90'>

        <div className='grid grid-cols-3 items-center | w-64 h-24 | sm:w-140 sm:h-80'>
          {/* 1 */}
          <div className='h-12 flex justify-center items-center'>
            <img className='w-8 | sm:w-32' src="https://s3-alpha-sig.figma.com/img/c302/5c90/f36f8350dd7046a7e686dcf0f8ca38b8?Expires=1696204800&Signature=Q7AuoTrm1ct6Bqgwp5S~bZAzvXq244ERK3mWgU2zRUrEoGe1d4Bs2ukcefUjS4BN~FOCzv5Nh6Wph9M4kbsp2JLjy2wbHimfNqoloafrhdFjDy3AMQF60Y99JTH0bmE-DlJezpSCHd0K1VPKW9fUBifJlP1q9mHRkBoqXHHM8nLdhgP89CN6bg8hkq2tVtUZ-o~sFtKCLW3TSvNytn23N56-VD7kzwjtB6adbWKyXJoScKXDhyW1Tp8v6DMrYa28CoXSziBfr~y8r1xvgM5BXxlwb9l5s3sikaQqriDSupIj9TrsVKkHZ8OMPzUFunXaeQDgILhQI3MRH9WSQDuDNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>

          {/* 2 */}
          <div className='h-12 flex justify-center items-center'>
            <img className='w-14 | sm:w-52' src="https://www.figma.com/file/H58055Mwc3upxBcouePszn/image/65eba731c0db41100dfcde5207298096801606d8" alt="" />
          </div>

          {/* 3 */}
          <div className='h-12 flex justify-center items-center'>
            <img className='w-8 | sm:w-32' src="https://s3-alpha-sig.figma.com/img/3110/16c2/2a1a35dfdec7ac198c2cd0dbbbee4b99?Expires=1696204800&Signature=lWoER8-~mZBwqYT6iGbaEq7jxtdQK-~idmQO-66l1Irpp4OFVm-6Wqj-T1ez7SgT5zLMDM-jNQhbiTZrrpoDXbqg2aNxdHOMPnOpj8sMvyHGVTZiVuPc3pLyWR2-Ufdjj2pKBepCZtfoe25lWWK4OXdwqlYXRDEG5MR6Z1gTLF3tNtmpQHYc2Jkyk5clz3FXsLADCvK3n1luTP2azIkaTITOGPHVffPRcPlmqfhXRxJ~QL29VMeIgynzUokeo7d4WqojecZ3Oww6N5b6CFK8RITVbqYRfu2MhixpAq4SNJHctwCv1KJpJdDDYt0z~a2ntuC2lftvQ~pJtqK4t7f4GA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          </div>

          {/* 4 */}
          <div className='h-12 flex justify-center items-center'>
            <img className='w-8 | sm:w-36' src="https://www.figma.com/file/H58055Mwc3upxBcouePszn/image/33183e9d7631ab09bcc12b5ae0400c3117ab3b83" alt="" />
          </div>

          {/* 5 */}
          <div className='h-12 flex justify-center items-center'>
            <p className='font-typoHoop text-xs | sm:text-5xl'>
              pay<span className='text-blue'>box</span>
            </p>
          </div>

          {/* 6 */}
          <div className='h-12 relative flex flex-col justify-center items-center'>
            <p className='font-voces text-xs | sm:text-2.5xl'>
              Vuzual <span className='text-red font-volkhov'>Plus</span>
            </p>
            <p className='absolute bottom-4 right-2 font-voces text-ssl | sm:text-xsl sm:-bottom-2 sm:right-12'>Design Studios</p>
          </div>


        </div>
      </div>
      <img className='absolute -top-40 -right-10 z-0 opacity-40 bg-blend-hard-light | hidden sm:block sm:-right-40 sm:top-64' src={partnerPurpleLaptop2} alt="" />
    </div>
  )
}

export default PartnersSponsors