import React, { lazy } from 'react'
import vectorLogo from "@/assets/Vector.png"
import Image from 'next/image'

function Logo() {
  return (
    <>
    <div className='flex gap-2 items-center'>
      <h1 className='font-volkhov-bold text-[1]'>Terbook</h1>
      <Image src={vectorLogo} height={15} width={15} alt='vectorLogo'></Image>
    </div>
    </>
  )
}

export default Logo