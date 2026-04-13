import { Plus } from "lucide-react";
import React from "react";
import SummaryCards from "../components/SummaryCards";

const Home = () => {
  return (
    <div className="space-y-10">
      {/* Banner section */}
      <section className="hero bg-base-200/50 rounded-2xl py-16 md:py-24">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#134e4a] leading-tight">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-base md:text-lg text-[#64748B] px-4 md:px-10">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn bg-[#244D3F] hover:bg-[#1a3a2e] text-white border-none px-6 font-bold ">
              <Plus size={20} />
              Add a Friend
            </button>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4">
        <SummaryCards />
      </div>
    </div>
  );
};

export default Home;
