import React from 'react'
import img1 from "@/assets/dealsAndDiscountSection/Card image1.png"
import img2 from "@/assets/dealsAndDiscountSection/Card image2.png"
import img3 from "@/assets/dealsAndDiscountSection/Card image3.png"
import img4 from "@/assets/dealsAndDiscountSection/Card Image4.png"
import LeftAero from '@/common/LeftAero'
import RightAero from '@/common/RightAero'
import Image from 'next/image'
import DealsAndDiscountCard from './DealsAndDiscountCard'


function DealsAndDiscountSection() {
  const deals = [
    {
      id: 1,
      city: "Madrid",
      country: "Spain",
      image: img1,
      rating: 4.8,
      originalPrice: "$650",
      discountPrice: "$850",
    },
    {
      id: 2,
      city: "Firenze",
      country: "Italy",
      image: img2,
      rating: 4.5,
      originalPrice: "$600",
      discountPrice: "$350",
    },
    {
      id: 3,
      city: "Paris",
      country: "France",
      image: img3,
      rating: 4.4,
      originalPrice: "$700",
      discountPrice: "$400",
    },
    {
      id: 4,
      city: "London",
      country: "UK",
      image: img4,
      rating: 4.8,
      originalPrice: "$650",
      discountPrice: "$350",
    },
  ];

  return (

    <div className="flex flex-col items-center justify-center pt-24 ">
      <div className="flex  flex-col items-center  mx-auto">
        <h1 className="text-2xl text-center font-volkhov-bold sm:text-3xl lg:text-[38.5px] font-bold text-gray-800">
          Exclusive <span className="text-orange-500">deals & discounts</span>
        </h1>
        <p className="text-gray-500 mt-5 text-[14px] tracking-[0.020rem] text-center  max-w-[340px] leading-6">
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
      </div>
      <div className="grid grid-cols-1 dxs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-13 w-full max-w-7xl">
        {deals.map((deal) => (
          <DealsAndDiscountCard data={deal}></DealsAndDiscountCard>
        ))}
      </div>
      <div className="mt-11  flex gap-4.5 ml-[-7px]">
        <LeftAero />
        <RightAero />

      </div>
    </div>
  );
}

export default DealsAndDiscountSection