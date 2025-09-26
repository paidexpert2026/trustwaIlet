interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
}) => (
  <div className="flex flex-col items-center space-y-2">
    <button
      onClick={onClick}
      className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
    >
      {icon}
    </button>
    <span className="text-sm text-gray-300">{label}</span>
  </div>
);

export default ActionButton;