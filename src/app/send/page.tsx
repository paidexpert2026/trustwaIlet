'use client'

import React, { useState } from 'react'
import { ArrowLeft, X, Copy } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { balance } from '../dashboard/components/BalanceDisplay'

const SendPage = () => {
  const router = useRouter()
  const [address, setAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [showError, setShowError] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState('Bitcoin')
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false)

  const networks = [
    { name: 'Bitcoin', symbol: 'BTC', color: 'bg-orange-500', icon: '₿', usdPrice: 42000 },
    { name: 'Ethereum', symbol: 'ETH', color: 'bg-blue-500', icon: 'Ξ', usdPrice: 2200 },
    { name: 'Binance Smart Chain', symbol: 'BSC', color: 'bg-yellow-500', icon: 'B', usdPrice: 310 },
    { name: 'Polygon', symbol: 'MATIC', color: 'bg-purple-500', icon: 'P', usdPrice: 0.85 },
    { name: 'Solana', symbol: 'SOL', color: 'bg-gradient-to-r from-purple-500 to-blue-500', icon: 'S', usdPrice: 95 },
  ]

  const currentNetwork = networks.find(n => n.name === selectedNetwork) || networks[0]

  // Calculate USD equivalent
  const calculateUsdValue = () => {
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) return '0.00'
    const usdValue = numAmount * currentNetwork.usdPrice
    return usdValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setAddress(text)
    } catch (err) {
      console.error('Failed to read clipboard:', err)
    }
  }

  const handleMaxAmount = () => {
    setAmount('0.00')
  }

  const handleNext = () => {
    setShowError(true)
    setTimeout(() => setShowError(false), 10000)
  }

  return (
    <div className="max-w-sm mx-auto bg-black/80 min-h-screen relative pb-[70px]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <button 
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-lg font-semibold text-white">Send {currentNetwork.symbol}</h1>
        <button 
          onClick={() => router.back()}
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-6">
        {/* Address Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">
            Address or Domain Name
          </label>
          <div className="relative">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Search or Enter"
              className="w-full px-4 py-4 bg-transparent border-2 border-indigo-500 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-400 transition-colors"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button
                onClick={handlePaste}
                className="px-3 py-1 text-indigo-500 font-semibold hover:text-indigo-400 transition-colors"
              >
                Paste
              </button>
              <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
                <Copy className="w-5 h-5 text-indigo-500" />
              </button>
              {/* <button className="p-1.5 hover:bg-gray-800 rounded transition-colors">
                <QrCode className="w-5 h-5 text-indigo-500" />
              </button> */}
            </div>
          </div>
        </div>

        {/* Destination Network */}
        <div className="space-y-2 relative">
          <label className="text-sm font-medium text-gray-400">
            Destination network
          </label>
          <button 
            onClick={() => setShowNetworkDropdown(!showNetworkDropdown)}
            className="w-full flex items-center gap-2 px-4 py-3 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <div className={`w-8 h-8 ${currentNetwork.color} rounded-full flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">{currentNetwork.icon}</span>
            </div>
            <span className="text-white font-medium">{currentNetwork.name}</span>
            <svg className={`w-4 h-4 text-gray-400 ml-auto transition-transform ${showNetworkDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {showNetworkDropdown && (
            <div className="absolute z-10 w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-xl">
              {networks.map((network) => (
                <button
                  key={network.name}
                  onClick={() => {
                    setSelectedNetwork(network.name)
                    setShowNetworkDropdown(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-700 transition-colors ${
                    selectedNetwork === network.name ? 'bg-gray-700/50' : ''
                  }`}
                >
                  <div className={`w-8 h-8 ${network.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{network.icon}</span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-white font-medium">{network.name}</span>
                    <span className="text-gray-400 text-xs">{network.symbol}</span>
                  </div>
                  {selectedNetwork === network.name && (
                    <svg className="w-5 h-5 text-indigo-500 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">
            Amount
          </label>
          <div className="relative">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={`${currentNetwork.symbol} Amount`}
              className="w-full px-4 py-4 bg-transparent border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span className="text-gray-400 font-medium">{currentNetwork.symbol}</span>
              <button
                onClick={handleMaxAmount}
                className="px-3 py-1 text-indigo-500 font-semibold hover:text-indigo-400 transition-colors"
              >
                Max
              </button>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            ≈ ${calculateUsdValue()}
          </div>
        </div>

        {/* Error Message */}
        {showError && (
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-10">
            <p className="text-red-400 text-sm font-medium">
              You have to deposit 12% of the available balance (${(balance * 0.12).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
            </p>
          </div>
        )}
      </div>

      {/* Next Button */}
      <div className="left-0 right-0 px-5 max-w-sm mx-auto">
        <button
          onClick={handleNext}
          disabled={!address.trim() || !amount.trim()}
          className={`w-full py-4 font-semibold rounded-full transition-colors shadow-lg ${
            !address.trim() || !amount.trim()
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-indigo-500 hover:bg-indigo-600 text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default SendPage