// components/SearchBar.tsx
"use client"

import React from "react"
import Button from "./Button"

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center  mt-12 px-8 lg:px-0">
      <div className="w-full max-w-[42rem]  bg-white shadow-md rounded-sm  px-[19px] py-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 lg:gap-[81px]">

        {/* Location */}
        <div className="flex flex-col ">
          <div className="text-[13px] font-poppins-medium text-black flex items-center gap-[1px]">
            Location
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="orange" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

          </div>
          <p className="text-[9.5px] text-gray-500 mt-[8px]">Where are you going</p>
        </div>

        {/* Date */}
        <div className="flex flex-col ">
          <div className="text-[13px] font-poppins-medium text-black flex items-center gap-[1px]">
            Date
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="orange" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <p className="text-[9.5px] text-gray-500 mt-[8px]">When you will go</p>
        </div>

        {/* Guest */}
        <div className="flex flex-col ">
          <div className="text-[13px] font-poppins-semibold text-black flex items-center gap-[1px]">
            Guest
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="orange" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
          <p className="text-[9.5px] text-gray-500 mt-[8px]">Number of guest</p>
        </div>

        {/* Explore Now Button */}
        <Button bgColour={"primary"} borderColour={"primary"} text={"Explore Now"} textColour={"white"} />
      </div>
    </div>
  )
}

export default SearchBar
