import React from 'react'
import LatesBlogCard from './LatesBlogCard'
import SmallDot from '@/common/threeDot/SmallDot';
import BigDot from '@/common/threeDot/BigDot';
import image1 from "@/assets/latestBlogSection/Image1.png"
import image2 from "@/assets/latestBlogSection/Image2.png"
import image3 from "@/assets/latestBlogSection/Image3.png"
import image4 from "@/assets/latestBlogSection/Image4.png"

function LatestblogSection() {

    const blogData = [
        {
            image: image1,
            desc: "The Amazing Difference a Year of Travelling .",
            date: "July 27, 2021"
        }, {
            image: image2,
            desc: "Travel far enough, you meet yourself.",
            date: "July 27, 2021"
        }, {
            image: image3,
            desc: "How to Save Money While Visiting Africa .",
            date: "July 27, 2021"
        }, {
            image: image4,
            desc: "Reflections on 5 Months of Travel: Time to Hang",
            date: "July 27, 2021"
        },
    ]

    return (
        <>
            <div className='w-full flex pt-22  flex-col '>

                <div className="w-full flex justify-center flex-col ">
                    <div className='flex justify-center flex-col lg:flex-row'>
                        <h1 className="font-volkhov-bold text-center text-[39px]">
                            Get update with
                        </h1>
                        <h1 className="font-volkhov-bold text-center text-primary text-[39px]">
                            &nbsp;latest blog
                        </h1>
                    </div>


                </div>
                <div className="w-full mt-10.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
                    {
                        blogData.map((data,index) => (
                            <LatesBlogCard key={index} data={data} />
                        ))
                    }
                </div>

                <div className="w-full flex justify-center items-center gap-2 mt-9.5">
                    <div className='flex justify-center items-center'><SmallDot /></div>
                    <div className='flex justify-center items-center'><BigDot /></div>
                    <div className='flex justify-center items-center'><SmallDot /></div>
                </div>
            </div>
        </>
    )
}

export default LatestblogSection