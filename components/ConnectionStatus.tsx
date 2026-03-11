"use client"

interface Props {
  status: "connected" | "disconnected"
}

/**
 * Displays WebSocket connection status.
 * Shows a colored indicator and text label.
 */
export default function ConnectionStatus({ status }: Props) {
  const isConnected = status === "connected"

  return (
    <div
      className="flex items-center gap-2 text-sm font-medium"
      aria-live="polite"
    >
      <span
        className={`h-2 w-2 rounded-full ${
          isConnected ? "bg-green-500" : "bg-red-500"
        }`}
      />
      {isConnected ? "Connected" : "Disconnected"}
    </div>
  )
}