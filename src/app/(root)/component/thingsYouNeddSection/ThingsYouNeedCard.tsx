import { url } from 'inspector'
import Image, { StaticImageData } from 'next/image'
import React from 'react'


type Dataprops = {
  icon: StaticImageData,
  headLine: string,
  description: string,
  bgImage: StaticImageData,
}
type TypeProps = {
  data: Dataprops
}

function ThingsYouNeedCard({ data }: TypeProps) {
  return (
    <>
      <div className='w-full relative bg-white min-h-50 max-h-70  p-[31px] rounded shadow-lg z-[3]'>

        
          <Image
          className='z-[-1] '
            src={data.bgImage.src}
            alt="background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        

        <div className='h-9.5 w-9.5 relative '>
          <Image src={data.icon} fill alt={`${data.headLine} icon`} className='' />
        </div>

        <div className='mt-9.5'>
          <h1 className='font-poppins-semibold text-[19px]'>{data.headLine}</h1>
          <p className='text-[13px] text-secondary mt-4'>{data.description}</p>
        </div>

      </div>
    </>
  )
}

export default ThingsYouNeedCard