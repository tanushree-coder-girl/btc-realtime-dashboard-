"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function TradingViewChart() {
  const ref = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true

    script.onload = () => {
      new (window as any).TradingView.widget({
        symbol: "BYBIT:BTCUSDT",
        interval: "1",
        container_id: ref.current!.id,
        theme: theme === "dark" ? "dark" : "light",
        width: "100%",
        height: 500,
        style: "3",
      })
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [theme])

  return <div id="tradingview_chart" ref={ref}></div>
}