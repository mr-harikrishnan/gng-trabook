import React from 'react'
import ThingsYouNeedCard from './ThingsYouNeedCard'
import Button from '@/common/Button'

function ThingsYouNeedSection() {
  return (
    <>
    <div className='w-full  flex flex-col gap-12 pt-12'>
        <div className='w-full flex justify-center items-center flex-col'>
            <h1 className='w-full text-center font-volkhov-bold text-[40px]'>Things you need to do</h1>
            <p className='text-center'>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
        </div>
        <div>

            <div className='w-full flex gap-2 justify-center items-center'>
                <ThingsYouNeedCard></ThingsYouNeedCard>
                <ThingsYouNeedCard></ThingsYouNeedCard>
                <ThingsYouNeedCard></ThingsYouNeedCard>
                
            </div>

        </div>
    </div>

    </>
  )
}

export default ThingsYouNeedSection