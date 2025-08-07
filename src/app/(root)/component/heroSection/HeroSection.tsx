import Button from '@/common/Button'
import FilterBar from '@/common/FilterBar'
import Header from '@/common/Header'
import React from 'react'

function HeroSection() {
  return (
    <>
      <div>
        <div className='w-full flex'>
          <div className='flex gap-4 flex-col w-full'>
            <h1 className='font-volkhov-bold text-[40px]'>Get started your exciting journey
              with us.
            </h1>
            <p>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>
            <Button></Button>
          </div>
          <div className='w-full'>
            <div className='p-60 border'></div>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <FilterBar></FilterBar>
        </div>
      </div>
    </>
  )
}

export default HeroSection