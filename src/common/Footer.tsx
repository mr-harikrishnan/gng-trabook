import React from 'react'

function Footer() {
    return (
        <>
            <hr className='my-8 ' />
            <div className='w-full  flex flex-col justify-between items-center lg:items-start lg:flex-row'>
                <p className="text-[13px] text-secondary text-center">Copyright, Trabook 2022. All rights reserved.</p>
                <p className="text-[13px] text-secondary">Terms & Conditions</p>
            </div>
        </>

    )
}

export default Footer