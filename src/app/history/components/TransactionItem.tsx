import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import React from 'react'

type TransactionType = {
  id: string;
  type: "send" | "receive";
  amount: number;
  usdValue: number;
  address?: string;
  status: "confirmed" | "pending";
  date: string;
};

const TransactionItem = ({ transaction }: { transaction: TransactionType }) => {
  const isSend = transaction.type === "send";

  return (
    <div className="flex items-center justify-between py-4 px-6 hover:bg-gray-800/40 transition-colors">
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            isSend ? "bg-gray-800/40" : "bg-gray-800/40"
          }`}
        >
          {isSend ? (
            <ArrowUpRight className="w-5 h-5 text-gray-400" />
          ) : (
            <ArrowDown className="w-5 h-5 text-gray-400" />
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-white/80 text-sm font-medium">Transfer</span>
            <div className="bg-green-600/20 py-1.5 px-3 rounded-full">
              <CheckCircle2
                className="w-4 h-4 text-green-600/20"
                fill="#22c55e"
                color="#000000CC"
              />
            </div>
          </div>
          <span className="text-xs text-gray-400 ">
            {transaction.address ? `To: ${transaction.address}` : "From:"}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span
          className={`font-semibold ${
            isSend ? "text-white/80" : "text-green-500"
          }`}
        >
          {isSend ? "" : "+"}
          {transaction.amount.toFixed(6)} BTC
        </span>
        <span className="text-sm text-gray-400">
          ≈ ${transaction.usdValue.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default TransactionItem