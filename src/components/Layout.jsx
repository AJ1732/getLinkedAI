import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'




const Layout = () => {
  return (
    <div className='m-auto sm:max-w-200'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout