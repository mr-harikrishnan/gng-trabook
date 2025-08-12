import React from "react";
import BestVacationPlanCard from "./BestVacationPlanCard";
import img1 from "@/assets/bestVacationPlan/Plan Image 1.png";
import img2 from "@/assets/bestVacationPlan/Plan Image 2.png";
import img3 from "@/assets/bestVacationPlan/Plan Image 3.png";
import LeftAero from "@/common/LeftAero";
import RightAero from "@/common/RightAero";
import Image from "next/image";
import treeImg from "@/assets/bestVacationPlan/treeImg.png"
function BestVacationPlanSection() {
  const data = [
    {
      img: img1,
      placeAndCountry: "Rome, Italty",
      price: "$5,42k",
      duration: "10 Days Trip",
      rating: "4.8",
    },
    {
      img: img2,
      placeAndCountry: "London,UK",
      price: "$2,42k",
      duration: "07 Days Trip",
      rating: "4.7",
    },
    {
      img: img3,
      placeAndCountry: "Osaka,Japan",
      price: "$5,42k",
      duration: "10 Days Trip",
      rating: "4.8",
    },
  ];

  return (
    <div className="w-full flex flex-col  pt-22 bg-[#fffaf7]">
      <div className="relative w-full flex flex-col justify-center items-center">
        
        <Image className="absolute top-[-60px]  md:right-[150px] md:top-1.5 " width={85} alt="tree image" src={treeImg} />

        <h1 className="text-[38.5px] font-volkhov-bold font-extrabold text-center">
          Best <span className="text-orange-500">vacation plan</span>
        </h1>
        <p className="mt-3 text-[14.5px] text-center leading-6.5 text-secondary max-w-[450px]">
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
        <div className="flex justify-end w-full -mt-0.5 mx-auto gap-6 px-6 lg:px-0">
          <button >
            <LeftAero />
          </button>
          <button >
            <RightAero />
          </button>
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-0 txs:grid-cols-2 mt-4.5 gap-6 w-full">
        {data.map((item, index) => (
          <BestVacationPlanCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default BestVacationPlanSection;
