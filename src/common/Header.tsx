"use client"

import React, { useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import AsideBar from './AsideBar'

function Header() {

  const [sideBar, setSideBar] = useState(false)

  const toggleSideBar = () => {
    setSideBar(!sideBar)
  }


  return (
    <>
      <div className=' lg:px-0 pt-[27px] flex justify-between  items-center max-w-[936px]'>
        <div
          onClick={toggleSideBar}
          className={`${sideBar == true ? "block" : "hidden"} lg:hidden bg-[#222222] fixed  opacity-50 inset-0 ab z-[10]`}></div>
        <Logo></Logo>
        <ul className='hidden lg:ml-[187px] text-[12.5px] lg:flex gap-[27px] '>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Destination</li>
          <li className='cursor-pointer'>Tour</li>
          <li className='cursor-pointer'>Blog</li>
        </ul>
        <div className='lg:ml-20 flex  justify-center items-center'>
          <div className='hidden  lg:flex items-center'>
            <button className='className="w-max bg-white border-white text-primary text-center cursor-pointer tracking-[0.055rem] hover:shadow-lg w-32  h-10  text-nowrap rounded-sm font-poppins-semibold text-[12px] border'>Log in</button>
            <button className='className="w-max bg-primary border-primary text-white text-center cursor-pointer tracking-[0.055rem] hover:shadow-lg w-32  h-10 text-nowrap rounded-sm font-poppins-semibold text-[12px] border'>Sign up</button>

          </div>

          <div>
            <svg
              onClick={toggleSideBar} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="size-6 lg:hidden ml-5 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>

          </div>


        </div>

        {/* {asideBar} */}
        
          <AsideBar setSideBar={setSideBar} sideBar={sideBar} toggleSideBar={toggleSideBar}></AsideBar>


      </div>
    </>
  )
}

export default Header