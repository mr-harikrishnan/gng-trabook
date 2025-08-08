// components/SearchBar.tsx
"use client"

import React from "react"
import Button from "./Button"

const SearchBar = () => {
  return (
    <div className="w-full flex justify-center  mt-12 px-8 lg:px-0">
      <div className="w-full max-w-[42rem]  bg-white shadow-md rounded-sm  px-[19px] py-6 flex flex-col md:flex-row  items-center justify-between gap-6">

        {/* Location */}
        <div className="flex flex-col ">
          <div className="text-[13px] font-poppins-medium text-black flex items-center gap-1">
            Location
            <span className="text-orange-500">▾</span>
          </div>
          <p className="text-[9px] text-gray-500 mt-[8px]">Where are you going</p>
        </div>

        {/* Date */}
        <div className="flex flex-col ">
          <div className="text-[13px] font-poppins-medium text-black flex items-center gap-1">
            Date
            <span className="text-orange-500">▾</span>
          </div>
          <p className="text-[9px] text-gray-500 mt-[8px]">When you will go</p>
        </div>

        {/* Guest */}
        <div className="flex flex-col ">
          <div className="text-[13px] font-poppins-semibold text-black flex items-center gap-1">
            Guest
            <span className="text-orange-500">▾</span>
          </div>
          <p className="text-[9px] text-gray-500 mt-[8px]">Number of guest</p>
        </div>

        {/* Explore Now Button */}
        <Button bgColour={"primary"} borderColour={"primary"} text={"Explore Now"} textColour={"white"}/>
      </div>
    </div>
  )
}

export default SearchBar
