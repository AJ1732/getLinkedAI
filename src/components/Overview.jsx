import React from 'react'

const Overview = () => {
  return (
    <div id='overview' className='bg-bg-two-purple h-fit py-8 pb-20 px-10 border-b border-divider | flex flex-col justify-start items-center'>
      <div id='intro' className='flex flex-col gap-14 justify-start items-center | border-b border-divider pb-20 | sm:flex-row sm:justify-between'>
        <div className='relative sm:pl-32'>
          <img className='w-64 h-64' src="https://s3-alpha-sig.figma.com/img/a6de/6834/5d68dd387b9cafbc76f7ece53058ac96?Expires=1696204800&Signature=OGUzvSLvVUarj~bJKUTmHggm7M~WvjQR61kFl9635ojAtMUY0V1E1Fb3MMF6k8OKG~RXKdRpxhUnAemUPi7NGCICO7KFxsO3nP6kasCziDL4n7PLxiyYDZasP~jTlf2rMZiau9NwZBJln8UXaNqNVWI2KDJchhA4sVmiXDCJzL8wT2-eZCY9iReTMkOxyLWMb5kl0im2TlmwzLgQdc-Xm1AIKcMnYYyepRtRKnFC0X5i1MKx5umijzDiGk490eQbzFYcfUKCqJjqMur-f526nBEz5~1~vUVbxFn2KwupRuSMdMmV9Yy1b-nDEZJeRLQlCVta-NyIAejuvaXa5HOR~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
          <div className='w-14 font-mont font-bold | flex flex-col gap-0 justify-center items-center ml-1 mt-2 | absolute top-28 left-24 | sm:left-56'>
            <span className='text-sxxl font-bold'>The Big</span>
            <span className='text-sxxl font-bold'>Idea!</span>
          </div>
        </div>

        <div className='text-center text-xl font-bold font-clashDisplay tracking-wider | flex flex-col gap-4 | sm:w-1/2 sm:text-left sm:pt-10'>
          <div className='sm:text-txl'>
            <h2>Introduction to getlinked</h2>
            <h2 className='text-text-purple sm:pt-2'>tech Hackathon 1.0</h2>
          </div>

          <p className='text-ssxl font-mont font-normal | leading-7'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
      </div>

      {/* RULES AND GUIDELINES */}
      <div id='rules and guidelines' className='flex flex-col justify-center items-center | border-b border-divider pb-11 | sm:flex-row-reverse'>
        <img className='pt-4 | sm:w-1/2' src="https://s3-alpha-sig.figma.com/img/0542/1f67/435623be1bd279e42923f1c7be3982a0?Expires=1696204800&Signature=UC20fA-IsnPyj1ONZzMTO12upRS9iERE6AnfQNMpCO9odqQMWo382jZDNcBixNZjjbjdVSSIPhqm5r6YANC8t7b3f2mg0~TQ2isXThAbIhVC3cuqPwcQD95Cr2o0KZWo~bTAf4b~BTBwjFp1PIK5ZuXg0TU0rCH~V~ts0P2-7I-1EyY9qV8x87iLyPFmAuxeyf-zc7ZyrU6DZ3WHdpXLBt7tgBPCVO7zJj2dZ80nKbriem1GJb5tVCx6Cm8xA6DW0Ux~Y~0rGiEPeNefWx~Iax4pnPPMrUh4giB2jRCd9kJDuw9XA2GIhZt-FPAlJPjAbFuGR1~pF5aRK0aM3lygnw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

        <div className='tracking-wider text-center flex flex-col gap-4 | sm:w-1/2 sm:text-left'>
          <div className='font-clashDisplay font-bold text-xl | sm:text-txl'>
            <h2>Rules and</h2>
            <h2 className='text-text-purple sm:pt-2'>Guidelines</h2>
          </div>

          <p className='text-ssxl font-mont font-normal | leading-7'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
      </div>

      {/* KEY CRITERIA */}
      <div id='key criteria' className='flex flex-col justify-center items-center text-center | pt-20 | sm:flex-row'>
        <img className='sm:w-1/2' src="https://s3-alpha-sig.figma.com/img/1d4e/0b71/a45a506fa0896ea1c741a01208c3ac2b?Expires=1696204800&Signature=jNUG~6E6-C9yGqR-4Flv1HyjhbDTfLbhe-LMtLAOktnrjxXtdkKdFB4CYRzYIixNEe3UtB0WDXW8GJhX2yweOyOghDzIcKM4FevDHrWl7i4n8Asn08xn1Qp-tMlHIWKU17tlnB7iZIz3QLqfxOQeUu5TP5N-E9l9RM9BupuCOP~V3YdLESr301zpzaiL3MXUZI2vXAMIhl7HwWoK9wOFSR3T3u5vYba~PUASrji5VFA1MndRPjDojVZ3iDXY5rmtICktX-kbQqf3togkSxEEFC-o0sloW4jZ8duNf-w6k6FlYA~sH3KDqSjua4HFO-CnC8pWr6eUnLMiCW2w5OjjwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />

        <div className='flex flex-col gap-5 justify-center items-center | sm:w-1/2 sm:text-left'>
          <div className='font-clashDisplay font-bold text-xl tracking-wide sm:self-start sm:pl-5'>
            <h2>Judging Criteria</h2>
            <h2 className='text-text-purple'>Key attributes</h2>
          </div>

          <div className="flex flex-col gap-5 justify-center items-center px-5 | tracking-wide font-normal text-xs ">
            <p className='leading-normal'>
              <span className='text-text-purple text-ssxl font-bold'>Innovation and Creativity: </span>
              Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
            </p>
            <p className='leading-normal'>
              <span className='text-text-purple text-ssxl font-bold'>Functionality: </span>
              Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
            </p>
            <p className='leading-normal'>
              <span className='text-text-purple text-ssxl font-bold'>Impact and Relevance: </span>
              Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
            </p>
            <p className='leading-normal'>
              <span className='text-text-purple text-ssxl font-bold'>Adherence to Hackathon Rules: </span>
              Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
            </p>
          </div>

          <button className='w-24 h-10 rounded my-6 mb-2 | text-xs font-medium tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple | sm:self-start sm:ml-5'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Overview