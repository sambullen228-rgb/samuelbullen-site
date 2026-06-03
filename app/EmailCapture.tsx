"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const formData = new FormData();
    formData.append("form-name", "email-capture");
    formData.append("email", email);

    await fetch("/", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="border-t border-b border-white/[0.04] py-12 md:py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          {!submitted ? (
            <>
              <p className="section-label mb-4">Not Ready to Book?</p>
              <h2 className="mb-4 text-[24px] font-normal leading-[1.3] tracking-[-0.01em] md:text-[32px]">
                Get the &quot;3 Days to Better Hair&quot; guide.
              </h2>
              <p className="mb-8 text-[14px] leading-[1.7] text-[#9A9690]">
                Plus first access to last-minute openings and new client availability.
                No spam. Unsubscribe anytime.
              </p>
              <form
                name="email-capture"
                method="POST"
                data-netlify="true"
                action="/"
                onSubmit={handleSubmit}
                className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input type="hidden" name="form-name" value="email-capture" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border border-white/[0.08] bg-[#1A1918] px-4 py-3 text-[13px] text-[#E8E6E1] placeholder-[#5A5955] outline-none transition focus:border-[#5A5955]"
                />
                <button type="submit" className="btn-primary shrink-0">
                  Join the List
                </button>
              </form>
              <p className="mt-4 text-[11px] text-[#5A5955]">
                We respect your privacy. No spam, ever.
              </p>
            </>
          ) : (
            <div className="py-4">
              <p className="mb-2 text-[24px] font-normal text-[#E8E6E1]">
                You&apos;re on the list.
              </p>
              <p className="text-[14px] text-[#9A9690]">
                Check your inbox for the guide. Talk soon.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
