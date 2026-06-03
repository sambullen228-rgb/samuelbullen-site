"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import StickyMobileCTA from "./StickyMobileCTA";
import UrgencyBanner from "./UrgencyBanner";
import TransformationFeature from "./TransformationFeature";

const HAIRCUT_URL = "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/HHBKQ7WSRX4G2IQCL2PPL6JU";
const DRYCUT_URL = "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/QBR6MSH6NWI4S5AD2YIHRIMO";
const BANGS_URL = "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/7JCPS5HMU34AUJER24ZAMH74";
const EDU_URL = "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/SDVG3UBSSKP6EYEIJDFNOSVP";

const services = [
  {
    name: "Haircut",
    price: "$200",
    time: "45 min",
    badge: "Most Popular",
    description:
      "Full wash, haircut, and style. Scissor or razor work built around your natural growth, texture, and daily routine.",
    href: HAIRCUT_URL,
  },
  {
    name: "Dry Cut",
    price: "$150",
    time: "30 min",
    badge: null,
    description:
      "No wash or styling. You come in with clean, dry hair. Best for refining shape, removing weight, and adjusting how the cut moves.",
    href: DRYCUT_URL,
  },
  {
    name: "Bangs & Bits",
    price: "$75",
    time: "15 min",
    badge: null,
    description:
      "Bang trim, face-framing layers, or any single targeted area. In and out — no full appointment needed.",
    href: BANGS_URL,
  },
  {
    name: "Hair Education: Fix Your Routine",
    price: "$125",
    time: "30 min",
    badge: null,
    description:
      "A focused session to understand your hair, products, tools, drying, and daily routine. Figure out what your hair needs and what to stop doing.",
    href: EDU_URL,
  },
];

const workImages = [
  { src: "/images/hair/hair-2.jpg", alt: "thick textured haircut with controlled shape", caption: "Texture control" },
  { src: "/images/hair/hair-6.jpg", alt: "defined curly haircut with volume and structure", caption: "Defined curls" },
  { src: "/images/hair/hair-1.jpg", alt: "soft blonde bob with natural movement", caption: "Soft movement" },
  { src: "/images/hair/hair-3.jpg", alt: "creative textured curly haircut with personality", caption: "Creative texture" },
  { src: "/images/hair/hair-4.jpg", alt: "lived-in blonde haircut in SoHo NYC", caption: "Real-world wear" },
  { src: "/images/hair/hair-5.jpg", alt: "soft curly haircut with natural movement", caption: "Clean shape" },
  { src: "/images/hair/hair-7.jpg", alt: "sharp bob haircut with precise structure", caption: "Precision cut" },
];

const portraitImages = [
  { src: "/images/portraits/portrait-1.jpg", alt: "editorial portrait with red curly hair", caption: "Editorial portrait" },
  { src: "/images/portraits/portrait-2.jpg", alt: "cinematic low light portrait seated pose", caption: "Cinematic mood" },
  { src: "/images/portraits/portrait-3.jpg", alt: "black and white short hair portrait", caption: "Black and white portrait" },
  { src: "/images/portraits/portrait-4.jpg", alt: "editorial portrait in leopard coat", caption: "Personality portrait" },
  { src: "/images/portraits/portrait-5.jpg", alt: "portrait on SoHo balcony with city background", caption: "SoHo balcony" },
  { src: "/images/portraits/portrait-6.jpg", alt: "wet blonde textured close-up portrait", caption: "Texture study" },
];

const marqueeContent = "RAZOR CUTTING · HARD-TO-MANAGE HAIR · SOHO · TEXTURE CONTROL · LIVED-IN CUTS · 15 YEARS EXPERIENCE · ";

