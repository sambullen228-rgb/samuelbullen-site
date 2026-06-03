"use client";

import { useEffect, useState } from "react";

interface UrgencyBannerProps {
  onDismiss: () => void;
}

export default function UrgencyBanner({ onDismiss }: UrgencyBannerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex min-h-10 items-center justify-center bg-[#1A1918] px-10 py-3">
      <p className="text-center text-[11px] uppercase tracking-[0.12em] text-[#9A9690]">
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
        This week: Limited openings for new clients.{" "}
        <a
          href="https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/HHBKQ7WSRX4G2IQCL2PPL6JU"
          target="_blank"
          rel="noreferrer"
          className="ml-1 text-[#E8E6E1] underline underline-offset-4 decoration-white/[0.08] transition duration-[400ms] hover:text-white"
        >
          Book now →
        </a>
      </p>
      <button
        onClick={onDismiss}
        className="absolute right-4 text-[#5A5955] transition-colors duration-[400ms] hover:text-white"
        aria-label="Dismiss"
      >
        ✕
      </button>
    </div>
  );
}
