import React from "react";
import { useNavigate } from "react-router-dom";

import { payment, money } from "../assets";
import { FundCard } from "./";

// Mock Data
const length = 5;

const mockCampaign = [
  {
    title: "Funds for Home",
    owner: "Rohit",
    description: "I need funds for home",
    target: 0.8,
    deadline: 29,
    image: money,
    amountCollected: 0.5,
  },
  {
    title: "Funds for Home",
    owner: "Rohit",
    description: "I need funds for home",
    target: 0.8,
    deadline: 29,
    image: money,
    amountCollected: 0.5,
  },
  {
    title: "Funds for Home",
    owner: "Rohit",
    description: "I need funds for home",
    target: 0.8,
    deadline: 29,
    image: money,
    amountCollected: 0.5,
  },
  {
    title: "Funds for Home",
    owner: "Rohit",
    description: "I need funds for home",
    target: 0.8,
    deadline: 29,
    image: money,
    amountCollected: 0.5,
  },
  {
    title: "Funds for Home",
    owner: "Rohit",
    description: "I need funds for home",
    target: 0.8,
    deadline: 29,
    image: money,
    amountCollected: 0.5,
  },
  {
    title: "Funds for Home",
    owner: "Rohit",
    description: "I need funds for home",
    target: 0.8,
    deadline: 29,
    image: money,
    amountCollected: 0.5,
  },
];

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  const handleNavigateYeildPreview = () => {
    navigate(`/YieldPreview`);
  };

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({length})
      </h1>

      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {/* {isLoading && (
          <img src={loader} alt="loader" className="w-[100px] h-[100px]" />
        )} */}

        {/* SECTION If no campaigns are availalbe */}
        <div className="w-[-webkit-fill-available]">
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183] italic">
            Note- Goerli testnet is down-- app under development. Mock Data
            Shown!
          </p>
          {/* Personal Note for Rich in Red */}
          <p className="text-red-600 font-semibold text-[14px]">
            Hey Rich! I hope you’ve arrived on my project! 😄 Since I mentioned
            in our interview that I could learn Chart.js in no time, here I
            am—less than 1-2 days later, I’ve picked it up and used it here to
            showcase my skills! I built this page especially for you and
            Amana—check out the 📊{" "}
            <span
              className="underline text-green-600 font-bold cursor-pointer"
              onClick={() => handleNavigateYeildPreview()}
            >
              Yield Preview
            </span>{" "}
            to see it in action! I can learn anything with your support, and I’m
            super excited to dive into anything with some guidance. Let’s make
            DeFi awesome together! 🚀
          </p>
        </div>

        {/* SECTION loop over the campaigns array */}
        {length > 0 &&
          mockCampaign.map((campaign) => (
            <FundCard
              key={campaign.title}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default DisplayCampaigns;
