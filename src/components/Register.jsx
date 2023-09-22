import React from 'react'

const Register = () => {
  return (
    <div className='bg-bg-two-purple h-fit py-8 px-10 border-b border-divider | flex flex-col justify-start items-center'>
      <div>
        <div>
          <img src="https://www.figma.com/file/H58055Mwc3upxBcouePszn/image/a70fd34066fca8d9215c65352fc6e3a1082aa32c" alt="" />
        </div>

        <div className='flex flex-col gap-8 px-4'>
          <div className='flex flex-col gap-1'>
            <div className='relative'>
              <h2 className='text-xs'>Be part of this movement! <span className='text-text-purple pl-2'>..................................</span></h2>
              <div className='flex justify-center gap-0 items-end absolute -top-4 right-6'>
                <img className='w-6 transform -scale-x-100' src="https://s3-alpha-sig.figma.com/img/998a/f1b8/6ee902b07ed044bdfc100f49f924dbae?Expires=1696204800&Signature=BD4qB8K48aIao5gYesiLRLWy-DYhGwq8kk8ssuoE05pdau-cKsGhyiVPvJQp6Ybk7M-zadQAsrFJCYc3cC0~inriupLVGhTxGgf5yB8p0gMJZD~6Bc~PdoUEvD7rjMnBhRnmJnDpXZ5vmGmCyVhPk~2zrg4-TOHUhjHHiDbhKT3IaskAmSvrXPjSn8MIXFqf9O0fvjtLdn2cMzl9lvfWosp50h85NRfcOqQ5LKsoQobjagg3FRQnrCmlSrwTt4JmICfLuGvHPvSFDQFgZnaZLc1Ozwyv2-z2uPrDaMbJcoYBTWg8FyaT71xjGbUH4HohEXa0eLZ0DYhbnEtWN7H6lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <img className='w-walk transform -scale-x-100 -ml-1' src="https://www.figma.com/file/H58055Mwc3upxBcouePszn/image/9de5061e6dd564e22b0b42b415806671f3a6fb07" alt="" />
              </div>
            </div>

            <h2 className='text-xl font-medium'>CREATE YOUR ACCOUNT</h2>
          </div>

          {/* FORM */}
          <form className='flex flex-col gap-6 text-ssxl font-medium'>
            <div  className='flex flex-col gap-1'>
              <label htmlFor="team">Team's Name</label>
              <input 
                type="text"
                name='team'
                placeholder="Enter the name of your group"
                className='bg-input w-full py-2.5 px-7 border rounded' />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="phone">Phone</label>
              <input 
                type="text"
                name='phone'
                placeholder="Enter your phone number"
                className='bg-input w-full py-2.5 px-7 border rounded'  />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                name='email'
                placeholder="Enter your email address"
                className='bg-input w-full py-2.5 px-7 border rounded'  />
            </div>
           
            <div className='flex flex-col gap-1'>
              <label htmlFor="project">Project Topic</label>
              <input 
                type="text"
                name='project'
                placeholder="What is your group project topic"
                className='bg-input w-full py-2.5 px-6 border rounded'  />
            </div>

            <div className='flex gap-5'>
              <div className='flex flex-col gap-1 w-3/5'>
                <label htmlFor="email">Category</label>
                <select 
                  name="category" 
                  id="category"
                  className='bg-input w-full py-2.5 px-3 border rounded'>
                    <option className='text-xs text-gray-dark' value="Select your Category" selected>Select your category</option>
                    <option className='text-xs text-gray-dark' value="Artificial Intelligence">Artificial Intelligence</option>
                    <option className='text-xs text-gray-dark' value="Frontend Development">Frontend Development</option>
                    <option className='text-xs text-gray-dark' value="Backend Developoment">Backend Developoment</option>
                    <option className='text-xs text-gray-dark' value="Cloud Computing">Cloud Computing</option>
                    <option className='text-xs text-gray-dark' value="Video Marketing">Video Marketing</option>
                    <option className='text-xs text-gray-dark' value="UI/UX Experience">UI/UX Experience</option>
                    <option className='text-xs text-gray-dark' value="DevOps">DevOps</option>
                </select>
              </div>

              <div className='flex flex-col gap-1 w-2/5'>
                <label htmlFor="size">Group Size</label>
                <select 
                  name="size" 
                  id="category"
                  className='bg-input w-full py-2.5 px-3 border rounded '>
                    <option className='text-xs text-gray-dark' value="Select" selected>Select</option>
                    <option className='text-xs text-gray-dark' value="Select">3</option>
                    <option className='text-xs text-gray-dark' value="Select">4</option>
                    <option className='text-xs text-gray-dark' value="Select">5</option>
                    <option className='text-xs text-gray-dark' value="Select">6</option>
                    <option className='text-xs text-gray-dark' value="Select">7</option>
                    <option className='text-xs text-gray-dark' value="Select">8</option>
                    <option className='text-xs text-gray-dark' value="Select">9</option>
                    <option className='text-xs text-gray-dark' value="Select">10</option>
                </select>
              </div>
            </div>

            <p className='text-text-purple text-sl italic text-center'>Please review your registration details before submitting</p>
            
            <div className='flex justify-center items-start'>
              <input 
                type="checkbox" 
                name="agree" 
                className='bg-purple border mt-1'
                value="on"/> 
              <p className='pl-2 text-sll'>
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>

            <button className='w-38 h-12 rounded my-6 mb-2 self-center | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple'>Submit</button>
          </form>

        </div>          
      </div>
    </div>
  )
}

export default Register