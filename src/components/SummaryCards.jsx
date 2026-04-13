import React from "react";

const SummaryCards = () => {
  const stats = [
    { id: 1, label: "Total Friends", value: 10 },
    { id: 2, label: "On Track", value: 3 },
    { id: 3, label: "Need Attention", value: 6 },
    { id: 4, label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 md:px-0">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white shadow-sm border border-gray-100 rounded-xl p-8 text-center transition-transform hover:scale-105"
        >
          <h2 className="text-4xl font-bold text-[#244D3F] mb-2">
            {stat.value}
          </h2>
          <p className="text-[#64748B] ">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
