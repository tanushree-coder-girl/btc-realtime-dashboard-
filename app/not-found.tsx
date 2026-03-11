"use client"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page Not Found</p>
      <a
        href="/"
        className="cursor-pointer p-2 rounded-lg border border-[rgb(var(--border))] hover:scale-105 transition"
      >
        Go Back Home
      </a>
    </div>
  )
}