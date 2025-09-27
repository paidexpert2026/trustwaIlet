import { copyToClipboard, shortenAddress } from "@/lib/formatter";
import { QrCode, Copy } from "lucide-react";
import { useRouter } from "next/navigation";

interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  address: string;
  network: string;
  icon: string;
  iconBg: string;
  disabled?: boolean;
}

interface CryptoSectionProps {
  title: string;
  cryptos: CryptoCurrency[];
  onCryptoSelect: (crypto: CryptoCurrency) => void;
  copied: string | null;
  setCopied: (id: string | null) => void;
}

const CryptoSection: React.FC<CryptoSectionProps> = ({
  title,
  cryptos,
  onCryptoSelect,
  copied,
  setCopied,
}) => {
  const router = useRouter();
//   const [ copied, setCopied] = useState(false)
  return (
    <div className="mb-8">
      <h2 className="text-lg font-medium text-gray-300 mb-4">{title}</h2>
      <div className="space-y-2">
        {cryptos.map((crypto) => (
          <div
            key={crypto.id}
            className={`${
              !crypto.disabled ? "bg-gray-900 opacity-15" : "bg-gray-900"
            } rounded-xl p-4 flex items-center justify-between hover:bg-gray-800 transition-colors cursor-pointer`}
            onClick={() => onCryptoSelect(crypto)}
          >
            <div className="flex items-center space-x-4">
              <div
                className={`w-12 h-12 ${crypto.iconBg} rounded-full flex items-center justify-center text-white font-bold text-lg`}
              >
                {crypto.icon}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">
                    {crypto.symbol}
                  </span>
                  <span className="text-gray-400 text-sm">{crypto.name}</span>
                </div>
                <p className="text-gray-400 text-sm font-mono">
                  {shortenAddress(crypto.address)}
                </p>
              </div>
            </div>
            {crypto?.disabled ? (
              <div className="flex items-center space-x-3 relative">
                <button
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  onClick={() => router.push("/qr")}
                >
                  <QrCode className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(crypto.address);
                    setCopied(crypto.id);
                    setTimeout(() => setCopied(null), 1500);
                  }}
                >
                  <Copy className="w-5 h-5 text-gray-400" />
                </button>
                {copied === crypto.id && (
                  <p className="bg-gray-500/40 py-0.5 px-1 text-xs absolute text-white rounded-md -top-4 -right-7">
                    copied
                  </p>
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoSection