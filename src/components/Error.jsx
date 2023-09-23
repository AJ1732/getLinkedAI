import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='h-screen text-center py-20 px-10 flex flex-col justify-start items-center gap-14 border-b border-divider | sm:gap-20'>
      <h1 className='text-2xl font-bold'>
        Oops!
      </h1>
      <Link to={`./`}> Go Back <span className='text-text-purple font-semibold'>Here</span> or Click the getlinked Icon</Link>
    </div>
  )
}

export default Error