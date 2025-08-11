import LeftAero from '@/common/LeftAero'
import RightAero from '@/common/RightAero'
import React from 'react'
import profileImg from "@/assets/peopleSayAboutSection/profileImg.png"
import flightImage from "@/assets/peopleSayAboutSection/flightImage.png"
import Image from 'next/image';

function PeopleSayAboutSection() {
  const reviewData = [
    {
      profile: profileImg,
      review: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Mike Taylor",
      place: "Lahore, Pakistan"
    },
    {
      profile: profileImg,
      review: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Sarah Johnson",
      place: "New York, USA"
    },
    {
      profile: profileImg,
      review: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Akira Tanaka",
      place: "Tokyo, Japan"
    },
    {
      profile: profileImg,
      review: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Carlos Mendoza",
      place: "Madrid, Spain"
    }
  ];


  return (
    <>
      <div className='w-full flex flex-col md:flex-row items-center px-3 pt-22 lg:px-0 '>

        <div className=" flex flex-col w-full items-center lg:w-[44%]  mt-2 pl-1">
          <div className='w-full flex flex-col '>
            <h1 className="font-volkhov-bold text-center text-[38px] leading-11">What people say</h1>
            <h1 className="font-volkhov-bold text-center text-[38px]  leading-11"><span className='text-primary'> about us.</span></h1>
          </div>
          <p className='text-[12px] text-gray-500 leading-6 max-w-80 mt-4'>Our Clients send us bunch of smilies with our services and we love them.</p>
          <div className='w-full flex justify-center mb-6 gap-6 mt-7'>
            <LeftAero></LeftAero>
            <RightAero></RightAero>
          </div>
        </div>

        <div className="w-full dsm:pl-20 lg:pl-0 flex items-center lg:w-[56%] ">

          <div className='w-full  px-10 pl-9 pt-[22px]  relative'>

            <div className="absolute hidden xl:block top-[-52px] lg:right-0 xl:right-[-132px]">
              <Image src={flightImage.src} width={135} height={135} alt="flight element" />
            </div>

            {/*{profile photo}*/}
            <div className='max-w-15 max-h-13  left-1 top-[-4px] absolute z-[3]'>
              <Image src={profileImg.src} alt='profile photo' width={55} height={50} />
            </div>

            {/* Front card */}
            <div className='border w-full border-gray-100 max-w-[500px] shadow-md p-6 bg-white rounded-lg z-[2] relative'>

              <p className='text-[13px] font-poppins-regular leading-6'>{reviewData[0].
                review}</p>
              <h1 className='font-inter-semibold text-[15px] mt-8'>{reviewData[0].name}</h1>
              <p className='text-[12px] mb-[5px]'>{reviewData[0].place}</p>
            </div>

            {/* back card */}
            <div className='absolute top-25 left-19 z-[1] border max-w-[500px] border-gray-100 shadow-md p-6 bg-white rounded-lg  '>

              <p className='text-[13px] font-poppins-regular leading-6'>{reviewData[0].
                review}</p>
              <h1 className='font-inter-semibold text-[15px] mt-8'>{reviewData[0].name}</h1>
              <p className='text-[12px] mb-[5px]'>{reviewData[0].place}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PeopleSayAboutSection
