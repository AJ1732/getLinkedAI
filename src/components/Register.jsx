import React from 'react'
import { useState, useEffect } from 'react'
import registerPurple from '../files/images/registerPurple.png'
import registerPurpleLaptop from '../files/images/registerPurpleLaptop.png'


const Register = () => {
  const baseUrl = "https://backend.getlinked.ai"
  
  // To get category list
  const [categories, setCategories] = useState([])
  async function getCategories() {
    const data = await fetch(`${baseUrl}/hackathon/categories-list`)
    const dataObj = await data.json()
    setCategories(dataObj)
  }

  useEffect(() => {
    getCategories()
  }, []);

  console.log(categories);
  // To post registration form to api
  const [data, setData] = useState({
    "email":"",
    "phone_number":"",
    "team_name": "",
    "group_size": 0,
    "project_topic":"",
    "category": 0,
    "privacy_poclicy_accepted": false
  })

  const handle = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }


  async function postData(e) {
    e.preventDefault();

    try {
      let result = await fetch(`${baseUrl}/hackathon/registration`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      console.log(result);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className='z-30 bg-bg-two-purple h-fit py-8 px-10 border-b border-divider | flex flex-col justify-start items-center sm:py-14 sm:px-0'>
      <img className='absolute top-28 left-0 z-0 opacity-40 bg-blend-hard-light | sm:hidden' src={registerPurple} alt="" />
      <img className='absolute top-28 left-0 z-0 opacity-40 bg-blend-hard-light | hidden sm:block sm:top-8' src={registerPurpleLaptop} alt="" />
      
      <div className='z-30 flex flex-col sm:flex-row sm:justify-between'>
        <div className='sm:w-3/5 sm:-m-36 sm:mt-2 '>
          <img src="https://www.figma.com/file/H58055Mwc3upxBcouePszn/image/a70fd34066fca8d9215c65352fc6e3a1082aa32c" alt="" />
        </div>

        {/*  */}
        <div className='flex flex-col gap-8 px-4 | sm:w-110 sm:p-14 sm:bg-privacy-div sm:rounded-xl'>
          <h2 className='hidden sm:block sm:text-text-purple sm:clashDisplay sm:font-semibold sm:text-txl'>Register</h2>
          <div className='flex flex-col gap-1 sm:gap-2'>
            <div className='relative'>
              <h2 className='text-xs | sm:text-sxxl'>Be part of this movement! <span className='text-text-purple pl-2'>..................................</span></h2>
              <div className='flex justify-center gap-0 items-end absolute -top-4 right-6 sm:right-56'>
                <img className='w-6 transform -scale-x-100' src="https://s3-alpha-sig.figma.com/img/998a/f1b8/6ee902b07ed044bdfc100f49f924dbae?Expires=1696204800&Signature=BD4qB8K48aIao5gYesiLRLWy-DYhGwq8kk8ssuoE05pdau-cKsGhyiVPvJQp6Ybk7M-zadQAsrFJCYc3cC0~inriupLVGhTxGgf5yB8p0gMJZD~6Bc~PdoUEvD7rjMnBhRnmJnDpXZ5vmGmCyVhPk~2zrg4-TOHUhjHHiDbhKT3IaskAmSvrXPjSn8MIXFqf9O0fvjtLdn2cMzl9lvfWosp50h85NRfcOqQ5LKsoQobjagg3FRQnrCmlSrwTt4JmICfLuGvHPvSFDQFgZnaZLc1Ozwyv2-z2uPrDaMbJcoYBTWg8FyaT71xjGbUH4HohEXa0eLZ0DYhbnEtWN7H6lQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <img className='w-walk transform -scale-x-100 -ml-1' src="https://www.figma.com/file/H58055Mwc3upxBcouePszn/image/9de5061e6dd564e22b0b42b415806671f3a6fb07" alt="" />
              </div>
            </div>

            <h2 className='text-xl font-medium sm:text-2xl'>CREATE YOUR ACCOUNT</h2>
          </div>

          {/* FORM */}
          <form onSubmit={(e) => postData(e)} className='flex flex-col gap-6 text-ssxl font-medium'>
            <div className='flex flex-col gap-6 | sm:flex-row'>
              <div  className='flex flex-col gap-1 | sm:w-1/2'>
                <label htmlFor="team_name">Team's Name</label>
                <input 
                  type="text"
                  id='team_name'
                  required
                  onChange={ (e) => handle(e) }
                  placeholder="Enter the name of your group"
                  className='bg-input w-full py-2.5 px-7 border rounded' />
              </div>

              <div className='flex flex-col gap-1 | sm:w-1/2'>
                <label htmlFor="phone_number">Phone</label>
                <input 
                  type="text"
                  id='phone_number'
                  required
                  onChange={ (e) => handle(e) }
                  placeholder="Enter your phone number"
                  className='bg-input w-full py-2.5 px-7 border rounded'  />
              </div>
            </div>

            <div className='flex flex-col gap-6 sm:flex-row sm:w-full'>
              <div className='flex flex-col gap-1 sm:w-1/2'>
                <label htmlFor="email">Email</label>
                <input 
                  type="email"
                  id='email'
                  required
                  onChange={ (e) => handle(e) }
                  placeholder="Enter your email address"
                  className='bg-input w-full py-2.5 px-7 border rounded sm:w-full'  />
              </div>
            
              <div className='flex flex-col gap-1 sm:w-1/2'>
                <label htmlFor="project_topic">Project Topic</label>
                <input 
                  type="text"
                  id='project_topic'
                  required
                  onChange={ (e) => handle(e) }
                  placeholder="What is your group project topic"
                  className='bg-input w-full py-2.5 px-6 border rounded sm:w-full'  />
              </div>
            </div>


            <div className='flex gap-5'>
              <div className='flex flex-col gap-1 w-3/5 sm:w-1/2'>
                <label htmlFor="category">Category</label>
                <select 
                  id="category"
                  required
                  onChange={ (e) => handle(e) }
                  className='bg-input w-full py-2.5 px-3 border rounded'>
                    <option className='text-xs text-gray-dark' value="Select your Category" selected>Select your category</option>
                    {categories.map( category => (
                      <option
                        key={category.id} 
                        name={category.id}
                        value={category.id}
                        className='text-xs text-gray-dark'>{category.name}</option>
                    ))}
                </select>
              </div>

              <div className='flex flex-col gap-1 w-2/5 sm:w-1/2'>
                <label htmlFor="group_size">Group Size</label>
                <select 
                  id="group_size" 
                  required
                  onChange={ (e) => handle(e) }
                  className='bg-input w-full py-2.5 px-3 border rounded '>
                    <option className='text-xs text-gray-dark' value="Select">Select</option>
                    <option className='text-xs text-gray-dark' value="3">3</option>
                    <option className='text-xs text-gray-dark' value="4">4</option>
                    <option className='text-xs text-gray-dark' value="5">5</option>
                    <option className='text-xs text-gray-dark' value="6">6</option>
                    <option className='text-xs text-gray-dark' value="7">7</option>
                    <option className='text-xs text-gray-dark' value="8">8</option>
                    <option className='text-xs text-gray-dark' value="9">9</option>
                    <option className='text-xs text-gray-dark' value="10">10</option>
                </select>
              </div>
            </div>

            <p className='text-text-purple text-sl italic text-center | sm:text-left sm:text-xs'>Please review your registration details before submitting</p>
            
            <div className='flex justify-center items-start sm:justify-start'>
              <input 
                type="checkbox"
                id="privacy_poclicy_accepted" 
                required
                onChange={ (e) => handle(e) }
                value='true'
                className='bg-transparent cursor-pointer w-4 h-4 border mt-1 | sm:mt-0'
                /> 
              <p className='pl-2 text-sll sm:text-xs'>
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>

            <button className='w-38 h-12 rounded my-6 mb-2 self-center | text-sxxl font-normal tracking-wide | bg-gradient-to-l from-lg-from-purple via-text-purple to-lg-to-purple | sm:w-full'>Submit</button>
          </form>

        </div>          
      </div>
    </div>
  )
}

export default Register