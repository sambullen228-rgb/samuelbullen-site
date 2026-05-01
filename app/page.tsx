"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import StickyMobileCTA from "./StickyMobileCTA";

const services = [
  {
    name: "Haircut",
    price: "$200",
    description:
      "Full wash, haircut, and style. Scissor or razor work built around your natural growth, texture, and routine.",
    bookingHref:
      "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/HHBKQ7WSRX4G2IQCL2PPL6JU",
  },
  {
    name: "Dry Cut",
    price: "$150",
    description:
      "No wash or styling. You come in with clean, dry hair. Best for refining shape, removing weight, and adjusting how the cut moves.",
    bookingHref:
      "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/QBR6MSH6NWI4S5AD2YIHRIMO",
  },
  {
    name: "Bangs & Bits",
    price: "$75",
    description:
      "Bang trim, face-framing layers, or any single targeted area. In and out — no full appointment needed.",
    bookingHref:
      "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/7JCPS5HMU34AUJER24ZAMH74",
  },
  {
    name: "Hair Education: Fix Your Routine",
    price: "$125",
    description:
      "A focused session to understand your hair, products, tools, drying, and daily routine. Hair is a fabric, and it cannot all be treated the same. I'll help you figure out what your hair needs, what to stop doing, and how to get closer to the hair you actually want.",
    bookingHref:
      "https://book.squareup.com/appointments/4xn7zibkrm3la6/location/L0XM0F8NRHB11/services/SDVG3UBSSKP6EYEIJDFNOSVP",
  },
];

const workCaptions = [
  "Texture control",
  "Defined curls",
  "Clean shape",
  "Creative texture",
  "Real-world wear",
  "Soft movement",
  "Precision cut",
  "Transformation",
];

const workImageAlts = [
  "thick textured haircut with controlled shape",
  "defined curly haircut with volume and structure",
  "before and after haircut transformation collage",
  "creative textured curly haircut with personality",
  "lived-in blonde haircut in SoHo NYC",
  "soft curly haircut with natural movement",
  "sharp bob haircut with precise structure",
  "before and after blonde haircut transformation in SoHo NYC",
];

const workImagePositions = [
  "center 35%",
  "center 35%",
  "center 35%",
  "center 35%",
  "center 35%",
  "center 30%",
  "center 40%",
  "center 35%",
];

const workImageSources = [
  "hair-2.jpg",
  "hair-6.jpg",
  "hair-1.jpg",
  "hair-3.jpg",
  "hair-4.jpg",
  "hair-5.jpg",
  "hair-7.jpg",
  "hair-8.jpg",
];

const photoCaptions = [
  "Editorial portrait",
  "Cinematic mood",
  "Black and white portrait",
  "Personality portrait",
  "SoHo balcony",
  "Texture study",
];

const portraitImageSources = [
  "portrait-1.jpg",
  "portrait-2.jpg",
  "portrait-3.jpg",
  "portrait-4.jpg",
  "portrait-5.jpg",
  "portrait-6.jpg",
];

const portraitImageAlts = [
  "editorial portrait with red curly hair",
  "cinematic low light portrait seated pose",
  "black and white short hair portrait",
  "editorial portrait in leopard coat",
  "portrait on SoHo balcony with city background",
  "wet blonde textured close-up portrait",
];

const portraitImagePositions = [
  "center 35%",
  "center 40%",
  "center 30%",
  "center 35%",
  "center 40%",
  "center 25%",
];

const marqueeContent =
  "RAZOR CUTTING · HARD-TO-MANAGE HAIR · SOHO · HAIR EDUCATION · TEXTURE CONTROL · LIVED-IN CUTS · PORTRAIT SESSIONS · DOWNTOWN NYC · ";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.05,
    },
  }),
};

