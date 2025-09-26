import { ArrowUpRight, Landmark, Plus, RefreshCw, TrendingUp } from "lucide-react";
import ActionButton from "./ActionButton";
import { useRouter } from "next/navigation";

const ActionButtons: React.FC = () => {
  const router = useRouter();
  const handleFundClick = () => {
    router.push("/fund");
    // console.log("Fund button clicked");
  };

  return (
    <div className="flex justify-around px-4 py-6 bg-black/80">
      <ActionButton icon={ArrowUpRight} label="Send" />
      <ActionButton
        icon={Plus}
        label="Fund"
        isActive={true}
        onClick={handleFundClick}
      />
      <ActionButton icon={RefreshCw} label="Swap" />
      <ActionButton icon={Landmark} label="Sell" />
      <ActionButton icon={TrendingUp} label="Earn" />
    </div>
  );
};

export default ActionButtons;