"use client"

import { useEffect, useRef } from "react";
import BTCStatCard from "./BTCStatCard";
import { formatPrice } from "@/utils/utils";
import { BTCTicker } from "@/types/btc";

interface Props {
  data: BTCTicker
}

export default function BTCHeaderStats({ data }: Props) {
  const prevPrice = useRef<number | null>(null)

  useEffect(() => {
    if (!data?.lastPrice) return

    const current = Number(data.lastPrice)

    prevPrice.current = current
  }, [data?.lastPrice])

  const percent = data?.price24hPcnt
    ? (Number(data.price24hPcnt) * 100).toFixed(2)
    : "0"

  return (
    <div className="w-full border border-[rgb(var(--border))] rounded-lg mb-6">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {/* BTC PRICE IN USD */}
        <div className="p-4 border-r border-[rgb(var(--border))]">
          <p className="text-xs opacity-70">BTC Price (USD)</p>

          <p className={`text-2xl font-bold`}>
            ${formatPrice(data?.lastPrice)}
          </p>

          <p className={`text-sm ${Number(percent) >= 0 ? "text-green-500" : "text-red-500"}`}>
            {percent}% (24h)
          </p>
        </div>

        {/* Stats Cards */}
        <BTCStatCard label="Mark Price" value={formatPrice(data?.markPrice)} />
        <BTCStatCard label="24H High" value={formatPrice(data?.highPrice24h)} />
        <BTCStatCard label="24H Low" value={formatPrice(data?.lowPrice24h)} />
        <BTCStatCard label="24H Volume" value={formatPrice(data?.volume24h)} />
        <BTCStatCard label="24H Turnover" value={formatPrice(data?.turnover24h)} border={false} />
      </div>
    </div>
  )
}