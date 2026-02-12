import React from "react";

export const balance = 210013.78;

const BalanceDisplay= () => {
  return (
    <div className="text-center py-8 bg-black/80">
      <div className="text-5xl font-bold text-white mb-2">${balance}</div>
      <div className="text-gray-400">${balance}(0.00%)</div>
    </div>
  );
};

export default BalanceDisplay
