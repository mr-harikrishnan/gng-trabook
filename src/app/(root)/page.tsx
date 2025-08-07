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
        <div className='w-full'>

            <section className="w-full flex   justify-center">

                <div className='max-w-[920px] w-full'>
                    <Header></Header>
                </div>

            </section>

            {/* HeroSection */}

            <section className="w-full h-full flex   justify-center">

                <div className='max-w-[920px] w-full'>
                    <HeroSection></HeroSection>
                </div>

            </section>

            {/* ThingsYouNeedSection */}


            <section className="w-full h-full flex  justify-center">

                <div className='max-w-[920px] w-full'>
                    <ThingsYouNeedSection></ThingsYouNeedSection>
                </div>

            </section>

            {/* DealsAndDiscout */}
            <section className="w-full h-full flex justify-center">

                <div className='max-w-[920px] w-full'>
                    <DealsAndDiscountSection></DealsAndDiscountSection>
                </div>

            </section>

            <section className="w-full h-full flex justify-center">

                <div className='max-w-[920px] w-full'>
                    <BestVacationPlanSection />
                </div>

            </section>

            <section className="w-full flex justify-center">

                <div className='max-w-[920px] w-full'>
                    <PeopleSayAboutSection />
                </div>

            </section>

            <section className="w-full flex justify-center">

                <div className='max-w-[920px] w-full'>
                    <LatestblogSection></LatestblogSection>
                </div>

            </section>

            <section className="w-full flex justify-center">

                <div className='max-w-[920px] w-full'>
                    <SubscribeSection />
                </div>

            </section>

            <section className="w-full flex justify-center">

                <div className='max-w-[920px] w-full'>
                    <FooterSection />
                </div>

            </section>






        </div>
    )
}

export default page