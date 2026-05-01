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
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-[#D4CFC8] bg-[#F7F4EF] transition-transform duration-[350ms] ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: "60px" }}
    >
      <a
        href="#pricing"
        className="flex h-full w-full flex-col items-center justify-center text-[14px] font-light tracking-[0.06em] text-[#B5785A] transition duration-[350ms]"
      >
        Book Now
        <span className="mt-0.5 block text-[9px] font-light uppercase tracking-[0.2em] text-[#8C8880]">
          Tap to book
        </span>
      </a>
    </div>
  );
}
