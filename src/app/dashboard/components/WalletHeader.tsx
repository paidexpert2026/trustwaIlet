import React from "react";
import {
  Settings,
  Maximize2,
  Search,
  Copy
} from "lucide-react";

const WalletHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-black/80">
      <div className="flex items-center gap-4">
        <Settings className="w-6 h-6 text-gray-300" />
        <Maximize2 className="w-6 h-6 text-gray-300" />
      </div>

      <div className="flex items-center gap-2">
        <h1 className="text-white text-lg font-semibold">Main Wallet</h1>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </div>

      <div className="flex items-center gap-4">
        <Copy className="w-6 h-6 text-gray-300" />
        <Search className="w-6 h-6 text-gray-300" />
      </div>
    </div>
  );
};

export default WalletHeader;
