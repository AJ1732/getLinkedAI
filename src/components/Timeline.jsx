import React from 'react'

const Timeline = () => {
  return (
    <div id='timeline' className='h-fit text-center py-20 px-10 flex flex-col justify-start items-center gap-14'>
      <div className='w-72 | flex flex-col justify-start items-center gap-4'>
        <h2 className='font-clashDisplay font-bold text-xl'>Timeline</h2>
        <p className='text-sxxl font-medium leading-6'>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
      </div>

      <div className='flex flex-col gap-7 max-w-smm'>
        {/* 1 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple'>
              <p>1</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-text-purple'>Hackathon Announcement</h2>
              <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
            </div>
            <p className='font-bold text-text-purple'>November 18, 2023</p>
          </div>
        </div>

        {/* 2 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple'>
              <p>2</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-text-purple'>Teams Registration begins</h2>
              <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
            </div>
            <p className='font-bold text-text-purple'>November 18, 2023</p>
          </div>
        </div>

        {/* 3 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple'>
              <p>3</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-text-purple'>Teams Registration ends</h2>
              <p>Interested Participants are no longer Allowed to register</p>
            </div>
            <p className='font-bold text-text-purple'>November 18, 2023</p>
          </div>
        </div>

        {/* 4 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple'>
              <p>4</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-text-purple'>Announcement the accepted teams and ideas</h2>
              <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
            </div>
            <p className='font-bold text-text-purple'>November 18, 2023</p>
          </div>
        </div>

        {/* 5 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple'>
              <p>5</p>
            </span>
          </div>

          <div className='text-left h-full flex flex-col justify-between gap-2'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-text-purple'>Getlinked Hackathon 1.0 Offically Begins</h2>
              <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
            </div>
            <p className='font-bold text-text-purple'>November 18, 2023</p>
          </div>
        </div>

        {/* 6 */}
        <div className='font-mont text-xs tracking-wide flex justify-center items-center gap-4'>
          <div className='flex flex-col justify-center items-center gap-2 text-center'>
            <div className='bg-text-purple w-0.5 h-20'></div>
            <span className='flex justify-center items-center font-bold font-mont | w-6 h-6 p-2 rounded-full | bg-gradient-to-l from-lg-from-purple to-text-purple'>
              <p>6</p>
            </span>
          </div>

          <div className='text-left flex flex-col gap-2'>
            <div className='flex flex-col gap-2'>
              <h2 className='font-bold text-text-purple'>Demo Day</h2>
              <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
            </div>
            <p className='font-bold text-text-purple'>November 18, 2023</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Timeline