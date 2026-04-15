import React, { useState } from "react";
import useFriendData from "../hooks/useFriendData";
import {
  ChevronDown,
  Clock,
  MessageCircle,
  MessageSquare,
  Phone,
  Video,
} from "lucide-react";

const TimeLine = () => {
  const { timeline } = useFriendData();
  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter((item) => item.type === filter);
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto p-4 md:p-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-4 md:mb-6">
          Timeline
        </h1>

        {/* Timeline Filter  */}
        <div className="mb-8 relative w-full sm:w-64">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none w-full bg-white border border-gray-200 text-gray-600 py-3 px-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]/10 focus:border-[#244D3F] cursor-pointer transition-all font-medium text-sm"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <ChevronDown size={18} />
          </div>
        </div>

        <div className="space-y-4">
          {filteredTimeline.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm px-4">
              <p className="text-gray-400 text-sm md:text-base">
                {filter === "All"
                  ? "No events in your timeline yet."
                  : `No ${filter} logs found.`}
              </p>
            </div>
          ) : (
            filteredTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon Section */}
                <div className="shrink-0 p-3 bg-gray-50 rounded-lg">
                  {item.type === "Call" && (
                    <Phone
                      size={22}
                      className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
                    />
                  )}
                  {item.type === "Text" && (
                    <MessageCircle
                      size={22}
                      className="w-5 h-5 md:w-6 md:h-6 text-green-600"
                    />
                  )}
                  {item.type === "Video" && (
                    <Video
                      size={22}
                      className="w-5 h-5 md:w-6 md:h-6 text-purple-600"
                    />
                  )}
                  {!["Call", "Text", "Video"].includes(item.type) && (
                    <Clock
                      size={22}
                      className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
                    />
                  )}
                </div>

                {/* Text Section */}
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-base font-bold text-gray-800">
                    {item.type}{" "}
                    <span className="text-gray-400 ">
                      with {item.title.split("with")[1] || "Friend"}
                    </span>
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-400 mt-1 font-medium tracking-wide">
                    {item.date}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
