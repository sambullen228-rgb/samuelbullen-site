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
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-white/[0.04] bg-[#111110]/96 backdrop-blur transition-transform duration-[400ms] ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ height: "64px" }}
    >
      <div className="flex h-full items-center justify-center px-6">
        <a href="#pricing" className="btn-dark w-full text-center">
          Book Now
        </a>
      </div>
    </div>
  );
}
