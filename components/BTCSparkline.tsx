"use client"

import { useEffect, useRef, useState } from "react"
import { Sparklines, SparklinesLine } from "react-sparklines"

interface Props {
  price?: string
}

/**
 * Sparkline chart showing last 60 seconds BTC price history.
 * Updates every second using the latest websocket price.
 */
export default function BTCSparkline({ price }: Props) {
  const [history, setHistory] = useState<number[]>([])
  const latestPrice = useRef<number | null>(null)

  // update latest price whenever websocket price changes
  useEffect(() => {
    if (!price) return
    latestPrice.current = parseFloat(price)
  }, [price])

  // push latest price every 1 second (maintain 60 values max)
  useEffect(() => {
    const interval = setInterval(() => {
      if (latestPrice.current == null) return

      setHistory((prev) => {
        const next = prev.length >= 60 ? prev.slice(1) : [...prev]
        next.push(latestPrice.current)
        return next
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!history.length) return null

  // dynamic color based on price movement
  const color =
    history.length > 1 && history[history.length - 1] >= history[0]
      ? "#22c55e" 
      : "#ef4444"

  return (
    <div className="w-full h-16">
      <Sparklines
        data={history}
        width={100}
        height={50}
        margin={5}
        style={{ width: "100%", height: "100%" }}
      >
        <SparklinesLine color={color} style={{ fill: "none" }} />
      </Sparklines>
    </div>
  )
}