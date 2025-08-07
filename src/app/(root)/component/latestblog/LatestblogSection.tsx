import React from 'react'
import LatesBlogCard from './LatesBlogCard'

function LatestblogSection() {
    return (
        <>
            <div className='w-full flex pt-20 flex-col gap-12'>

                <div className="w-full flex gap-4 flex-col ">
                    <h1 className="font-volkhov-bold text-center text-[40px]">
                        Get update with latest blog 
                    </h1>
                    
                </div>
                <div className="w-full  flex gap-2">
                    <LatesBlogCard/>
                    <LatesBlogCard/>
                    <LatesBlogCard/>
                    <LatesBlogCard/>
                </div>
            </div>
        </>
    )
}

export default LatestblogSection