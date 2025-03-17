import React from "react";

import { tagType, thirdweb, money } from "../assets";
import { daysLeft } from "../utils";

// const mockData = [
//   {
//     imgUrl: '',

//   }
// ]

const FundCard = ({
  owner,
  title,
  description,
  target,
  deadline,
  image,
  amountCollected,
  handleClick,
}) => {
  const remainingDays = daysLeft(deadline || 5000);

  return (
    <div
      className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={image || money}
        alt="fund"
        className="w-full h-[158px] object-cover rounded-[15px]"
      />

      <div className="flex flex-col p-4">
        <div className="flex items-center mb-[18px]">
          <img
            src={tagType}
            alt="tag"
            className="w-[17px] h-[17px] object-contain"
          />
          <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">
            Saas
          </p>
        </div>

        {/* NOTE truncate = tailwind property to shorten the big title */}
        <div className="block">
          <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading[26px] truncate">
            {title || "Raise For Home"}
          </h3>
          <p className="mt-[5px] font-epilogue font-normal text-[12px] text-[#808191] text-left leading-[18px] truncate">
            {description || "Yo"}
          </p>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd]  leading-[18px] ">
              {amountCollected || 0.7} ETH
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] text-[#808191] leading-[18px] sm:max-w-[120px] truncate">
              Raised of {target || 1.7} ETH
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd]  leading-[18px] ">
              {remainingDays || "28"}
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] text-[#808191] leading-[18px] sm:max-w-[120px] truncate">
              Days left
            </p>
          </div>
        </div>

        <div className="flex items-center mt-[20px] gap-[12px]">
          <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
            <img
              src={thirdweb}
              alt="owner"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
            by <span className="text-[#b2b3bd]">{owner || "Rohit"}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FundCard;
