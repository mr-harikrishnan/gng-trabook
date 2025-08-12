import React from 'react'
import vectorLogo from "@/assets/header/Vector.png"
import Image from 'next/image'

type TypeProps = {
  sideBar: boolean;
  setSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  toggleSideBar: () => void;
};

function AsideBar({ sideBar, setSideBar, toggleSideBar }: TypeProps) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-65 bg-white shadow-lg h-screen px-2 pl-4 z-[20] flex flex-col justify-between
        transition-transform duration-300 ease-in-out
        ${sideBar ? "translate-x-0" : "-translate-x-full"}
         lg:hidden
                   `}
      >
        <div>
          <div className='w-full flex justify-between mt-2 '>
            <div className='flex justify-center cursor-pointer mt-5.5 items-center gap-2'>
              <h1 className='font-volkhov-bold text-[19.5px] text-primary'>Trabook</h1>
              <Image src={vectorLogo} height={16} width={16} alt='vectorLogo'></Image>
            </div>

            <div>
              <svg
                onClick={toggleSideBar}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="gray" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          <div>
            <ul className=' text-[16px]  flex flex-col gap-8 ml-4 mt-8 '>
              <li className='cursor-pointer text-secondary hover:text-primary w-max'>Home</li>
              <li className='cursor-pointer text-secondary hover:text-primary w-max'>About</li>
              <li className='cursor-pointer text-secondary hover:text-primary w-max'>Destination</li>
              <li className='cursor-pointer text-secondary hover:text-primary w-max'>Tour</li>
              <li className='cursor-pointer text-secondary hover:text-primary w-max'>Blog</li>
            </ul>
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-2 '>
            <button className='className="w-max bg-white border-white text-primary text-center cursor-pointer tracking-[0.055rem] hover:shadow-lg w-full  h-10  text-nowrap rounded-sm font-poppins-semibold text-[12px] border'>Log in</button>
            <button className='className="w-max bg-primary border-primary text-white text-center cursor-pointer tracking-[0.055rem] hover:shadow-lg w-full h-10 text-nowrap rounded-sm font-poppins-semibold text-[12px] border'>Sign up</button>
          </div>
        </div>


      </div>
    </>
  )
}

export default AsideBar