import React from 'react'

const Timeline = () => {
  return (
    <div id='timeline' className='relative h-fit text-center py-20 px-10 flex flex-col justify-start items-center gap-14 border-b border-divider | sm:gap-20'>
      <div className='w-72 | flex flex-col justify-start items-center gap-4'>
        <h2 className='font-clashDisplay font-bold text-xl | sm:text-txl'>Timeline</h2>
        <p className='text-sxxl font-medium leading-6 | sm:w-81'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      </div>

      <div className='flex flex-col gap-7 max-w-smm | sm:max-w-300'>
        {/* 1 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4 | sm:relative sm:flex-col sm:w-full '>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20 | sm:h-32'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple | sm:w-12 sm:h-12'>
              <p className='sm:text-2xl'>1</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-2 | sm:absolute sm:-left-80 sm:top-24 sm:w-screen sm:flex-row sm:gap-56 sm:justify-center sm:items-end'>
            <div className='flex flex-col gap-2 | sm:text-right sm:justify-between sm:w-103'>
              <h2 className='font-bold text-text-purple | sm:text-2xl'>Hackathon Announcement</h2>
              <p className='sm:text-sxxl sm:leading-6'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
            <p className='font-bold text-text-purple | sm:text-2xl'>November 18, 2023</p>
          </div>
        </div>

        {/* 2 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4 | sm:relative sm:flex-col sm:w-full '>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20 | sm:h-32'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple | sm:w-12 sm:h-12'>
              <p className='sm:text-2xl'>2</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-4 | sm:absolute sm:-left-32 sm:top-24 sm:w-screen sm:flex-row-reverse sm:gap-56 sm:justify-center sm:items-end'>
            <div className='flex flex-col gap-2 | sm:text-left sm:justify-between sm:w-103'>
              <h2 className='font-bold text-text-purple | sm:text-2xl sm:pt-5'>Teams Registration begins</h2>
              <p className='sm:text-sxxl sm:leading-6'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
            </div>
            <p className='font-bold text-text-purple | sm:text-2xl sm:pb-6'>November 18, 2023</p>
          </div>
        </div>

        {/* 3 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4 | sm:relative sm:flex-col sm:w-full'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20 | sm:h-32'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple | sm:w-12 sm:h-12'>
              <p className='sm:text-2xl'>3</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-8 | sm:absolute sm:-left-80 sm:top-28 sm:w-screen sm:flex-row sm:gap-56 sm:justify-center sm:items-end'>
            <div className='flex flex-col gap-2 | sm:text-right sm:justify-between sm:w-103'>
              <h2 className='font-bold text-text-purple | sm:text-2xl'>Teams Registration ends</h2>
              <p className='sm:text-sxxl sm:leading-6 sm:w-99 sm:self-end'>Interested Participants are no longer Allowed to register</p>
            </div>
            <p className='font-bold text-text-purple sm:pb-5 | sm:text-2xl'>November 18, 2023</p>
          </div>
        </div>

        {/* 4 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4 | sm:relative sm:flex-col sm:w-full '>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20 | sm:h-32'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple | sm:w-12 sm:h-12'>
              <p  className='sm:text-2xl'>4</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-2 | sm:absolute sm:-left-32 sm:top-16 sm:w-screen sm:flex-row-reverse sm:gap-56 sm:justify-center sm:items-end'>
            <div className='flex flex-col gap-2 | sm:text-left sm:justify-between sm:w-103'>
              <h2 className='font-bold text-text-purple | sm:text-2xl sm:pt-10'>Announcement the accepted teams and ideas</h2>
              <p className='sm:text-sxxl sm:leading-6'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
            </div>
            <p className='font-bold text-text-purple | sm:text-2xl sm:pb-11'>November 18, 2023</p>
          </div>
        </div>

        {/* 5 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4 | sm:relative sm:flex-col sm:w-full '>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20 | sm:h-32'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple | sm:w-12 sm:h-12'>
              <p className='sm:text-2xl'>5</p>
            </span>
          </div>

          <div className='text-left h-full flex flex-col justify-between gap-2 | sm:absolute sm:-left-80 sm:top-10 sm:w-screen sm:flex-row sm:gap-56 sm:justify-center sm:items-end'>
            <div className='flex flex-col gap-2 | sm:text-right sm:justify-between sm:w-103'>
              <h2 className='font-bold text-text-purple | sm:text-2xl'>Getlinked Hackathon 1.0 Offically Begins</h2>
              <p className='sm:text-sxxl sm:leading-6'>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
            </div>
            <p className='font-bold text-text-purple | sm:text-2xl sm:pb-10'>November 18, 2023</p>
          </div>
        </div>

        {/* 6 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4 | sm:relative sm:flex-col sm:w-full'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20 | sm:h-32'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple | sm:w-12 sm:h-12'>
              <p className='sm:text-2xl'>6</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-2 | sm:absolute sm:-left-32 sm:top-24 sm:w-screen sm:flex-row-reverse sm:gap-56 sm:justify-center sm:items-end'>
            <div className='flex flex-col gap-2 | sm:text-left sm:justify-between sm:w-103 '>
              <h2 className='font-bold text-text-purple | sm:text-2xl'>Demo Day</h2>
              <p className='sm:text-sxxl sm:leading-6'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
            </div>
            <p className='font-bold text-text-purple | sm:text-2xl sm:pb-6'>November 18, 2023</p>
          </div>
        </div>

       
        {/* STABILIZER */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4 | sm:relative sm:flex-col sm:w-full'>
          <div className='text-left flex flex-col gap-2 | sm:text-right sm:justify-between '>
            <div className='flex flex-col gap-2 '>
              <h2 className='font-bold text-text-purple | sm:text-2xl'></h2>
              <p className='sm:text-sxxl text-transparent sm:leading-6'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on </p>
            </div>
            <p className='font-bold text-text-purple | sm:text-2xl'></p>
          </div>
        </div>

        <div className='w-'></div>
      </div>

    </div>
  )
}

export default Timeline