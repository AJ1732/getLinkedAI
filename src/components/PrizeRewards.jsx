import React from 'react'
// import back from '../files/images/prizeBg.png'
import criteriaPurple from '../files/images/criteriaPurple.png'
import criteriaPurple2 from '../files/images/criteriaPurple2.png'
import criteriaPurpleLaptop from '../files/images/criteriaPurpleLaptop.png'
import criteriaPurpleLaptop2 from '../files/images/criteriaPurpleLaptop2.png'

const PrizeRewards = () => {
  return (
    <div className='relative h-fit py-20 text-center px-10 border-b border-divider | flex flex-col justify-start items-center gap-10 | sm:gap-56 sm:px-0'>
      <img className='absolute top-12 -left-10 z-0 opacity-30 bg-blend-hard-light | sm:hidden' src={criteriaPurple} alt="" />
      <img className='absolute -top-40 -right-10 z-0 opacity-40 bg-blend-hard-light | hidden sm:block sm:-left-40 sm:-top-40' src={criteriaPurpleLaptop} alt="" />
      
      <div className='z-10 flex flex-col justify-center items-center gap-4 tracking-wide | sm:text-left sm:items-start sm:self-end sm:mr-40'>
        <h2 className='w-28 text-xl font-clashDisplay font-bold'>Prizes and <span className='text-text-purple'>Rewards</span></h2>
        <p className='w-64 font-mont  text-xs !leading-5 | sm:w-80'>Highlight of the prizes or rewards for winners and for participants.</p>
      </div>

      <div className='z-10 flex flex-col justify-start items-center gap-10 | sm:flex-row sm:relative '>
        <img className='w-80 | sm:w-109 sm:absolute sm:-top-40' src="https://s3-alpha-sig.figma.com/img/6d26/0bee/51305b717b893b93f9a9003c68127309?Expires=1696204800&Signature=O71qbHAENksr649e63I7ZDY9xY-YM4hpkm9ZbJhi9IgibjJH8yCVIz9cNoQzs5Ua0WgAm~rQwlCb35jNTp63DjurQnPtAQ6qSr2gwM9u8h08sN8~QMe9-ZFb4FmUagyw5Lq4iDVD3MnrmTDE3ayVt6ZVz7AIprlI-SVQnCiCLr13OgfCEQrHCipwR7GmfA1c3slx2Sy9ewcEGg1L7Kvb3UdTLP5CFn1PewbrDbNT6WItPESojHKHdiKxaf76U74P5pIFmR1LZwVth-HmZt6ttCiUZGi7~SJrPb3NjFoGJflFQO2pUts~yi6D-FllTUXBUVDA3RlTQsqouScUyf4tsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      
        <div className='relative mt-10 flex justify-center items-center gap-5 | sm:w-1/2 sm:ml-left'>
          {/* 2nd */}
          <div className='relative flex flex-col justify-center items-center'>
            <img className='w-20 absolute -top-10 | sm:w-44 sm:-top-20' src="https://s3-alpha-sig.figma.com/img/1171/bc23/fa5eb65fb20eea399061e6572c711587?Expires=1696204800&Signature=TkWvVLScxGzCx961HoM8pXhtlid0N5R4gdzFI9uDCeZNLmqhzkBCvecZLpcRTb3lrHv5c6mQzqiiucKZkFy-up0nTubBjZ7imCUAmS4hboB7H1pAhkJKwy0nDE14D1lR6wJ8Z4nMlvarkFcnH4NBViC3GpaEhgy9lnCa~iM-fTjOrJYIRXi2znl2xiv8SZ3iNUF50tc7XcNA6WNaCBRm-8AsLMHRc2hXZ5g~XABBC~2KBmvkWqzH4spdcmY~Uxo3xcQ2oVQFMkHVph1UKv2gEP2fRkwBAZit-AuhbqPOStZCGtfmbTjANjd-myfml0LCrrlaqWBb9PmTfspof9NPrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

            <div className='w-24 h-32 bg-second-place border border-text-purple rounded-lg | sm:w-52 sm:h-72'>
              <div className='mt-12 | flex flex-col gap-1 font-mont text-xs | sm:mt-30 sm:gap-0'>
                <h2 className='font-bold | sm:text-4xl'>2nd</h2>
                <p className='sm:text-2xl sm:font-semibold'>Runner</p>
                <p className='text-text-purple text-sxxl font-bold | sm:text-txl sm:mt-5' >N300,000</p>
              </div>
            </div>
          </div>

          {/* 1st */}
          <div className=' flex flex-col justify-center items-center'>
            <img className='w-32 absolute -top-14 | sm:w-72 sm:-top-44' src="https://s3-alpha-sig.figma.com/img/ef29/8d92/90feb3795f49339c8842d9e26625e7f4?Expires=1696204800&Signature=DwFZbKACBGw7-k8mz4gF-zvSVSKJxgKIOLFhVSI5Zm6KaDH-kwSd6VF6w4p1ofbleAvlAhvh-8fvSKF-apeI7irRA9U6ZQyT~95FyGwZ2tWD4tJHozvvWzohouRoZfKpDF-Dxv3wpH8SPIrsSMc1JQNoLOCOz~fxO8Ove7LCwyCtcFfLy1D5-QNMCb8AUZB4kdzT-U3ML8JPO8u10O1nJk4a3Jegb3QbqSlfx99U9GxLV9~Ntt1SvHeR~2N49i548OxdLGJa-k-7N0hvHVnN1Te~qcKdm6BwRGKLCZtYKqlUhWUYmLTbQ3LMGfE21JgAaadJZpVBn25z5QozZi4ySg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

            <div className='w-24 h-40 bg-first-place border border-first rounded-lg | sm:w-52 sm:h-80'>
              <div className='mt-20 | flex flex-col gap-1 font-mont text-xs | sm:mt-36 sm:pt-2 sm:gap-4'>
                <h2 className='font-bold sm:text-2.5xl'>1st</h2>
                <p className='sm:text-2xl sm:font-semibold'>Runner</p>
                <p className='text-first text-sxxl font-bold | sm:text-txl sm:mt-5' >N400,000</p>
              </div>
            </div>
          </div>

          {/* 3rd */}
          <div className='relative flex flex-col justify-center items-center'>
            <img className='w-20 absolute -top-10 | sm:w-44 sm:-top-20' src="https://www.figma.com/file/H58055Mwc3upxBcouePszn/image/3d67878efccec605eb13a5ac599512e085e1d8fd" alt="" />

            <div className='w-24 h-32 bg-second-place border border-text-purple rounded-lg | sm:w-52 sm:h-72'>
              <div className='mt-12 | flex flex-col gap-1 font-mont text-xs | sm:mt-30 sm:gap-0'>
                <h2 className='font-bold | sm:text-4xl'>3rd</h2>
                <p className='sm:text-2xl sm:font-semibold'>Runner</p>
                <p className='text-text-purple text-sxxl font-bold | sm:text-txl sm:mt-5' >N150,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='absolute -bottom-20 -right-2 z-0 opacity-30 bg-blend-hard-light | sm:hidden' src={criteriaPurple2} alt="" />
      <img className='absolute -top-40 -right-10 z-0 opacity-40 bg-blend-hard-light | hidden sm:block sm:-right-40 sm:top-56' src={criteriaPurpleLaptop2} alt="" />

    </div>
  )
}

export default PrizeRewards