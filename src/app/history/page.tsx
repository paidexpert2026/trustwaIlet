"use client"
import React, { useState } from "react";
import {
  ArrowLeft,
  Star,
} from "lucide-react";
import TransactionItem from "./components/TransactionItem";
import { useRouter } from "next/navigation";

type TransactionType = {
  id: string;
  type: "send" | "receive";
  amount: number;
  usdValue: number;
  address?: string;
  status: "confirmed" | "pending";
  date: string;
};

const transactions: TransactionType[] = [
  {
    id: "12",
    type: "send",
    amount: -0.001854,
    usdValue: 200.20,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Today", //12-11-25
  },
  {
    id: "11",
    type: "receive",
    amount: 0.001855,
    usdValue: 200.98,
    status: "confirmed",
    date: "Today",
  },
  {
    id: "12",
    type: "send",
    amount: -0.001854,
    usdValue: 200.30,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Today", //12-11-25
  },
  {
    id: "11",
    type: "receive",
    amount: 0.001945,
    usdValue: 200.37,
    status: "confirmed",
    date: "Today",
  },
  {
    id: "12",
    type: "send",
    amount: -0.001854,
    usdValue: 9070.20,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Nov 11, 2025", //05-11-25
  },
  {
    id: "11",
    type: "receive",
    amount: 0.001855,
    usdValue: 9000.87,
    status: "confirmed",
    date: "Nov 11, 2025",
  },
  {
    id: "12",
    type: "send",
    amount: -0.001854,
    usdValue: 213.25,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Nov 11, 2025", //05-11-25
  },
  {
    id: "11",
    type: "receive",
    amount: 0.001855,
    usdValue: 212.87,
    status: "confirmed",
    date: "Nov 11, 2025",
  },
  {
    id: "9",
    type: "send",
    amount: -0.001854,
    usdValue: 209.9,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Oct 28, 2025", //28-10-25
  },
  {
    id: "10",
    type: "receive",
    amount: 0.001855,
    usdValue: 209.58,
    status: "confirmed",
    date: "Oct 28, 2025",
  },
  {
    id: "5",
    type: "send",
    amount: -0.001854,
    usdValue: 209.9,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Oct 21, 2025",
  },
  {
    id: "6",
    type: "receive",
    amount: 0.001855,
    usdValue: 209.58,
    status: "confirmed",
    date: "Oct 21, 2025",
  },
  {
    id: "3",
    type: "send",
    amount: -0.001854,
    usdValue: 212.3,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Oct 16, 2025",
  },
  {
    id: "4",
    type: "receive",
    amount: 0.001855,
    usdValue: 212.43,
    status: "confirmed",
    date: "Oct 16, 2025",
  },
  {
    id: "1",
    type: "send",
    amount: -0.001824,
    usdValue: 200.3,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Oct 9, 2025",
  },
  {
    id: "2",
    type: "receive",
    amount: 0.001825,
    usdValue: 200.43,
    status: "confirmed",
    date: "Oct 9, 2025",
  },
  {
    id: "3",
    type: "send",
    amount: -0.001854,
    usdValue: 212.3,
    address: "bc1qcvgss...5yf0e9",
    status: "confirmed",
    date: "Oct 2, 2025",
  },
  {
    id: "4",
    type: "receive",
    amount: 0.001855,
    usdValue: 212.43,
    status: "confirmed",
    date: "Oct 2, 2025",
  }
];

const BitcoinHistoryPage = () => {
    const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "holdings" | "history" | "about"
  >("history");

  const groupedTransactions = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.date]) {
      acc[transaction.date] = [];
    }
    acc[transaction.date].push(transaction);
    return acc;
  }, {} as Record<string, TransactionType[]>);

  return (
    <div className="max-w-sm mx-auto bg-black/80 min-h-screen text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800/10">
        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
          <ArrowLeft
            className="w-6 h-6 opacity-85"
            onClick={() => router.back()}
          />
        </button>

        <div className="flex flex-col items-center">
          <h1 className="text-base font-semibold opacity-85">BTC</h1>
          <p className="text-xs text-gray-400">COIN | Bitcoin</p>
        </div>

        <button className="p-2 hover:bg-gray-800 rounded-full transition-colors">
          <Star className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 items-center border-b border-gray-800 text-sm">
        <button
          onClick={() => setActiveTab("holdings")}
          className={`py-4 text-center transition-colors ${
            activeTab === "holdings"
              ? "text-white border-b-[3px] border-green-500"
              : "text-gray-400"
          }`}
        >
          Holdings
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`py-4 text-center transition-colors ${
            activeTab === "history"
              ? "text-white border-b-[3px] border-green-500"
              : "text-gray-400"
          }`}
        >
          History
        </button>
        <button
          onClick={() => setActiveTab("about")}
          className={`py-4 text-center transition-colors ${
            activeTab === "about"
              ? "text-white border-b-[3px] border-green-500"
              : "text-gray-400"
          }`}
        >
          About
        </button>
      </div>

      {/* Content */}
      <div className="pb-24">
        <h2 className="text-sm text-gray-400 font-medium px-6 py-4">Recent Transactions</h2>

        {Object.entries(groupedTransactions).map(([date, txs]) => (
          <div key={date}>
            <h3 className="text-sm font-medium px-6 pb-3">{date}</h3>
            {txs.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        ))}

        <div className="text-center py-8">
          <p className="text-gray-400">
            Cannot find your transaction?{" "}
            <button className="text-green-500 font-medium hover:underline">
              Check explorer
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BitcoinHistoryPage;
