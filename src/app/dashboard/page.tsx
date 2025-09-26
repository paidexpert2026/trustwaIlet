"use client";
import React from "react";
import WalletHeader from "./components/WalletHeader";
import BalanceDisplay from "./components/BalanceDisplay";
import ActionButtons from "./components/ActionButtons";
import AlphaTokensSection from "./components/AlphaTokensSection";
import TabNavigation from "./components/TabNavigation";
import CryptoList from "./components/CryptoList";
import BottomNavigation from "./components/BottomNavigation";

const WalletApp: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-black/80 min-h-screen relative pb-[70px]">
      <WalletHeader />
      <BalanceDisplay />
      <ActionButtons />
      <AlphaTokensSection />
      <TabNavigation />
      <CryptoList />
      <BottomNavigation />
    </div>
  );
};

export default WalletApp;
