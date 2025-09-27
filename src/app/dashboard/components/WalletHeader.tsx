import React, { useState } from "react";
import {
  Settings,
  // Maximize2,
  Search,
  Copy
} from "lucide-react";
import { useRouter } from "next/navigation";

const WalletHeader = () => {
  const [walletAddress] = useState<string>("bc1qs06zxxq7ldtfys3n3v2799a3uj48a25usvk63n");
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);
  const router = useRouter()
  
  const handleCopyAddress = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-black/80">
      <div className="flex items-center gap-4">
        <Settings className="w-6 h-6 text-gray-300 cursor-pointer" onClick={() => router.push("/settings")} />
        {/* <Maximize2 className="w-6 h-6 text-gray-300" /> */}
      </div>

      <div className="flex items-center gap-2">
        <h1 className="text-white text-lg font-semibold">Main Wallet</h1>
        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
      </div>

      <div className="flex items-center gap-4">
        <Copy className="w-6 h-6 text-gray-300" onClick={handleCopyAddress} />
        <Search className="w-6 h-6 text-gray-300" />
      </div>

      {showCopiedMessage && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg z-50">
          Address copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default WalletHeader;
