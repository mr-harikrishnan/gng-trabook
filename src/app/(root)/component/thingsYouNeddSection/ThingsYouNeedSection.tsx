import React from 'react'
import ThingsYouNeedCard from './ThingsYouNeedCard'
import bgFlightImage from "@/assets/thingsYouNeeSection/secTwoBgFlightImage.png"
import Image from 'next/image'
import SignUpIcon from "@/assets/thingsYouNeeSection/SignUpicon.png"
import SignUpBg from "@/assets/thingsYouNeeSection/SignUpBg.png"
import MoneyBg from "@/assets/thingsYouNeeSection/MoneyBg.png"
import MoneyIcon from "@/assets/thingsYouNeeSection/MoneyIcon.png"
import TravelBg from "@/assets/thingsYouNeeSection/TravelBg.png"
import TravelIcon from "@/assets/thingsYouNeeSection/TravelIcon.png"

function ThingsYouNeedSection() {
  const cardData = [
    {
      icon: SignUpIcon,
      headLine: "Sign Up",
      description: "Completes all the work associated with planning and processing",
      bgImage: SignUpBg,
    },
    {
      icon: MoneyIcon,
      headLine: "Worth of Money",
      description: "After successful access then book from exclusive deals & pricing",
      bgImage: MoneyBg,
    },
    {
      icon: TravelIcon,
      headLine: "Exciting Travel",
      description: "Start  and explore a wide range of exciting travel experience.",
      bgImage: TravelBg,
    },

  ]

  return (
    <>
      <div className='w-full  flex flex-col  pt-22 '>
        <div className='w-full flex justify-center items-center flex-col relative'>
          <Image src={bgFlightImage} width={500} height={500} alt='FlightImage' className='absolute lg:top-2 max-w-[9rem] lg:right-16 top-[-80px] right-[10px] md:top-2' />
          <h1 className='w-full text-center font-volkhov-bold text-[38.5px]'>Things you need <span className='text-primary'>to do</span></h1>
          <p className='text-center mt-3 text-secondary max-w-[30rem]'>We ensure that you&apos;ll embark on a perfectly planned, safe vacation at a price you can afford. </p>
        </div>
        <div>
          <div className='w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-7 mt-13.5 justify-center items-center'>
            {
              cardData.map((data, index) => (
                <ThingsYouNeedCard key={index} data={data}></ThingsYouNeedCard>
              ))
            }
          </div>

        </div>
      </div>

    </>
  )
}

export default ThingsYouNeedSection