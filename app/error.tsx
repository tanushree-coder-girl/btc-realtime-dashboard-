"use client"

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-lg mb-6">{error.message}</p>
            <button onClick={reset}
                className="cursor-pointer p-2 rounded-lg border border-[rgb(var(--border))] hover:scale-105 transition">
                Try Again
            </button>
        </div>
    )
}