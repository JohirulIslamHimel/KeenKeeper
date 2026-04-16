import React, { useState } from "react";
import useFriendData from "../hooks/useFriendData";
import {
  ChevronDown,
  Clock,
  MessageCircle,
  Phone,
  Video,
  Search,
} from "lucide-react";
import Loading from "../components/Loading";

const TimeLine = () => {
  const { timeline, loading } = useFriendData();
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");

  if (loading) {
    return <Loading />;
  }

  // Logic: Filter + Search + Sort All
  const processedTimeline = timeline
    .filter((item) => {
      const matchesFilter = filter === "All" || item.type === filter;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto p-4 md:p-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-6">
          Timeline
        </h1>

        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              className="absolute left-3 top-3.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by friend name or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]/10 focus:border-[#244D3F] transition-all font-medium text-sm"
            />
          </div>

          {/* Filter and sort dropdown */}
          <div className="flex gap-3">
            <div className="relative w-40">
              <select
                value={filter}
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

            {/* Sort filter */}
            <div className="relative w-40">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="appearance-none w-full bg-white border border-gray-200 text-gray-600 py-3 px-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#244D3F]/10 focus:border-[#244D3F] cursor-pointer transition-all font-medium text-sm"
              >
                <option value="desc">Newest First</option>
                <option value="asc">Oldest First</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <ChevronDown size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Timeline list */}
        <div className="space-y-4">
          {processedTimeline.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm px-4">
              <p className="text-gray-400 text-sm md:text-base">
                {searchQuery
                  ? "No matching interactions found."
                  : "No events in your timeline yet."}
              </p>
            </div>
          ) : (
            processedTimeline.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icons */}
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

                {/* Text section */}
                <div className="flex flex-col">
                  <h3 className="text-sm md:text-base font-bold text-gray-800">
                    {item.type}{" "}
                    <span className="text-gray-400 font-normal">
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
