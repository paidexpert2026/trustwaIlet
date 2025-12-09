
interface ActionButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  label,
  isActive = false,
  disabled = false,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log(`${label} button clicked`);
      // Default navigation logic can be added here
    }
  };

  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={handleClick}
    >
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
          isActive && label === "Fund" ? "bg-green-500" : "bg-gray-500/20"
        } ${disabled ? "opacity-10" : "opacity-100"}`}
      >
        <Icon className={`w-8 h-8 ${isActive && label === "Fund" ? "text-black" : "text-white"}`} />
      </div>
      <span className="text-white text-sm mt-2 font-medium">{label}</span>
    </div>
  );
};

export default ActionButton;