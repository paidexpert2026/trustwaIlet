import { Clock, Sliders } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const TabNavigation: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("Crypto");
  const tabs: string[] = ["Crypto", "Watchlist", "NFTs"];

  return (
    <div className="flex border-b border-gray-800 bg-black/80 px-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-3 px-4 text-sm font-medium ${
            activeTab === tab
              ? "text-white border-b-2 border-green-500"
              : "text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}

      <div className="ml-auto flex items-center gap-3">
        <Clock className="w-5 h-5 text-gray-400" onClick={() => router.push("/history")} />
        <Sliders className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default TabNavigation
