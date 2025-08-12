import Button from '@/common/Button'
import FilterBar from '@/common/FilterBar'
import React from 'react'
import HeroSectionMainImage from './HeroSectionMainImage'

function HeroSection() {
  return (
    <>
      <div className=''>
        <div className='w-full flex flex-col pt-10  
        lg:flex-row lg:pt-[69px]'>
          <div className='flex gap-4 flex-col w-full items-center lg:items-start lg:w-[50%] pt-8 '>
            <h1 className='font-volkhov-bold text-[30px] text-center lg:text-[51px] lg:text-start lg:leading-14'>Get started your exciting<span className='text-primary'> journey </span>
              with us.
            </h1>
            <p className='lg:text-start  lg:max-w-[27.5rem] md:max-w-[40rem] text-center leading-8 lg:mt-2.5 text-secondary'>A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. </p>

            <div className='lg:mt-[35px] w-full flex justify-center lg:justify-start'>
              <Button bgColour={"white"} borderColour={"primary"} text={'Discover Now'} textColour={'primary'}></Button>
            </div>
          </div>
          <div className=' lg:w-[50%] mt-15'>
            <HeroSectionMainImage />
          </div>
        </div>
        <div className=' flex justify-center'>
          <FilterBar></FilterBar>
        </div>
      </div>
    </>
  )
}

export default HeroSection