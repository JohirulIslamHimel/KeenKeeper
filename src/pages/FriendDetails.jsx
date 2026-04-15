import React from "react";
import { useParams } from "react-router-dom";
import useFriendData from "../hooks/useFriendData";
import { Clock, MessageSquare, Phone, Target, Video } from "lucide-react";
import QuickCheckIn from "../components/QuickCheckIn";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends } = useFriendData();

  const friend = friends.find((f) => f.id === parseInt(id));

  if (!friend) {
    return (
      <div className="text-center py-20 text-2xl font-bold">
        Loading or Friend Not Found...
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Profile section on the left side*/}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
          />
          <h2 className="text-2xl font-bold text-[#1F2937]">{friend.name}</h2>

          <div className="flex flex-wrap justify-center gap-2 my-3">
            <span className="bg-[#EF4444] text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
              {friend.status}
            </span>
            <span className="bg-[#DCFCE7] text-[#15803D] text-xs px-3 py-1 rounded-full uppercase font-bold">
              {friend.tags[0]}
            </span>
          </div>

          <p className="text-[#64748B] italic mb-2">"{friend.bio}"</p>
          <p className="text-sm text-gray-400">Preferred: {friend.email}</p>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <button className="w-full py-3 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-gray-50 cursor-pointer">
            <Clock size={18} /> Snooze 2 Weeks
          </button>
          <button className="w-full py-3 bg-white border border-gray-200 rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-gray-50 text-gray-600 cursor-pointer">
            Archive
          </button>
          <button className="w-full py-3 bg-white border border-red-100 rounded-xl flex items-center justify-center gap-2 font-medium text-red-500 hover:bg-red-50 cursor-pointer">
            Delete
          </button>
        </div>
      </div>

      <div className="lg:col-span-8 space-y-6">
        {/* The top 3 small cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h3 className="text-3xl font-bold text-[#244D3F]">
              {friend.days_since_contact}
            </h3>
            <p className="text-gray-400 text-sm">Days Since Contact</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h3 className="text-3xl font-bold text-[#244D3F]">{friend.goal}</h3>
            <p className="text-gray-400 text-sm">Goal (Days)</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <h3 className="text-xl font-bold text-[#244D3F]">
              {friend.next_due_date}
            </h3>
            <p className="text-gray-400 text-sm">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal  */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative">
          <button className="absolute top-6 right-6 px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
            Edit
          </button>
          <h3 className="text-lg font-bold text-[#244D3F] mb-4 flex items-center gap-2">
            <Target size={20} /> Relationship Goal
          </h3>
          <p className="text-gray-500">
            Connect every{" "}
            <span className="font-bold text-[#244D3F]">{friend.goal} days</span>
          </p>
        </div>

        {/* Quick Check-In  */}
        <QuickCheckIn friend={friend}></QuickCheckIn>
      </div>
    </div>
  );
};

export default FriendDetails;
