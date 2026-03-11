"use client"

import { BTCTicker } from "@/types/btc"
import { useEffect, useState, useRef } from "react"

export function useBTCWebSocket() {
  const [data, setData] = useState<BTCTicker>({})
  const [status, setStatus] = useState<"connected" | "disconnected">("disconnected")
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectRef = useRef<NodeJS.Timeout | null>(null)

  const connect = () => {
    if (reconnectRef.current) return

    const ws = new WebSocket("wss://stream.bybit.com/v5/public/linear")
    wsRef.current = ws

    ws.onopen = () => {
      setStatus("connected")
      if (reconnectRef.current) {
        clearTimeout(reconnectRef.current)
        reconnectRef.current = null
      }
      ws.send(JSON.stringify({ op: "subscribe", args: ["tickers.BTCUSDT"] }))
    }

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data)

        if (msg.topic === "tickers.BTCUSDT") {
          if (msg.type === "snapshot") setData(msg.data)

          if (msg.type === "delta") {
            setData(prev => ({
              ...prev,
              ...msg.data
            }))
          }
        }
      } catch (error) {
        console.error("WebSocket parse error", error)
      }
    }

    ws.onclose = () => {
      setStatus("disconnected")
      reconnectRef.current = setTimeout(() => {
        reconnectRef.current = null
        connect()
      }, 1000)
    }

    ws.onerror = () => ws.close()
  }

  useEffect(() => {
    connect()

    return () => {
      if (wsRef.current) wsRef.current.close()
      if (reconnectRef.current) clearTimeout(reconnectRef.current)
    }
  }, [])

  return { data, status }
}