import React from 'react'
import Logo from '../Logo'

function FooterSection() {
    return (
        <>
            <div className='w-full pt-20'>

                <div className="w-full flex">
                    <div className="w-full flex gap-4 flex-col">
                        <Logo></Logo>
                        <p className='text-[16px]'>Book your trip in minute, get full
                            Control for much longer.
                        </p>
                        <div className='w-full flex gap-4'>
                            <div className="w-full p-2 max-w-11 flex justify-center items-center border rounded-full">F</div>
                            <div className="w-full p-2 max-w-11 flex justify-center items-center border rounded-full">I</div>
                            <div className="w-full p-2 max-w-11 flex justify-center items-center border rounded-full">T</div>
                        </div>

                    </div>
                    <div className="w-full flex  gap-4">

                        <div className="w-full ">
                            <div className="w-full">
                                <p className="font-poppins-semibold">company</p>
                                <div>
                                    <p className="">About</p>
                                    <p className="">Careers</p>
                                    <p className="">Logistics</p>
                                    <p className="">Privacy & policy</p>
                                </div>
                            </div>
                        </div>



                        <div className="w-full">
                            <div className="w-full">
                                <p className="font-poppins-semibold">company</p>
                                <div>
                                    <p className="">About</p>
                                    <p className="">Careers</p>
                                    <p className="">Logistics</p>
                                    <p className="">Privacy & policy</p>
                                </div>
                            </div>
                        </div>



                        <div className="w-full">
                            <div className="w-full">
                                <p className="font-poppins-semibold">company</p>
                                <div>
                                    <p className="">About</p>
                                    <p className="">Careers</p>
                                    <p className="">Logistics</p>
                                    <p className="">Privacy & policy</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>

                <hr className='my-8'/>

                <div className='w-full flex justify-between'>
                    <p className="">Copyright, Trabook 2022. All rights reserved.</p>
                    <p className="">Terms & Conditions</p>
                </div>

            </div>
        </>
    )
}

export default FooterSection