import React from 'react'
import vectorLogo from "@/assets/header/Vector.png"
import Image from 'next/image'

function Logo() {
  return (
    <>
    <div className='flex gap-2 items-center cursor-pointer'>
      <h1 className='font-volkhov-bold text-[19.5px]'>Trabook</h1>
      <Image src={vectorLogo} height={16} width={16} className='min-w-4 cursor-pointer'  alt='vectorLogo'></Image>
    </div>
    </>
  )
}

export default Logo