interface AlphaTokenProps {
  name: string;
  symbol: string;
  price: string;
  change: number;
  changePercent: string;
  icon: React.ReactNode;
}

const AlphaToken: React.FC<AlphaTokenProps> = ({
  name,
  symbol,
  price,
  change,
  changePercent,
  icon,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="flex items-center justify-between p-4 bg-gray-500/20 rounded-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center relative">
          {icon}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-600 rounded flex items-center justify-center">
            <div className="w-2 h-2 bg-yellow-400 rounded"></div>
          </div>
        </div>
        <div>
          <div className="text-white font-semibold">{name}</div>
          <div className="text-gray-400 text-sm">{symbol}</div>
        </div>
      </div>

      <div className="text-right">
        <div className="text-white font-semibold">${price}</div>
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
  );
};

export default AlphaToken;