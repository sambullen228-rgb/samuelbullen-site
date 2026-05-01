"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => setVisible(window.scrollY > 300);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: "52px" }}
    >
      <a
        href="#pricing"
        className="flex h-full w-full items-center justify-center text-sm tracking-wide text-black"
      >
        Book Now
        <span className="block text-[10px] font-normal uppercase tracking-[0.16em] opacity-70">
          Tap to book
        </span>
      </a>
    </div>
  );
}