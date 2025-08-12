import React from 'react'
import HeroSection from './component/heroSection/HeroSection'
import Header from '@/common/Header'
import ThingsYouNeedSection from './component/thingsYouNeddSection/ThingsYouNeedSection'
import DealsAndDiscountSection from './component/dealsAndDiscountSection/DealsAndDiscountSection'
import BestVacationPlanSection from './component/bestVacationPlanSection/BestVacationPlanSection'
import PeopleSayAboutSection from './component/peopleSayAboutSection/PeopleSayAboutSection'
import LatestblogSection from './component/latestblog/LatestblogSection'
import SubscribeSection from './component/subscribeSection/SubscribeSection'
import FooterSection from '@/common/footerSection/FooterSection'
function page() {
    return (
        <div className='w-full '>

            <section className="w-full flex justify-center ">

                <div className=' px-7 lg:px-0 max-w-[936px] w-full'>
                    <Header></Header>
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

            {/* 
            <section className="w-full flex justify-center">

                <div className='max-w-[936px] w-full'>
                    <LatestblogSection></LatestblogSection>
                </div>

            </section>

            <section className="w-full flex justify-center">

                <div className='max-w-[936px] w-full'>
                    <SubscribeSection />
                </div>

            </section>

            <section className="w-full flex justify-center">

                <div className='max-w-[936px] w-full'>
                    <FooterSection />
                </div>

            </section> */}






        </div>
    )
}

export default page