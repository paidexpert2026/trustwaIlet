import { ArrowUpRight, Landmark, Plus, RefreshCw, TrendingUp } from "lucide-react";
import ActionButton from "./ActionButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ActionButtons: React.FC = () => {
  const router = useRouter();
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const handleDisabledClick = async (): Promise<void> => {
    try {
      // await navigator.clipboard.writeText(walletAddress);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  const handleFundClick = () => {
    router.push("/fund");
    // console.log("Fund button clicked");
  };

  return (
    <div className="flex justify-around px-4 py-6 bg-black/80">
      <ActionButton
        icon={ArrowUpRight}
        label="Send"
        disabled={true}
        onClick={handleDisabledClick}
      />
      <ActionButton
        icon={Plus}
        label="Fund"
        isActive={true}
        onClick={handleFundClick}
      />
      <ActionButton
        icon={RefreshCw}
        label="Swap"
        disabled={true}
        onClick={handleDisabledClick}
      />
      <ActionButton
        icon={Landmark}
        label="Sell"
        disabled={true}
        onClick={handleDisabledClick}
      />
      <ActionButton
        icon={TrendingUp}
        label="Earn"
        disabled={true}
        onClick={handleDisabledClick}
      />

      {showCopiedMessage && (
        <div className="fixed top-20 max-w-[320px] left-1/2 transform -translate-x-1/2 bg-red-600/90 text-white px-4 py-2 rounded-lg z-50">
          Can&apos;t access this feature now, deposit to this account for a
          month before you can withdraw
        </div>
      )}
    </div>
  );
};

export default ActionButtons;