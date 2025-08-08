import Image from 'next/image'
import React from 'react'
import heroSectionMainImgae from "@/assets/heroSectionMainImage.png"
import bgFlightImage from "@/assets/bgFlightImage.png"

const HeroSectionMainImage = () => {
    return (
        <>
            <div className='w-full flex justify-center  relative '>
                <Image height={500} width={500} src={bgFlightImage} alt='HeroSectionMainImage' className='absolute z-[1] top-[-14px] max-w-[20rem] opacity-40
                   dxs:max-w-[22rem]
                   txs:max-w-[27rem] txs:top-[-17px]  
                   lg:min-w-[39rem] lg:right-[-123px] lg:top-[-44px]' />
                <Image height={500} width={500} src={heroSectionMainImgae} className='lg:min-w-[32.5rem] lg:ml-[24px]' alt='HeroSectionMainImage' />

            </div>
        </>
    )
}

export default HeroSectionMainImage