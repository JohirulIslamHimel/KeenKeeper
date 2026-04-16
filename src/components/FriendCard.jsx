import React from "react";
import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const { id, name, picture, days_since_contact, status, tags } = friend;

  //Color coding according to status

  const statusStyles = {
    "On-Track": "!bg-[#244D3F] !text-[#FFFFFF]",
    "Almost Due": "!bg-[#EFAD44] !text-[#FFFFFF]",
    Overdue: "!bg-[#EF4444] !text-[#FFFFFF]",
  };

  return (
    <Link
      to={`/friend/${id}`}
      className="block transition-transform hover:scale-[1.02]"
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md h-full">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-4 ring-gray-50">
          <img
            src={picture}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold text-[#1F2937]">{name}</h3>
        <p className="text-[#64748B]  mb-4">{days_since_contact}d ago</p>
        <div className="flex flex-wrap justify-center gap-2 mb-5 min-h-15 items-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#CBFADB] text-[#244D3F] text-[10px] font-bold uppercase rounded-full tracking-wider whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className={`mt-auto px-4 py-1.5 rounded-full text-sm font-bold  ${
            statusStyles[status] || "bg-gray-100! text-white"
          }`}
        >
          {status}
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;
