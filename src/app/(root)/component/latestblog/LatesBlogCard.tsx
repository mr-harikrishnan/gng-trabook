import React from 'react'
import Image, { StaticImageData } from 'next/image'




type TypeProps = {
  image: StaticImageData;
  desc: string;
  date: string
}

type DataProps = {
  data: TypeProps
}

function LatesBlogCard({ data }: DataProps) {
  return (
    <>
      <div className="w-full flex items-center flex-col">
        <div className="w-full ">
          <Image src={data.image} className='w-full' alt='blogImage' />
        </div>
        <div className="w-full pt-[19px] flex  flex-col items-center text-center">
          <p className='text-[14.5px] lg:max-w-48 font-poppins-medium'>{data.desc}</p>
          <p className='text-[12.9px] lg:max-w-48  mt-[13px]  text-gray-400' >{data.date}</p>
        </div>

      </div>
    </>
  )
}

export default LatesBlogCard