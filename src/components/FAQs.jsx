import React from 'react'

const FAQs = () => {
  return (
    <div id='FAQs' className='h-fit pt-14 pb-10 px-10 text-center | flex flex-col justify-start items-center gap-20 border-b border-divider | sm:flex-row sm:w-full sm:justify-between sm:py-40 sm:gap-0 sm:w-full'>
      <div className='flex flex-col justify-start items-center gap-10  | sm:w-1/2 sm:gap-16'>
        <div className='flex flex-col justify-start items-center gap-2 | sm:text-left sm:self-start sm:pl-4 sm:gap-4'>
          <h2 className='w-44 font-clashDisplay font-bold text-xl | sm:text-txl sm:self-start sm:w-64'>Frequently Ask    <div className='text-text-purple | sm:pt-2'> Question</div></h2>
          <p className='text-xs font-normal !leading-6 sm:w-80 sm:'>We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span></p>
        </div>

        <div className='flex flex-col justify-center items-center gap-3.5 max-w-smm | sm:gap-6'>
          <span className='flex text-left justify-between items-end gap-4 | w-full pb-1 | border-b border-text-purple | sm:pb-3'>
            <p className='text-xs !leading-5'>Can I work on a project I started before the hackathon?</p>
            <p className='text-text-purple font-bold'>+</p>
          </span>
          <span className='flex text-left justify-between items-end gap-4 | w-full pb-1 | border-b border-text-purple | sm:pb-3'>
            <p className='text-xs !leading-5'>What happens if I need help during the hackathon?</p>
            <p className='text-text-purple font-bold'>+</p>
          </span>
          <span className='flex text-left justify-between items-end gap-5 | w-full pb-1 | border-b border-text-purple | sm:pb-3'>
            <p className='text-xs !leading-5'>What happens if I don't have an idea for a project?</p>
            <p className='text-text-purple font-bold'>+</p>
          </span>
          <span className='flex text-left justify-between items-end gap-7 | w-full pb-1 | border-b border-text-purple | sm:pb-3'>
            <p className='text-xs !leading-5'>Can I join a team or do I have to come with one?</p>
            <p className='text-text-purple font-bold'>+</p>
          </span>
          <span className='flex text-left justify-between items-end | w-full pb-1 | border-b border-text-purple | sm:pb-3'>
            <p className='text-xs !leading-5'>Can I work on a project I started before the hackathon?</p>
            <p className='text-text-purple font-bold'>+</p>
          </span>
          <span className='flex text-left justify-between items-end | w-full pb-1 border-b border-text-purple | sm:pb-3'>
            <p className='text-xs !leading-5'>Can I work on a project I started before the hackathon?</p>
            <p className='text-text-purple font-bold'>+</p>
          </span>
        </div>
      </div>

      <div className='w-4/5'>
        <img src="https://s3-alpha-sig.figma.com/img/accf/5ac3/adacada305608b5b37ec7cef7fd76949?Expires=1696204800&Signature=LIP9W7ooPPMOp~VQEjLyY-N3dwp8IMGItohiLBpwbKIU3UKLdFiBH1mbCtaWo6zoLHtC4Pd~Z1B3qnSgjJxtsnwz6ffa6RypLhWHXxtEiPYIdfyqTExtduFEveJx0p5zhz6VrRt1B7hfvtWmAcNR2vBUDLIKtnbHE-CDFGTBk2GAbjPWtL3FHuhXkliVtA5HNUJzNIjD23v9QhnRAqrgklnp38~-g-0OEYTrJNpsoAGs5CWorL9Isew6AtNPUpb7kqIS-1VBSaP~j4FtuOFCThMJa9FezsvDrTsPXm16tsRZjccXP6ljejW7SSQkuQR5pZoA529DqBJI-1DTQQ9FPA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      </div>
    </div>
  )
}

export default FAQs