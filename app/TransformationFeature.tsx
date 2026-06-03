"use client";

import { motion } from "framer-motion";

interface TransformationFeatureProps {
  bookingUrl: string;
}

export default function TransformationFeature({ bookingUrl }: TransformationFeatureProps) {
  return (
    <section id="transformations" className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-10 flex flex-col justify-between gap-6 border-t border-white/[0.04] pt-8 md:flex-row md:items-end">
          <div>
            <p className="section-label mb-3">Featured Transformation</p>
            <h2 className="max-w-2xl text-[28px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[44px]">
              From heavy and shapeless to structured movement.
            </h2>
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary shrink-0"
          >
            Book This Look
          </a>
        </div>

        <div className="relative overflow-hidden bg-[#1A1918]">
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:h-full">
              <img
                src="/images/hair/hair-8.jpg"
                alt="Before and after haircut transformation — from long heavy hair to textured shag"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 35%" }}
              />
              <div className="absolute left-4 top-4 rounded-sm bg-[#111110]/80 px-2 py-1 text-[10px] uppercase tracking-wider text-[#9A9690] backdrop-blur">
                Before / After
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <p className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#5A5955]">
                Real Client Result
              </p>
              <blockquote className="mb-8 font-serif text-[22px] font-normal leading-[1.4] tracking-[-0.01em] text-[#E8E6E1] md:text-[28px]">
                &quot;I walked in with hair that grew out heavy and shapeless. 45 minutes later, I had movement I could actually style myself.&quot;
              </blockquote>
              <div className="mb-8 space-y-4 text-[14px] leading-[1.8] text-[#9A9690]">
                <p>
                  This cut combines razor and scissor work to remove bulk where it weighs the shape down, while keeping length and texture where it creates movement.
                </p>
                <p>
                  The result: hair that air-dries with intention, not chaos. Styled in 5 minutes, not 25.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Book Haircut
                </a>
                <a
                  href="#work"
                  className="btn-secondary"
                >
                  More Results
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
