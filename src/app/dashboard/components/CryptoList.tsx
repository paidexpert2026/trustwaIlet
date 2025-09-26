import { ChevronUp } from "lucide-react";
import CryptoItem from "./CryptoItem";
import { useState } from "react";

const CryptoList: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-black/80">
      <CryptoItem
        name="BTC"
        fullName="Bitcoin"
        price={113811.59}
        change={1.07}
        changePercent="1.07"
        balance="0"
        icon={
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">₿</span>
          </div>
        }
      />

      <CryptoItem
        name="ETH"
        fullName="Ethereum"
        price={4177.25}
        change={-0.21}
        changePercent="-0.21"
        balance="0"
        icon={
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                <path d="M12 2L4 12.5L12 17L20 12.5L12 2ZM12 18.5L4 13.5L12 22L20 13.5L12 18.5Z" />
              </svg>
            </div>
          </div>
        }
      />

      <div className="text-center py-6">
        <button className="text-green-500 font-semibold text-lg">
          Manage crypto
        </button>
      </div>

      <div className="text-center py-4">
        <button
          className="flex items-center justify-center gap-2 text-gray-400 mx-auto"
          onClick={toggleExpanded}
        >
          <span>{isExpanded ? "View less" : "View more"}</span>
          <ChevronUp
            className={`w-4 h-4 transition-transform ${
              isExpanded ? "" : "rotate-180"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CryptoList;