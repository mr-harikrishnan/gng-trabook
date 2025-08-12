// components/SearchBar.tsx
"use client"

import React from "react"
import Button from "./Button"

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center mt-12 ">
      <div className="w-full max-w-[42rem] bg-white shadow-md rounded-sm px-[19px] py-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Location */}
        <div className="flex flex-col w-full">
          <div className="text-[13px] font-poppins-medium text-black flex justify-between lg:justify-start lg:gap-1  items-center">
            <span>Location</span> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="orange" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <select
            defaultValue=""
            className="text-[9.5px] focus:outline-none  text-gray-500 mt-[8px] bg-transparent appearance-none cursor-pointer w-full"
          >
            <option className="" value="" disabled>Where are you going</option>
            <option className="" value="newyork">New York</option>
            <option className="" value="chicago">Chicago</option>
            <option className="" value="losangeles">Los Angeles</option>
          </select>
        </div>

        {/* Date */}
        <div className="flex flex-col w-full">
          <div className="text-[13px] font-poppins-medium text-black flex justify-between lg:justify-start lg:gap-1  items-center">
            <span>Date</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="orange" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <select
            defaultValue=""
            className="text-[9.5px] focus:outline-none text-gray-500 mt-[8px] bg-transparent appearance-none cursor-pointer w-full"
          >
            <option className="" value="" disabled>When you will go</option>
            <option className="" value="2025-08-10">August 10, 2025</option>
            <option className="" value="2025-08-11">August 11, 2025</option>
            <option className="" value="2025-08-12">August 12, 2025</option>
          </select>
        </div>

        {/* Guest */}
        <div className="flex flex-col w-full">
          <div className="text-[13px] font-poppins-semibold text-black flex justify-between lg:justify-start lg:gap-1 items-center">
            <span>Guest</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="orange" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <select
            defaultValue=""
            className="text-[9.5px] focus:outline-none  text-gray-500 mt-[8px] bg-transparent appearance-none cursor-pointer w-full"
          >
            <option className="" value="" disabled>Number of guest</option>
            <option className="" value="1">1 Guest</option>
            <option className="" value="2">2 Guests</option>
            <option className="" value="3">3 Guests</option>
            <option className="" value="4">4 Guests</option>
          </select>
        </div>

        {/* Explore Now Button */}
        <div className="w-full flex justify-center xs:justify-start">
          <Button bgColour={"primary"} borderColour={"primary"} text={"Explore Now"} textColour={"white"} />
        </div>
      </div>

    </div>
  )
}

export default SearchBar
