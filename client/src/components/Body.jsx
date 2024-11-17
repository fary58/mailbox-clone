import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar';

const Body = () => {

  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>

    </>
  )
}

export default Body