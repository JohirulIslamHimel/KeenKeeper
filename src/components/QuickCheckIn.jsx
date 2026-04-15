import React, { useContext } from "react";
import { FriendContext } from "../context/FriendContext";
import { toast } from "react-toastify";
import { MessageSquare, Phone, Video } from "lucide-react";

const QuickCheckIn = ({ friend }) => {
  const { addTimelineEntry } = useContext(FriendContext);

  const handleAction = (type) => {
    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${friend.name}`,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };

    addTimelineEntry(newEntry);
    toast.success(`${type} added!`, { position: "top-center" });
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="text-lg font-bold text-[#244D3F] mb-6">Quick Check-In</h3>
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleAction("Call")}
          className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <Phone className="mb-2 text-[#244D3F]" />
          <span className="text-sm font-medium">Call</span>
        </button>

        <button
          onClick={() => handleAction("Text")}
          className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <MessageSquare className="mb-2 text-[#244D3F]" />
          <span className="text-sm font-medium">Text</span>
        </button>

        <button
          onClick={() => handleAction("Video")}
          className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <Video className="mb-2 text-[#244D3F]" />
          <span className="text-sm font-medium">Video</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCheckIn;
