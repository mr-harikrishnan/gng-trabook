"use client"
import React, { useState, useEffect } from 'react'
import HeroSection from './component/heroSection/HeroSection'
import Header from '@/common/Header'
import ThingsYouNeedSection from './component/thingsYouNeddSection/ThingsYouNeedSection'
import DealsAndDiscountSection from './component/dealsAndDiscountSection/DealsAndDiscountSection'
import BestVacationPlanSection from './component/bestVacationPlanSection/BestVacationPlanSection'
import PeopleSayAboutSection from './component/peopleSayAboutSection/PeopleSayAboutSection'
import LatestblogSection from './component/latestblog/LatestblogSection'
import SubscribeSection from './component/subscribeSection/SubscribeSection'
import ContactSection from '@/common/contactSection/ContactSection'
import Footer from '@/common/Footer'

function Page() {
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        const handleWheel = (e: { preventDefault: () => void; stopPropagation: () => void }) => {
            if (!scroll) {
                e.preventDefault()
                e.stopPropagation()
                return false
            }
        }

        const handleKeyDown = (e: { key: string; preventDefault: () => void }) => {
            if (!scroll && (
                e.key === 'ArrowDown' || 
                e.key === 'ArrowUp' || 
                e.key === 'PageDown' || 
                e.key === 'PageUp' || 
                e.key === 'Home' || 
                e.key === 'End' || 
                e.key === ' '
            )) {
                e.preventDefault()
            }
        }

        const handleTouchMove = (e: { preventDefault: () => void }) => {
            if (!scroll) {
                e.preventDefault()
            }
        }

        if (!scroll) {
            // Prevent scrolling
            document.body.style.overflow = 'hidden'
            document.documentElement.style.overflow = 'hidden'
            
            // Add event listeners
            window.addEventListener('wheel', handleWheel, { passive: false })
            window.addEventListener('keydown', handleKeyDown)
            document.addEventListener('touchmove', handleTouchMove, { passive: false })
        } else {
            // Re-enable scrolling
            document.body.style.overflow = 'auto'
            document.documentElement.style.overflow = 'auto'
        }

        return () => {
            // Cleanup
            document.body.style.overflow = 'auto'
            document.documentElement.style.overflow = 'auto'
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('touchmove', handleTouchMove)
        }
    }, [scroll])

    return (
        <div className="w-full">
            <section className="w-full flex justify-center ">
                <div className=' px-7 lg:px-0 max-w-[936px] w-full'>
                    <Header setScroll={setScroll}></Header>
                </div>
            </section>

            {/* HeroSection */}
            <section className="w-full h-full  flex bg-[#fefcfb] pb-20 justify-center ">
                <div className='max-w-[936px] px-7 lg:px-0 bg-[#fefcfb] w-full '>
                    <HeroSection></HeroSection>
                </div>
            </section>

            <section className="w-full h-full  pb-22 flex bg-[#f7f8fc]  justify-center">
                <div className='max-w-[936px] px-7 lg:px-0 w-full'>
                    <ThingsYouNeedSection></ThingsYouNeedSection>
                </div>
            </section>

            <section className="w-full pb-22  bg-[#fefcfb] flex justify-center">
                <div className='max-w-[936px] px-7 lg:px-0 w-full'>
                    <DealsAndDiscountSection></DealsAndDiscountSection>
                </div>
            </section>

            <section className="w-full h-full  flex bg-[#fffaf7] justify-center">
                <div className='max-w-[936px] px-7 lg:px-0 pb-27 w-full'>
                    <BestVacationPlanSection />
                </div>
            </section>

            <section className="w-full flex h-full  pb-32 bg-[#f7f8fc] justify-center ">
                <div className='max-w-[936px] px-7 lg:px-0 w-full'>
                    <PeopleSayAboutSection />
                </div>
            </section>

            <section className="w-full flex h-full  pb-22 bg-[#fefcfb] justify-center ">
                <div className='max-w-[936px] px-7 lg:px-0 w-full'>
                    <LatestblogSection></LatestblogSection>
                </div>
            </section>

            <section className="w-full flex h-full   bg-[#fefcfb] justify-center bg-[linear-gradient(to_bottom,_#fefcfb_50%,_#f7f8fc_50%)]">
                <div className='max-w-[936px] px-7 lg:px-0 w-full'>
                    <SubscribeSection />
                </div>
            </section>

            <section className="w-full flex h-full  pb-22 bg-[#f7f8fc] justify-center ">
                <div className='max-w-[936px] px-7 lg:px-0 w-full'>
                    <ContactSection />
                </div>
            </section>

            <section className="w-full flex h-full pb-5 bg-[#f7f8fc] justify-center ">
                <div className='max-w-[936px] px-7 lg:px-0 w-full'>
                    <Footer/>
                </div>
            </section>
        </div>
    )
}

export default Page