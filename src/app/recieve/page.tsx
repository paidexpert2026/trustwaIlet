"use client"
import React, { useState } from "react";
import { ChevronLeft, Search, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import CryptoSection from "./components/CryptoSection";

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

export default function ReceivePage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // const [selectedNetwork, setSelectedNetwork] = useState<string>("All Networks");
  const router = useRouter();
  const [copied, setCopied] = useState<string | null>("");
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

  const popularCryptos: CryptoCurrency[] = [
    {
      id: "btc",
      symbol: "BTC",
      name: "Bitcoin",
      address: "bc1qs06zxxq7ldtfys3n3v2799a3uj48a25usvk63n",
      network: "Bitcoin",
      icon: "₿",
      iconBg: "bg-orange-500",
      disabled: true,
    },
    {
      id: "eth",
      symbol: "ETH",
      name: "Ethereum",
      address: "0xeC7B2...c2E38d4",
      network: "Ethereum",
      icon: "♦",
      iconBg: "bg-gray-600",
      disabled: false,
    },
    {
      id: "sol",
      symbol: "SOL",
      name: "Solana",
      address: "2k32vbi...arinTFX",
      network: "Solana",
      icon: "◉",
      iconBg: "bg-purple-600",
      disabled: false,
    },
    {
      id: "twt",
      symbol: "TWT",
      name: "BNB Smart Chain",
      address: "0xeC7B2...c2E38d4",
      network: "BNB Smart Chain",
      icon: "🛡",
      iconBg: "bg-blue-600",
      disabled: false,
    },
    {
      id: "bnb",
      symbol: "BNB",
      name: "BNB Smart Chain",
      address: "0xeC7B2...c2E38d4",
      network: "BNB Smart Chain",
      icon: "⬢",
      iconBg: "bg-yellow-500",
      disabled: false,
    },
    {
      id: "usdt",
      symbol: "USDT",
      name: "Ethereum",
      address: "0xeC7B2...c2E38d4",
      network: "Ethereum",
      icon: "₮",
      iconBg: "bg-green-600",
      disabled: false,
    },
    {
      id: "usdc",
      symbol: "USDC",
      name: "Ethereum",
      address: "0xeC7B2...c2E38d4",
      network: "Ethereum",
      icon: "$",
      iconBg: "bg-blue-500",
      disabled: false,
    },
  ];

  const allCryptos: CryptoCurrency[] = [
    {
      id: "bnb-beacon",
      symbol: "BNB",
      name: "BNB Beacon Chain",
      address: "bnb1v6w...jexwmgv",
      network: "BNB Beacon Chain",
      icon: "⬢",
      iconBg: "bg-yellow-500",
    },
    {
      id: "xrp",
      symbol: "XRP",
      name: "XRP",
      address: "r...",
      network: "XRP Ledger",
      icon: "X",
      iconBg: "bg-gray-700",
    },
  ];

  const filteredPopularCryptos = popularCryptos.filter(
    (crypto) =>
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAllCryptos = allCryptos.filter(
    (crypto) =>
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCryptoSelect = (crypto: CryptoCurrency): void => {
    console.log("Selected crypto:", crypto);
    if(crypto.id !== "btc") {
      handleDisabledClick()
    }    // Handle crypto selection logic here
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-black/80 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-6">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <button className="mr-4 p-1">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium">Receive</h1>
        </div>
      </div>

      <div className="px-4">
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full bg-gray-900 border-0 rounded-full py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Network Filter */}
        <div className="mb-6">
          <button
            className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => {
              /* Handle network filter */
            }}
          >
            {/* <span>{selectedNetwork}</span> */}
            <span>All Networks</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Popular Section */}
        {filteredPopularCryptos.length > 0 && (
          <CryptoSection
            title="Popular"
            cryptos={filteredPopularCryptos}
            onCryptoSelect={handleCryptoSelect}
            copied={copied}
            setCopied={setCopied}
          />
        )}

        {/* All Crypto Section */}
        {filteredAllCryptos.length > 0 && (
          <CryptoSection
            title="All crypto"
            cryptos={filteredAllCryptos}
            onCryptoSelect={handleCryptoSelect}
            copied={copied}
            setCopied={setCopied}
          />
        )}

        {/* No Results */}
        {searchTerm &&
          filteredPopularCryptos.length === 0 &&
          filteredAllCryptos.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">
                No cryptocurrencies found matching &quot;{searchTerm}&quot;
              </p>
            </div>
          )}
      </div>

      {showCopiedMessage && (
        <div className="fixed top-20 max-w-[320px] left-1/2 transform -translate-x-1/2 bg-red-600/90 text-white px-4 py-2 rounded-lg z-50">
          Only BTC is allowed at the moment
        </div>
      )}
    </div>
  );
}
