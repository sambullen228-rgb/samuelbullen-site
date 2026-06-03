"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finally, someone who gets my thick hair. Every other stylist thins it too much or leaves it bulky. Sam found the exact balance.",
    name: "Sarah M.",
    detail: "SoHo · Thick, wavy hair",
    rating: 5,
  },
  {
    quote: "I used to dread styling my hair. Now I know exactly what to do — and it takes 5 minutes. The education part of the cut changed everything.",
    name: "Alex T.",
    detail: "Lower East Side · Curly, unruly hair",
    rating: 5,
  },
  {
    quote: "Best haircut I've ever had. It actually grows out well. I don't need to go back every 4 weeks to 'fix' it.",
    name: "Jordan K.",
    detail: "Brooklyn · Fine, flat hair",
    rating: 5,
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-[#E8E6E1]"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12 border-t border-white/[0.04] pt-8">
          <p className="section-label mb-4">Client Proof</p>
          <h2 className="max-w-xl text-[28px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[40px]">
            Hair that works — confirmed by people who live with it.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/[0.04] bg-[#1A1918]/40 p-6 md:p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} filled={j < t.rating} />
                ))}
              </div>
              <p className="mb-6 text-[15px] leading-[1.7] text-[#E8E6E1]">
                &quot;{t.quote}&quot;
              </p>
              <div>
                <p className="text-[12px] font-medium uppercase tracking-wider text-[#E8E6E1]">
                  {t.name}
                </p>
                <p className="text-[11px] text-[#5A5955]">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
