import React, { useContext } from "react";

import { FriendContext } from "../../context/FriendContext";
import { Pie, ResponsiveContainer, PieChart, Tooltip, Legend } from "recharts";

const Stats = () => {
  const { timeline } = useContext(FriendContext);

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#244D3F" },
    { name: "Text", value: textCount, fill: "#7E35E1" },
    { name: "Video", value: videoCount, fill: "#37A163" },
  ];
  return (
    <div className="max-w-4xl mx-auto my-10 shadow-lg p-6 md:p-10 rounded-2xl border border-gray-100 bg-white container">
      <div className="mb-10">
        <h2 className="font-extrabold text-3xl text-[#1F2937]">
          Friendship Analytics
        </h2>
        <p className="text-[#244D3F] font-medium mt-2">By Interaction Type</p>
      </div>

      <div className="flex flex-col items-center justify-center">
        {timeline.length === 0 ? (
          <div className="py-20 text-gray-400">
            No interaction data to show yet!
          </div>
        ) : (
          <div className="w-full" style={{ height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius="70%"
                  outerRadius="90%"
                  cornerRadius={10}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                  isAnimationActive={true}
                ></Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stats;
