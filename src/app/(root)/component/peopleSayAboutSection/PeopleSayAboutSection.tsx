import LeftAero from '@/common/LeftAero'
import RightAero from '@/common/RightAero'
import React from 'react'

function PeopleSayAboutSection() {
  return (
    <>
      <div className='w-full flex pt-20'>

        <div className="w-full flex gap-4 flex-col">
          <h1 className="font-volkhov-bold text-[40px]">What people say
            about Us.
          </h1>
          <p className='text-[16px]'>Our Clients send us bunch of smilies with our services and we love them.</p>
          <div className='w-full flex gap-4'>
            <LeftAero></LeftAero>
            <RightAero></RightAero>
          </div>
        </div>
        <div className="w-full border">
          <div className='p-40'>
            reviews
          </div>
        </div>
      </div>
    </>
  )
}

export default PeopleSayAboutSection
