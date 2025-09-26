"use client"
import { QrCode, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReceiveFromWallet() {
    const router = useRouter()
  return (
    <div className="max-w-sm mx-auto min-h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center mb-8 cursor-pointer" onClick={() => router.back()}>
        <button className="mr-4">
          <ChevronRight className="w-6 h-6 rotate-180" />
        </button>
        <h1 className="text-xl font-medium">Fund your wallet</h1>
      </div>

      {/* Receive from another wallet section */}
      <div className="space-y-6">
        <h2 className="text-lg font-medium text-gray-300">All options</h2>

        <div className="bg-gray-900 rounded-xl p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => router.push("/recieve")}
          >
            <div className="flex items-center space-x-2">
              {/* Icon */}
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-base font-medium text-white">
                  Receive from another wallet
                </h3>
                <p className="text-gray-400 text-xs">
                  QR Code and wallet addresses
                </p>
              </div>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
