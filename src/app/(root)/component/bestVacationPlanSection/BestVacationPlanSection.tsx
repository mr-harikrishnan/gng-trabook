import React from 'react'
import BestVacationPlanCard from './BestVacationPlanCard'

function BestVacationPlanSection() {
  return (
    <>
      <div className='w-full  flex flex-col gap-12 pt-12'>
        <div className='w-full flex justify-center items-center flex-col'>
          <h1 className='w-full text-center font-volkhov-bold text-[40px]'>Best vacation plan</h1>
          <p className='text-center'>Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! 
          </p>
        </div>
        <div>

          <div className='w-full flex gap-2 justify-center items-center'>
            <BestVacationPlanCard/>
            <BestVacationPlanCard/>
            <BestVacationPlanCard/>

          </div>

        </div> 
        
      </div>

    </>
  )
}

export default BestVacationPlanSection