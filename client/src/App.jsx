import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  CampaignDetails,
  CreateCampaign,
  Profile,
  YieldPreview,
} from "./pages";
import { Navbar, Sidebar } from "./components";

const App = () => {
  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="hidden sm:flex mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/YieldPreview" element={<YieldPreview />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
