"use client"

import { useBTCWebSocket } from "@/hooks/useBTCWebSocket"
import BTCHeaderStats from "./BTCHeaderStats"
import TradingViewChart from "./TradingViewChart"
import ConnectionStatus from "./ConnectionStatus"
import BTCSparkline from "./BTCSparkline"

export default function Dashboard() {
  const { data, status } = useBTCWebSocket()

  return (
    <div>
      <BTCHeaderStats data={data} />
      <TradingViewChart />

      <div className="p-4 space-y-4 border border-[rgb(var(--border))] rounded-lg mt-6">
        <ConnectionStatus status={status} />
        <BTCSparkline price={data?.lastPrice} />
      </div>
    </div>
  )
}