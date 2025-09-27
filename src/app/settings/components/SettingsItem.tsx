import { ChevronRight } from "lucide-react";

interface SettingsItemProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
  showDivider?: boolean;
}

const SettingsItem: React.FC<SettingsItemProps> = ({
  icon,
  title,
  onClick,
  showDivider = false,
}) => (
  <>
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 hover:bg-gray-800/40 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className="text-gray-400">{icon}</div>
        <span className="text-white text-lg font-medium">{title}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
    {showDivider && <div className="border-t border-gray-800 mx-4" />}
  </>
);

export default SettingsItem;