"use client"
import React, { useState } from 'react'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import locationSvg from "@/assets/dealsAndDiscountSection/location-point-svgrepo-com (1).svg"
import Button from '@/common/Button'

type Datatypeprops = {
    id: number;
    city: string;
    country: string;
    image: StaticImageData;
    rating: number;
    originalPrice: string;
    discountPrice: string;
};

type TypeProps = {
    data: Datatypeprops
}

function DealsAndDiscountCard({ data }: TypeProps) {
    const [hoverEffect, setHoverEffect] = useState(false)

    const hovertoggle = (type: "in" | "out") => {
        if (type === "in") setHoverEffect(true)
        else setHoverEffect(false)
        console.log(type)
    }

    return (
        <>
            <div className=" bg-white rounded-lg border border-gray-200 overflow-hidden w-full md:max-w-sm mx-auto">
                <div className="relative">
                    <div
                        className={`absolute ${hoverEffect ? "flex justify-center items-end pb-9" : "hidden"
                            } bg-black opacity-30 w-full top-0 left-0 bottom-0 right-0 z-[2] pointer-events-none`}
                    ></div>

                    <button
                        onMouseEnter={() => hovertoggle("in")}
                        onMouseLeave={() => hovertoggle("out")}
                        className={`${hoverEffect ? "absolute bottom-9 left-0 right-0 mx-auto " : "hidden"} cursor-pointer text-[14px] font-poppins-medium text-white rounded-lg max-w-[106px] h-[38px] bg-primary z-[3]`}
                    >
                        Book Now
                    </button>


                    <img
                        src={data.image.src}
                        alt={`${data.city} image`}
                        onMouseEnter={() => hovertoggle("in")}
                        onMouseLeave={() => hovertoggle("out")}
                        className="w-full object-cover"
                    />
                </div>

                <div className="w-full px-[13px] py-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-base text-[19px] font-poppins-medium">{data.city}</h3>
                        <div className="text-gray-500 text-[13px] flex items-center gap-1.5">
                            <div className="flex items-center mt-[-3.5px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#ffc107"
                                    className="size-4"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center">{data.rating}</div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-1.5">
                        <div className="flex items-center gap-1 -ml-1">
                            <Image src={locationSvg} height={90} width={15} alt="locationSvg" />
                            <p className="text-gray-500 text-[13px]">{data.country}</p>
                        </div>

                        <div className="flex gap-4 items-center mt-1">
                            <p className="text-gray-400 line-through text-[12px]">{data.originalPrice}</p>
                            <p className="text-orange-500 bg-orange-100 rounded-lg px-1 py-0.5 font-bold text-base text-[13px]">
                                {data.discountPrice}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealsAndDiscountCard
