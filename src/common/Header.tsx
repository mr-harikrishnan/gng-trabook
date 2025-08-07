import React from 'react'
import Logo from './Logo'
import Button from './Button'

function Header() {
  return (
    <>
    <div className='w-full  py-8 flex justify-between items-center'>
      <Logo></Logo>
      <ul className='text-[13px] flex gap-7'>
        <li>Home</li>
        <li>About</li>
        <li>Destination</li>
        <li>Tour</li>
        <li>Blog</li>
      </ul>
      <div className='flex gap-8'>
        <Button></Button>
        <Button></Button>
        
      </div>
    </div>
    </>
  )
}

export default Header