export default function Home() {
  const [urgencyDismissed, setUrgencyDismissed] = useState(false);

  return (
    <>
      {!urgencyDismissed && <UrgencyBanner onDismiss={() => setUrgencyDismissed(true)} />}

      <main className="min-h-screen bg-[#111110] text-[#E8E6E1]">
        {/* ── Header ─────────────────────────────────────── */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a
            href="#top"
            className="font-normal tracking-[0.02em] text-[#E8E6E1] transition duration-[400ms] hover:text-[#5A5955]"
            style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "16px" }}
          >
            SB
          </a>
          <nav className="flex gap-5 text-[10px] font-light uppercase tracking-[0.08em] text-[#E8E6E1] sm:gap-7 sm:text-[11px]">
            <a href="#transformations" className="transition-colors duration-[400ms] hover:text-[#5A5955]">
              Results
            </a>
            <a href="#work" className="transition-colors duration-[400ms] hover:text-[#5A5955]">
              Work
            </a>
            <a href="#process" className="transition-colors duration-[400ms] hover:text-[#5A5955]">
              Process
            </a>
            <a href="#pricing" className="transition-colors duration-[400ms] hover:text-[#5A5955]">
              Services
            </a>
            <a href="#pricing" className="hidden text-[#E8E6E1] transition-colors duration-[400ms] hover:text-[#5A5955] sm:block">
              Book
            </a>
          </nav>
        </header>

        {/* ── Hero ───────────────────────────────────────── */}
        <section
          id="top"
          className="mx-auto flex max-w-7xl items-center px-5 pb-8 pt-6 md:min-h-[80svh] md:items-end md:justify-between md:px-10 md:pb-14 md:pt-12"
        >
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#5A5955]"
            >
              Hard-to-Manage Hair Specialist · SoHo NYC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-2 max-w-2xl text-[44px] font-normal leading-[1.08] tracking-[-0.02em] md:mt-3 md:text-[80px] lg:text-[92px]"
            >
              Hair that finally works.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sr-only"
            >
              SoHo NYC hairstylist specializing in hard-to-manage hair, texture, and natural movement.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-lg text-[15px] leading-[1.65] text-[#9A9690] md:mt-8 md:text-[18px]"
            >
              Hair is a fabric. When you understand how it behaves, everything gets easier. The right cut works with your texture instead of fighting it.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4 md:mt-10"
            >
              <a href="#pricing" className="btn-primary">
                Book Now
              </a>
              <a href="#work" className="btn-secondary">
                See the Work
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-5 text-[14px] font-normal leading-[1.55] text-[#E8E6E1] md:text-[15px]"
            >
              456 Broadway, 4th Floor
              <br />
              SoHo, New York City
            </motion.p>
          </div>

          {/* Desktop hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden shrink-0 md:block"
          >
            <div className="aspect-[3/4] w-[300px] overflow-hidden bg-[#1A1918] lg:w-[380px]">
              <img
                src="/images/me.jpg"
                alt="Samuel Bullen hairstylist working with client in SoHo NYC"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </motion.div>
        </section>

        {/* ── Hair Work — Full Gallery ───────────────────── */}
        <section id="work" className="mx-auto max-w-7xl px-5 pb-8 pt-4 md:px-10 md:pb-12 md:pt-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex flex-col justify-between gap-4 border-t border-white/[0.04] pt-6 md:mb-10 md:flex-row md:items-end md:pt-8">
              <div>
                <p className="section-label mb-3">Hair Work</p>
                <h2 className="max-w-xl text-[28px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[40px]">
                  Real hair. Real texture. Cuts built to keep working.
                </h2>
              </div>
              <a href="#pricing" className="btn-secondary shrink-0">
                Book Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
              {workImages.map((img, index) => (
                <figure
                  key={img.src}
                  className={`group ${index === 1 ? "lg:mt-12" : ""}`}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-[#1A1918]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>
                  <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#5A5955] transition duration-[400ms] group-hover:text-[#E8E6E1] sm:text-[11px]">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Post-gallery booking CTA ───────────────────── */}
        <div className="mx-auto max-w-7xl px-5 py-10 text-center md:px-10 md:py-12">
          <a href="#pricing" className="btn-primary">
            Book Now
          </a>
        </div>

        {/* ── Services ─────────────────────────────────────── */}
        <section id="pricing" className="mx-auto max-w-7xl px-5 pb-12 pt-8 md:px-10 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-t border-white/[0.04] pt-8">
              <p className="section-label mb-4">Services</p>
              <h2 className="mb-4 max-w-xl text-[28px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[40px]">
                Choose the session that fits your hair.
              </h2>
              <p className="mb-12 max-w-md text-[14px] leading-[1.8] text-[#9A9690]">
                Every service includes a consultation and a walkthrough. You leave knowing what to do, not guessing.
              </p>
            </div>

            <div className="divide-y divide-white/[0.04] border-y border-white/[0.04]">
              {services.map((service, index) => (
                <a
                  key={service.name}
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`service-row group grid cursor-pointer gap-5 px-2 py-10 md:grid-cols-[1.2fr_0.7fr_1.5fr_auto] md:items-center md:gap-8 md:px-4 md:py-12 ${
                    index === 0 ? "bg-[#1A1918]/30" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <h3 className="text-[18px] font-normal tracking-[0] text-[#E8E6E1] md:text-[20px]">
                      {service.name}
                    </h3>
                    {service.badge && (
                      <span className="rounded-full border border-[#E8E6E1]/15 bg-[#E8E6E1]/10 px-2.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-[#E8E6E1]">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
                    <p className="text-[15px] font-light text-[#E8E6E1]">{service.price}</p>
                    <p className="text-[11px] text-[#5A5955]">{service.time}</p>
                  </div>
                  <p className="max-w-[520px] text-[13px] font-light leading-[1.8] text-[#9A9690]">
                    {service.description}
                  </p>
                  <div className="hidden md:block">
                    <span className="btn-secondary px-4 py-2 text-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Book →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Featured Transformation ────────────────────── */}
        <TransformationFeature bookingUrl={HAIRCUT_URL} />

        {/* ── Credibility bar ────────────────────────────── */}
        <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-14">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-0 sm:divide-x sm:divide-white/[0.04]">
            {["15 Years Experience", "456 Broadway, 4th Floor, New York, NY", "Hair + Portraits"].map((stat) => (
              <span
                key={stat}
                className="text-center text-[10px] uppercase tracking-[0.2em] text-[#5A5955] sm:px-10"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* ── Marquee ────────────────────────────────────── */}
        <div className="overflow-hidden border-y border-white/[0.04] bg-[#111110] py-3">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <span className="px-10 text-[11px] uppercase tracking-[0.2em] text-[#5A5955]">
              {marqueeContent}
            </span>
            <span className="px-10 text-[11px] uppercase tracking-[0.2em] text-[#5A5955]" aria-hidden="true">
              {marqueeContent}
            </span>
          </div>
        </div>

        {/* ── Is This You? ───────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/hair/hair-2.jpg"
              alt=""
              className="h-full w-full object-cover opacity-[0.12]"
              style={{ objectPosition: "center 35%" }}
            />
            <div className="absolute inset-0 bg-[#111110]/85" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-10">Is This You?</p>
              <div className="max-w-4xl space-y-6 md:space-y-8">
                {[
                  "Your hair looks different every single day.",
                  "Haircuts fall apart after a week.",
                  "Styling never feels repeatable at home.",
                  "No one has ever really explained your texture to you.",
                ].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-[22px] font-normal leading-[1.35] tracking-[-0.01em] text-[#E8E6E1] md:text-[36px] lg:text-[42px]"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 md:mt-14"
              >
                <p className="mb-6 text-[18px] font-normal text-[#E8E6E1] md:text-[22px]">
                  You are not the problem. The cut is.
                </p>
                <a href="#pricing" className="btn-primary">
                  Book Now
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Portrait Work — Visual Proof ──────────────────── */}
        <section id="portraits" className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-10 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-10 flex flex-col justify-between gap-4 border-t border-white/[0.04] pt-8 md:flex-row md:items-end">
              <div>
                <p className="section-label mb-3">Portrait Work</p>
                <h2 className="max-w-xl text-[28px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[40px]">
                  The hair is only half the story.
                </h2>
                <p className="mt-3 max-w-md text-[14px] leading-[1.7] text-[#9A9690]">
                  Portraits built around the version of you that feels right.
                  Natural, intentional, and directed so you are not left guessing.
                </p>
              </div>
              <a href="mailto:sambullen228@gmail.com?subject=Portrait%20Inquiry" className="btn-secondary shrink-0">
                Inquire About Portraits
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
              {portraitImages.map((img, index) => (
                <figure
                  key={img.src}
                  className={`group ${index === 1 ? "lg:mt-12" : ""}`}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden bg-[#1A1918]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#5A5955] transition duration-[400ms] group-hover:text-[#E8E6E1] sm:text-[11px]">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Final CTA ────────────────────────────────────── */}
        <section className="mx-auto max-w-7xl px-5 py-20 text-center md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-6">Ready?</p>
            <h2 className="mx-auto max-w-3xl text-[32px] font-normal leading-[1.15] tracking-[-0.02em] md:text-[56px]">
              Stop fighting your hair every morning.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-[15px] leading-[1.7] text-[#9A9690] md:text-[17px]">
              456 Broadway, 4th Floor, SoHo. New clients welcome.
              Book the service that fits your hair and start leaving the house with confidence.
            </p>
            <div className="mt-10 flex justify-center">
              <a href="#pricing" className="btn-primary">
                Book Now
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <StickyMobileCTA />

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/[0.04] bg-[#111110] px-5 pb-24 pt-10 text-[12px] text-[#5A5955] md:flex-row md:items-center md:justify-between md:px-10 md:pb-10">
        <div>
          <p className="text-[13px] text-[#E8E6E1]">Samuel Bullen · SoHo / Downtown NYC</p>
          <p className="mt-2 text-[11px] tracking-[0.05em]">
            456 Broadway, 4th Floor, New York, NY
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="mailto:sambullen228@gmail.com" className="transition duration-[400ms] hover:text-[#E8E6E1]">
            Email
          </a>
          <a
            href="https://www.instagram.com/thesambullen"
            target="_blank"
            rel="noreferrer"
            className="transition duration-[400ms] hover:text-[#E8E6E1]"
          >
            Instagram
          </a>
          <a
            href="https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/HHBKQ7WSRX4G2IQCL2PPL6JU"
            target="_blank"
            rel="noreferrer"
            className="transition duration-[400ms] hover:text-[#E8E6E1]"
          >
            Book Now
          </a>
        </div>
      </footer>
    </>
  );
}
