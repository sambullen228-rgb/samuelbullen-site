"use client";

import { motion } from "framer-motion";

interface WhatToExpectProps {
  bookingUrl: string;
}

const steps = [
  {
    num: "01",
    title: "Consultation",
    duration: "5 min",
    desc: "We look at your hair dry, talk about your daily routine, and set clear expectations. No surprises.",
  },
  {
    num: "02",
    title: "The Cut",
    duration: "30–45 min",
    desc: "Razor or scissor work based on what your hair actually needs — not what's trending. Built around your texture and growth patterns.",
  },
  {
    num: "03",
    title: "The Walkthrough",
    duration: "10 min",
    desc: "You leave knowing how to dry it, move it, and keep it working. No guessing every morning.",
  },
];

export default function WhatToExpect({ bookingUrl }: WhatToExpectProps) {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12 border-t border-white/[0.04] pt-8 md:mb-16">
          <p className="section-label mb-4">The Experience</p>
          <h2 className="max-w-2xl text-[28px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[44px]">
            What happens when you book.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-[#9A9690]">
            No mystery. No sitting in silence wondering what they&apos;re doing.
            Every step is explained — because you should understand your own hair.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative border-t border-white/[0.08] pt-6"
            >
              <div className="mb-4 flex items-baseline justify-between">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#5A5955]">
                  Step {step.num}
                </span>
                <span className="text-[11px] text-[#5A5955]">{step.duration}</span>
              </div>
              <h3 className="mb-3 text-[20px] font-normal text-[#E8E6E1]">
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#9A9690]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4 md:mt-16">
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="btn-primary">
            Book Your Session
          </a>
          <a href="#pricing" className="btn-secondary">
            View All Services
          </a>
        </div>
      </motion.div>
    </section>
  );
}
