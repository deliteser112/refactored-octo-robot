import React from "react";

const SkeletonLoading: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-red">
      {[...Array(12)].map((_, idx) => (
        <div
          className="animate-pulse p-4 border rounded hover:bg-e5f0f5 cursor-pointer m-2"
          key={idx}
        >
          <div className="h-[160px] bg-gray-300 rounded w-full"></div>
          <div className="space-y-2 mt-4">
            <div className="h-[20px] bg-gray-300 rounded w-[120px]"></div>
            <div className="h-[80px] bg-gray-300 rounded w-full mt-1"></div>
            <div className="h-[20px] bg-gray-300 rounded w-[200px] mt-1"></div>
            <div className="h-[20px] bg-gray-300 rounded w-[200px] mt-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoading;
