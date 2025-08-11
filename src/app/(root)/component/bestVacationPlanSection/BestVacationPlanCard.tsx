import React from "react";
import Image, { StaticImageData } from "next/image";
import navigationImage from "@/assets/bestVacationPlan/Navigation.png"

type Props = {
  img: StaticImageData | string;
  placeAndCountry: string;
  price: string;
  duration: string;
  rating: string;
};

const BestVacationPlanCard = ({ img, placeAndCountry, price, duration, rating }: Props) => {
  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <img src={typeof img === "string" ? img : img.src} alt={placeAndCountry} className="w-full  object-cover rounded-t-xl" />
      <div className="px-5.5 py-4">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-[19px] font-poppins-medium">{placeAndCountry}</h3>
          <span className="text-orange-500 text-[19px] mr-[-3px] font-poppins-semibold">{price}</span>
        </div>
        <div className="flex justify-between text-gray-500 mt-[12px] text-sm">
          <div className="flex items-center gap-[14px] ">
            <Image className="" src={navigationImage} width={16} alt="Navigation Image"/>
            <span className="text-[13px] font-poppins-medium  ">{duration}</span>
          </div>
          <div className="flex items-center gap-1 mr-[-4px]">
            <svg
              className="w-4 h-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.176 0l-3.39 2.46c-.785.57-1.84-.197-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestVacationPlanCard;
