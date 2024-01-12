import React from "react";

const NoData: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="mt-6 text-lg font-semibold text-gray-700">
        No Data Found
      </h2>
      <p className="mt-2 text-gray-500">
        We couldn't find any data matching your search.
      </p>
    </div>
  );
};

export default NoData;
