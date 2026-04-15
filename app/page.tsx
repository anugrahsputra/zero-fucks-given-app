"use client";

import { useState } from "react";

const API_URL = "/api/sorry";

interface SorryResponse {
  reason: string;
}

export default function Home() {
  const [sorry, setSorry] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const fetchSorry = async () => {
    setLoading(true);
    setError(null);
    setCopied(false);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: SorryResponse = await res.json();
      setSorry(data.reason);
    } catch {
      setError("Failed to fetch your apology. The universe doesn't care enough.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (!sorry) return;
    try {
      await navigator.clipboard.writeText(sorry);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-950 font-sans text-zinc-100">
      <main className="flex flex-col flex-1 w-full max-w-2xl items-center justify-center px-6 py-16 text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-2">
            🖕
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Zero Fucks Given
          </h2>
          <p className="text-zinc-500 mt-2 text-sm">
            as a Service
          </p>
        </div>

        <div className="w-full mb-8 min-h-[120px] flex items-center justify-center">
          {loading ? (
            <p className="text-zinc-500 animate-pulse">Generating your apology...</p>
          ) : error ? (
            <p className="text-red-400">{error}</p>
          ) : sorry ? (
            <blockquote className="text-2xl sm:text-4xl leading-relaxed text-white font-semibold">
              {sorry}
            </blockquote>
          ) : (
            <p className="text-zinc-500">
              Press the button to receive your professionally indifferent apology.
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            onClick={fetchSorry}
            disabled={loading}
            className="h-12 px-6 rounded-full bg-zinc-100 text-zinc-950 font-medium transition-colors hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : sorry ? "Get Another One" : "I Don't Care"}
          </button>

          {sorry && !loading && (
            <button
              onClick={copyToClipboard}
              className="h-12 px-6 rounded-full border border-solid border-zinc-700 transition-colors hover:bg-zinc-800"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>

        <footer className="mt-16 text-xs text-zinc-600">
          <p>
            Created by{" "}
            <a
              href="https://downormal.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-zinc-400"
            >
              Anugrah Surya Putra - downormal.dev
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
