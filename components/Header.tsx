import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <h1 className="text-xl font-semibold">
        BTC Realtime
      </h1>

      <ThemeToggle />
    </header>
  )
}

export default Header