import React from 'react'
import imageTree from "@/assets/subscribeSection/treeImg.png"
import springImage from "@/assets/subscribeSection/springImage.png"
import Image from 'next/image'

function SubscribeSection() {
    return (
        <>
            <div className='w-full'>
                <div className='w-full flex  justify-center'>
                    <div className="w-full relative flex flex-col lg:pl-17 lg:px-0 px-4 rounded-lg justify-center bg-primary  pt-15 pb-[65px]   ">
                        <div className='z-[10] flex justify-center text-[38.5px]  leading-13 font-volkhov-bold text-white flex-col'>
                            <h1 className='text-center'>Subscribe and get exclusive </h1>
                            <h1 className='text-center'> deals & offer</h1>
                        </div>
                        <div className='z-[12] flex justify-center  w-full mt-12'>
                            <div className='bg-white flex flex-col sm:flex-row items-center rounded-lg w-full max-w-[540px] ps-4 pe-1.5 py-[7px] '>
                                <div className='w-full flex items-center my-4 lg:my-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#a4a4a4" className="size-4.5 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <input type="text" placeholder='Enter your mail' className='focus:outline-none focus:ring-0 w-full pl-1 h-full placeholder:-#a4a4a4 text-[13px]' />
                                </div>
                                <div className='sm:w-max w-full'>
                                    <button className=' w-full sm:w-[105px]  h-[40px] font-poppins-light text-white bg-primary rounded-lg text-[13px]'>Subscribe</button>

                                </div>
                            </div>



                        </div>
                        <Image src={imageTree.src} alt='tree element' height={100} width={100} className='absolute top-0 right-0' />
                        <Image src={springImage.src} alt='tree element'height={200}  width={320} className='absolute bottom-0 left-0' />
                    </div>

                </div>

            </div>

        </>
    )
}

export default SubscribeSection