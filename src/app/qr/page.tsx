"use client"
import React, { useState } from "react";
import {
  ChevronLeft,
  Info,
  Copy,
  Download,
  Share2,
  ArrowDown,
} from "lucide-react";
import ActionButton from "./components/ActionButton";
import { useRouter } from "next/navigation";
import QRCodePlaceholder from "./components/QRCodePlaceholder";

export default function BitcoinReceivePage(): JSX.Element {
    const router = useRouter()
  const [walletAddress] = useState<string>(
    "bc1qs06zxxq7ldtfys3n3v2799a3uj48a25usvk63n"
  );
  const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);

  const handleCopyAddress = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

//   const handleDownloadQR = (): void => {
//     // In a real app, this would generate and download the QR code
//     console.log("Download QR code");
//   };

  const handleShareAddress = async (): Promise<void> => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Bitcoin Wallet Address",
          text: `My Bitcoin wallet address: ${walletAddress}`,
        });
      } else {
        // Fallback to clipboard
        await handleCopyAddress();
      }
    } catch (err) {
      console.error("Failed to share:", err);
    }
  };

  const handleSetAmount = (): void => {
    console.log("Set amount clicked");
    // Handle set amount logic
  };

  const handleDepositFromExchange = (): void => {
    console.log("Deposit from exchange clicked");
    // Handle deposit from exchange logic
  };

  return (
    <div className="max-w-sm mx-auto min-h-screen pb-10 bg-black/80 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-6">
        <button className="p-1" onClick={() => router.back()}>
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">Receive</h1>
        <button className="p-1">
          <Info className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      <div className="px-4 space-y-6">
        {/* Warning Banner */}
        <div className="bg-yellow-900/30 border border-yellow-600/30 rounded-xl p-4 flex items-start space-x-3">
          <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Info className="w-4 h-4 text-black" />
          </div>
          <p className="text-yellow-200 text-sm leading-relaxed">
            Only send Bitcoin (BTC) assets to this address. Other assets will be
            lost forever.
          </p>
        </div>

        {/* Bitcoin Info */}
        <div className="flex items-center justify-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">₿</span>
          </div>
          <div>
            <span className="text-white font-medium text-lg">BTC</span>
            <span className="text-gray-400 ml-2">Bitcoin</span>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center">
          <QRCodePlaceholder address={walletAddress} />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-8 py-4">
          <ActionButton
            icon={<Copy className="w-6 h-6 text-gray-300" />}
            label="Copy"
            onClick={handleCopyAddress}
          />
          <ActionButton
            icon={<Download className="w-6 h-6 text-gray-300" />}
            label="Set Amount"
            onClick={handleSetAmount}
          />
          <ActionButton
            icon={<Share2 className="w-6 h-6 text-gray-300" />}
            label="Share"
            onClick={handleShareAddress}
          />
        </div>

        {/* Copy Success Message */}
        {showCopiedMessage && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg z-50">
            Address copied to clipboard!
          </div>
        )}

        {/* Deposit from Exchange */}
        <div className="bg-gray-500/20 rounded-xl p-4 my-8">
          <button
            onClick={handleDepositFromExchange}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <ArrowDown className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-white font-medium">
                  Deposit from exchange
                </h3>
                <p className="text-gray-400 text-sm">
                  By direct transfer from your account
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
