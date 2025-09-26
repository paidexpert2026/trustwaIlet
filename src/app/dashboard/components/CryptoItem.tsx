interface CryptoItemProps {
  name: string;
  fullName: string;
  price: number;
  change: number;
  changePercent: string;
  balance: string;
  icon: React.ReactNode;
}

const CryptoItem: React.FC<CryptoItemProps> = ({
  name,
  fullName,
  price,
  change,
  changePercent,
  balance,
  icon,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-gray-400 text-sm">{fullName}</div>
        </div>
        <div className="ml-4">
          <div className="text-white">${price.toLocaleString()}</div>
          <div
            className={`text-sm ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? "+" : ""}
            {changePercent}%
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-white font-semibold">{balance}</div>
        <div className="text-gray-400">$0.00</div>
      </div>
    </div>
  );
};

export default CryptoItem;