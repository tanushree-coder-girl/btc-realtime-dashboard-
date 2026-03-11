export function formatPrice(value?: string) {
  if (!value) return "-"
  return Number(value).toFixed(2)
}