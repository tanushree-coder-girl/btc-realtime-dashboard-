import { BTCStatItemProps } from "@/types/btc"

export default function BTCStatCard({ label, value, border = true }: BTCStatItemProps) {
  return (
    <div className={`p-4 ${border ? "border-r border-[rgb(var(--border))]" : ""}`}>
      <p className="text-xs opacity-70">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  )
}