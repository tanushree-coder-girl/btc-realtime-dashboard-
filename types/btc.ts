export interface BTCTicker {
  lastPrice?: string
  markPrice?: string
  highPrice24h?: string
  lowPrice24h?: string
  volume24h?: string
  turnover24h?: string
  price24hPcnt?: string
}

export interface BTCStatItemProps {
  label: string
  value: number | string
  border?: boolean
}