export default function Home() {
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-[#FAFAFC] text-[#0E0B1F] tracking-tight">
        {/* Announcement bar */}
        {!announcementDismissed && (
          <div className="relative flex h-10 items-center justify-center bg-[#0E0B1F] px-10">
            <p className="text-center text-[11px] uppercase tracking-[0.1em] text-[#D4CFC8]/90">
              Now booking new clients. Start with the service that fits your hair.{" "}
              <a
                href="#pricing"
                className="text-white underline underline-offset-4 decoration-[#FF7E9D] transition duration-[350ms] hover:text-[#FF7E9D]"
              >
                Book Appointment →
              </a>
            </p>
            <button
              onClick={() => setAnnouncementDismissed(true)}
              className="absolute right-4 text-[#6B6480] transition-colors duration-[350ms] hover:text-white md:hidden"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#top" className="text-sm font-light tracking-[0.2em] text-[#0E0B1F] transition duration-[350ms] hover:text-[#FF7E9D]">
            SB
          </a>
          <nav className="flex gap-5 text-[10px] font-light uppercase tracking-[0.15em] text-[#6B6480] sm:gap-7 sm:text-[11px]">
            <a href="#hair" className="transition-colors duration-[350ms] hover:text-[#FF7E9D]">Hair</a>
            <a href="#pricing" className="transition-colors duration-[350ms] hover:text-[#FF7E9D]">Services</a>
            <a href="#education" className="transition-colors duration-[350ms] hover:text-[#FF7E9D]">Education</a>
            <a href="#photography" className="transition-colors duration-[350ms] hover:text-[#FF7E9D]">Portrait Work</a>
          </nav>
        </header>

        {/* Hero */}
        <section
          id="top"
          className="aurora-bg mx-auto flex max-w-7xl items-center px-5 pb-8 pt-8 md:min-h-[70svh] md:items-end md:justify-between md:px-10 md:pb-14 md:pt-16"
        >
          <motion.div className="max-w-3xl" initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#6B6480]"
            >
              Hard-to-Manage Hair Specialist
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="mt-2 max-w-2xl text-[58px] font-medium leading-[0.92] tracking-[-0.045em] md:mt-3 md:text-[134px]"
            >
              Hair that works with you, not against you.
            </motion.h1>
            <p className="sr-only">
              SoHo NYC hairstylist specializing in hard-to-manage hair, texture, and natural movement.
            </p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-[11px] uppercase tracking-[0.2em] text-[#6B6480]"
            >
              SoHo / Downtown NYC
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-9 max-w-lg space-y-5 text-[17px] leading-[1.65] text-[#6B6480] md:mt-11 md:text-[20px]"
            >
              <div>
                <p className="text-[26px] font-medium leading-tight tracking-[-0.03em] text-[#0E0B1F] md:text-[36px]">
                  Hair is a fabric.
                </p>
                <p className="mt-4 text-[16px] leading-[1.8] text-[#6B6480] md:text-[18px]">
                  It needs to be treated like one. You wouldn&apos;t treat silk like wool, would you?
                </p>
              </div>
              <p>
                I specialize in hair that&apos;s hard to manage. Too thick, too flat,
                grows in weird directions, never does the same thing twice. I
                combine razor and scissor work to redesign the hair shape to
                create movement without fighting your natural texture.
              </p>
              <p>
                You leave knowing what your hair needs, not guessing what to buy
                or how to style it.
              </p>
            </motion.div>
            {/* Mobile: image left, buttons right */}
            <div className="mt-6 flex items-start gap-5 md:hidden">
              <div className="aspect-[3/4] w-[42%] max-w-[150px] shrink-0 overflow-hidden bg-neutral-200">
                <img
                  src="/images/me.jpg"
                  alt="Samuel Bullen hairstylist working with client in SoHo NYC"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-4 pt-1">
                <a
                  href="#pricing"
                  className="btn-gradient"
                >
                  Book Appointment
                </a>
                <a
                  href="#hair"
                  className="px-1 py-3 text-sm tracking-[0.05em] text-[#6B6480] underline decoration-[#E6E2EE] underline-offset-8 transition duration-[350ms] hover:text-[#FF7E9D] hover:decoration-[#FF7E9D]"
                >
                  View Work
                </a>
              </div>
            </div>
            {/* Desktop buttons */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-12 hidden flex-wrap gap-5 md:flex"
            >
              <a
                href="#pricing"
                className="btn-gradient"
              >
                Book Appointment
              </a>
              <a
                href="#hair"
                className="px-1 py-3 text-sm tracking-[0.05em] text-[#6B6480] underline decoration-[#E6E2EE] underline-offset-8 transition duration-[350ms] hover:text-[#FF7E9D] hover:decoration-[#FF7E9D]"
              >
                View Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden shrink-0 md:block"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="aspect-[3/4] w-[280px] overflow-hidden lg:w-[340px]">
              <img
                src="/images/me.jpg"
                alt="Samuel Bullen hairstylist working with client in SoHo NYC"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </motion.div>
        </section>

        {/* Credibility bar */}
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-0 sm:divide-x sm:divide-[#E6E2EE]">
            {["15 Years Experience", "469 Broadway, 4th Floor, New York, NY", "Hair + Portraits"].map((stat) => (
              <span
                key={stat}
                className="text-center text-[10px] uppercase tracking-[0.2em] text-[#6B6480] sm:px-10"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-[#E6E2EE] bg-[#FAFAFC] py-3">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <span className="px-10 text-[11px] uppercase tracking-[0.2em] text-[#6B6480]">
              {marqueeContent}
            </span>
            <span
              className="px-10 text-[11px] uppercase tracking-[0.2em] text-[#6B6480]"
              aria-hidden="true"
            >
              {marqueeContent}
            </span>
          </div>
        </div>

        {/* Hair Work */}
        <section id="hair" className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
          <motion.div
            className="mb-12 flex flex-col justify-between gap-6 border-t border-[#E6E2EE] pt-8 md:flex-row"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label">
              Hair Work — SoHo NYC
            </p>
            <h2 className="max-w-2xl text-[40px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[68px]">
              Real hair. Real texture. Cuts built to keep working.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-[4.5rem] lg:grid-cols-3">
            {workCaptions.map((caption, index) => (
              <motion.figure
                key={caption}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
                className={`group ${index === 1 ? "lg:mt-16" : ""}`}
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={`/images/hair/${workImageSources[index]}`}
                    alt={workImageAlts[index]}
                    style={{ objectPosition: workImagePositions[index] }}
                    className="h-full w-full object-cover transition duration-900 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#6B6480] transition duration-[350ms] group-hover:text-[#0E0B1F] sm:text-[11px]">
                  {caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </section>

        {/* Pain points */}
        <motion.section
          className="mx-auto max-w-7xl px-5 pb-4 pt-4 md:px-10 md:pb-8 md:pt-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mx-auto max-w-[580px] space-y-5 text-[17px] leading-[1.8] text-[#6B6480] md:text-[20px]">
            <p className="text-black">
              The goal is not just a good haircut in the chair. It&apos;s hair
              that works when you&apos;re on your own.
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6B6480]">
              If:
            </p>
            <ul className="grid gap-2 text-sm leading-relaxed text-[#2A2440] sm:grid-cols-2">
              <li>Your hair looks different every day</li>
              <li>Haircuts fall apart after a week</li>
              <li>Styling never feels repeatable at home</li>
              <li>No one has really explained your hair to you</li>
            </ul>
            <p className="text-black">You&apos;re in the right place.</p>
          </div>
        </motion.section>

        {/* Approach */}
        <motion.section
          className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid gap-10 border-t border-[#E6E2EE] pt-8 md:grid-cols-[0.8fr_1.2fr]">
            <p className="section-label">
              Approach
            </p>
            <div className="max-w-3xl space-y-7 text-[26px] font-normal leading-[1.4] tracking-[-0.03em] md:text-[42px] md:leading-[1.15]">
              <p className="font-normal">
                Most haircuts fail because they ignore how your hair actually
                behaves.
              </p>
              <p>
                I pay attention to how it grows, where it pushes, where it
                collapses, and build the shape around that. Scissor or razor work
                depends on what the hair needs.
              </p>
              <p className="text-base leading-relaxed tracking-tight text-[#6B6480] md:text-lg">
                Then I walk you through how to dry it, move it, and keep it
                working, so you are not guessing every morning.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Hair Pricing */}
        <section id="pricing" className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:px-10">
          <motion.div
            className="border-t border-[#E6E2EE] pt-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label mb-4">
              Services
            </p>
            <p className="mb-12 max-w-[580px] text-[17px] leading-[1.8] text-[#2A2440] md:text-[19px]">
              Choose the session that fits your hair.
            </p>
          </motion.div>
          <div className="divide-y divide-[#E6E2EE] border-y border-[#E6E2EE]">
            {services.map((service, index) => (
              <motion.a
                key={service.name}
                href={service.bookingHref}
                target="_blank"
                rel="noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index}
                className="service-row grid cursor-pointer gap-6 px-2 py-12 md:grid-cols-[1.1fr_0.85fr_1.55fr] md:items-start md:gap-10 md:px-4"
              >
                <h3 className="text-[26px] font-medium tracking-[-0.02em] text-[#0E0B1F]">
                  {service.name}
                </h3>
                <p className="text-[13px] font-normal uppercase tracking-[0.18em] text-[#FF7E9D] md:text-sm">
                  {service.price}
                </p>
                <p className="max-w-[580px] text-[15px] leading-[1.8] text-[#2A2440]">
                  {service.description}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Razor Cutting Education */}
        <section id="education" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="border-t border-[#E6E2EE] pt-8">
              <p className="section-label mb-10">Razor Cutting Education</p>
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <h2 className="text-[32px] font-medium leading-[1.05] tracking-[-0.04em] text-[#0E0B1F] md:text-[48px]">
                    Razor Cutting Education for Stylists
                  </h2>
                  <p className="mt-5 text-[16px] leading-[1.75] text-[#6B6480] md:text-[18px]">
                    Real-world razor cutting for stylists who want control, not chaos.
                  </p>
                </div>
                <div className="space-y-8">
                  <p className="text-[16px] leading-[1.8] text-[#2A2440] md:text-[18px]">
                    This is not a technique demo or a trend workshop. It is practical
                    razor education built from 15 years of behind-the-chair work — the
                    kind of education that changes how you think about a haircut, not
                    just how you hold a tool.
                  </p>
                  <ul className="space-y-4 border-t border-[#E6E2EE] pt-6">
                    {[
                      "Controlling weight and texture with a razor",
                      "When to use a razor vs scissors — and when not to",
                      "Building cuts that grow out properly",
                      "Adapting razor work to different hair types",
                      "Client communication and expectation setting",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-[15px] leading-[1.7] text-[#2A2440]">
                        <span className="mt-0.5 shrink-0 text-[11px] uppercase tracking-[0.18em] text-[#6B6480]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <a
                      href="mailto:sambullen228@gmail.com?subject=Razor%20Cutting%20Education%20Inquiry"
                      className="btn-gradient inline-block"
                    >
                      Request Education Info
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* "Also available" divider */}
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <hr className="border-[#E6E2EE]" />
          <p className="mt-6 inline-block text-[10px] uppercase tracking-[0.2em] text-[#6B6480]">
            Also available:
          </p>
        </div>

        {/* Portrait Work */}
        <section id="photography" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <motion.div
            className="mb-8 grid gap-4 border-t border-[#E6E2EE] pt-8 md:grid-cols-[0.8fr_1.2fr]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label">
              Portraits
            </p>
            <p className="max-w-2xl text-[26px] font-medium leading-[1.4] tracking-[-0.03em] md:text-[38px]">
              Portraits that feel like you on your best day. Natural, intentional,
              and directed just enough so you&apos;re not left wondering what to do.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-[4.5rem] lg:grid-cols-3">
            {portraitImageSources.map((_, index) => (
              <motion.figure
                key={portraitImageSources[index]}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                custom={index}
                className="group"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={`/images/portraits/${portraitImageSources[index]}`}
                    alt={portraitImageAlts[index]}
                    style={{ objectPosition: portraitImagePositions[index] }}
                    className="h-full w-full object-cover transition duration-900 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 block text-[10px] uppercase tracking-[0.18em] leading-tight text-[#6B6480] transition duration-[350ms] group-hover:text-[#0E0B1F] sm:text-[11px]">
                  {photoCaptions[index]}
                </figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="mailto:sambullen228@gmail.com?subject=Portrait%20Inquiry"
              className="btn-gradient"
            >
              Inquire About Portrait Work
            </a>
          </div>
        </section>

        {/* Hair + Portrait intro */}
        <div className="section-cool">
        <motion.section
          className="mx-auto max-w-7xl px-5 pb-28 pt-12 md:px-10 md:pb-32 md:pt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid gap-10 pt-6 md:grid-cols-[0.8fr_1.2fr]">
            <p className="section-label">
              Hair + Portrait
            </p>
            <div className="max-w-3xl space-y-6 text-[22px] font-normal leading-[1.45] tracking-[-0.02em] md:text-[32px]">
              <p className="font-light">
                A haircut or styling session, then portraits built around the
                version of you that actually feels right. The whole thing
                considered: the hair, the direction, and the image.
              </p>
              <p className="text-base text-[#2A2440] md:text-lg">
                In the salon or around SoHo. Film, digital, or both. I direct it
                so you are not left guessing.
              </p>
            </div>
          </div>
        </motion.section>
        </div>

      </main>

      <StickyMobileCTA />

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-[#E6E2EE] bg-[#FAFAFC] px-5 pb-[68px] pt-10 text-sm text-[#6B6480] md:flex-row md:items-center md:justify-between md:px-10 md:pb-10">
        <div>
          <p>Samuel Bullen · SoHo / Downtown NYC</p>
          <p className="mt-2 text-[11px] text-[#6B6480] tracking-[0.05em]">
            469 Broadway, 4th Floor, New York, NY
          </p>
        </div>
        <div className="flex gap-5">
          <a href="mailto:sambullen228@gmail.com" className="transition hover:text-black">
            Email
          </a>
          <a
            href="https://www.instagram.com/thesambullen"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
