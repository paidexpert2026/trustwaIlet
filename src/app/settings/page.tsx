"use client"
import React, { useState } from "react";
import {
  ChevronLeft,
  BookOpen,
  QrCode,
  AtSign,
  Scan,
  Link,
  Settings,
  Lock,
  Bell,
  HelpCircle,
  Headphones,
} from "lucide-react";
import SettingsItem from "./components/SettingsItem";
import SettingsSection from "./components/SettingsSection";
import { useRouter } from "next/navigation";

export default function SettingsPage(): JSX.Element {
    const [showCopiedMessage, setShowCopiedMessage] = useState<boolean>(false);
    const router = useRouter();
    
    const handleDisabledClick = async (): Promise<void> => {
        try {
            // await navigator.clipboard.writeText(walletAddress);
            setShowCopiedMessage(true);
            setTimeout(() => setShowCopiedMessage(false), 2000);
        } catch (err) {
            console.error("Failed to copy address:", err);
        }
    };

//   const handleSettingsItemClick = (itemName: string): void => {
//     console.log(`${itemName} clicked`);
//     // Handle navigation or action for each settings item
//   };

  return (
    <div className="max-w-sm mx-auto min-h-screen bg-black/80 text-white">
      {/* Header */}
      <div className="flex items-center p-4 pb-6">
        <button
          className="mr-4 p-1"
          onClick={() => router.back()}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-medium">Settings</h1>
      </div>

      {/* Settings Items */}
      <div className="px-0">
        {/* Main Settings Section */}
        <SettingsSection showDivider>
          <SettingsItem
            icon={<BookOpen className="w-6 h-6" />}
            title="Address Book"
            onClick={handleDisabledClick}
          />
          <SettingsItem
            icon={<QrCode className="w-6 h-6" />}
            title="Sync to Extension"
            onClick={handleDisabledClick}
          />
          <SettingsItem
            icon={<AtSign className="w-6 h-6" />}
            title="Trust handles"
            onClick={handleDisabledClick}
          />
          <SettingsItem
            icon={<Scan className="w-6 h-6" />}
            title="Scan QR code"
            onClick={handleDisabledClick}
          />
          <SettingsItem
            icon={<Link className="w-6 h-6" />}
            title="DApp connection"
            onClick={handleDisabledClick}
          />
        </SettingsSection>

        {/* App Settings Section */}
        <SettingsSection showDivider>
          <SettingsItem
            icon={<Settings className="w-6 h-6" />}
            title="Preferences"
            onClick={handleDisabledClick}
          />
          <SettingsItem
            icon={<Lock className="w-6 h-6" />}
            title="Security"
            onClick={handleDisabledClick}
          />
          <SettingsItem
            icon={<Bell className="w-6 h-6" />}
            title="Notifications"
            onClick={handleDisabledClick}
          />
        </SettingsSection>

        {/* Support Section */}
        <SettingsSection>
          <SettingsItem
            icon={<HelpCircle className="w-6 h-6" />}
            title="Help Center"
            onClick={handleDisabledClick}
          />
          <SettingsItem
            icon={<Headphones className="w-6 h-6" />}
            title="Support"
            onClick={handleDisabledClick}
          />
        </SettingsSection>
      </div>

      {showCopiedMessage && (
        <div className="fixed top-20 max-w-[320px] left-1/2 transform -translate-x-1/2 bg-red-600/90 text-white px-4 py-2 rounded-lg z-50">
          Can&apos;t access this feature now, deposit to this account for a
          month before you can withdraw
        </div>
      )}
    </div>
  );
}
