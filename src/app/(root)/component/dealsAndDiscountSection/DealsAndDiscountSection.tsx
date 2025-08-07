import React from 'react'
import DealsAndDiscountCard from './DealsAndDiscountCard'
import LeftAero from '@/common/LeftAero'
import RightAero from '@/common/RightAero'

function DealsAndDiscountSection() {
  return (
    <>
      <div className='w-full  flex flex-col gap-12 pt-12'>
        <div className='w-full flex justify-center items-center flex-col'>
          <h1 className='w-full text-center font-volkhov-bold text-[40px]'>Exclusive deals & discounts</h1>
          <p className='text-center'>Discover our fantastic early booking discounts & start planning your journey.
          </p>
        </div>
        <div>

          <div className='w-full flex gap-2 justify-center items-center'>

            <DealsAndDiscountCard></DealsAndDiscountCard>
            <DealsAndDiscountCard></DealsAndDiscountCard>
            <DealsAndDiscountCard></DealsAndDiscountCard>
            <DealsAndDiscountCard></DealsAndDiscountCard>
          </div>

        </div> 
        <div className='flex justify-center items-center gap-4'>
          <LeftAero/>
          <RightAero/>
        </div>
      </div>

    </>
  )
}

export default DealsAndDiscountSection