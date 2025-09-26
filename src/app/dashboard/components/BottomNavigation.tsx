import { Home, BarChart3, Repeat, Gift, Compass } from "lucide-react";
import { useState } from "react";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
}

const BottomNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Home");

  const navItems: NavItem[] = [
    { icon: Home, label: "Home", color: "text-green-500" },
    { icon: BarChart3, label: "Trending", color: "text-gray-400" },
    { icon: Repeat, label: "Swap", color: "text-gray-400" },
    { icon: Gift, label: "Earn", color: "text-gray-400" },
    { icon: Compass, label: "Discover", color: "text-gray-400" },
  ];

  return (
    <div className="fixed bottom-0 w-[384px] max-w-sm mx-auto">
      <div className="flex justify-around items-center py-2 bg-black border-t border-gray-800">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className="flex flex-col items-center py-2 relative"
          >
            <item.icon
              className={`w-6 h-6 ${
                activeTab === item.label ? "text-green-500" : item.color
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                activeTab === item.label ? "text-green-500" : item.color
              }`}
            >
              {item.label}
            </span>
            {item.label === "Discover" && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;
