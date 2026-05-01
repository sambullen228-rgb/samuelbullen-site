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
      <main className="min-h-screen bg-[#f7f5f0] text-black tracking-tight">
        {/* Announcement bar */}
        {!announcementDismissed && (
          <div className="relative flex h-10 items-center justify-center bg-neutral-900 px-10">
            <p className="text-center text-[11px] uppercase tracking-[0.1em] text-neutral-300">
              Now booking new clients. Start with the service that fits your hair.{" "}
              <a
                href="#pricing"
                className="text-white underline underline-offset-2 transition-opacity hover:opacity-75"
              >
                Book Appointment →
              </a>
            </p>
            <button
              onClick={() => setAnnouncementDismissed(true)}
              className="absolute right-4 text-neutral-400 transition-colors hover:text-white md:hidden"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#top" className="text-sm tracking-[0.2em] transition-opacity duration-200 hover:opacity-50">
            SB
          </a>
          <nav className="flex gap-4 text-[10px] uppercase tracking-[0.16em] text-neutral-500 sm:gap-5 sm:text-xs sm:tracking-[0.18em]">
            <a href="#hair" className="transition-colors duration-200 hover:text-black">Hair</a>
            <a href="#pricing" className="transition-colors duration-200 hover:text-black">Services</a>
            <a href="#photography" className="transition-colors duration-200 hover:text-black">Portrait Work</a>
          </nav>
        </header>

        {/* Hero */}
        <section
          id="top"
          className="mx-auto flex max-w-7xl items-center px-5 pb-14 pt-12 md:min-h-[70svh] md:items-end md:justify-between md:px-10 md:pb-14 md:pt-16"
        >
          <motion.div className="max-w-3xl" initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="mb-5 text-xs uppercase tracking-[0.22em] text-neutral-500"
            >
              Hard-to-Manage Hair Specialist
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="max-w-2xl text-[48px] font-medium leading-[0.88] tracking-[-0.085em] md:text-[112px]"
            >
              Hair that finally works.
            </motion.h1>
            <p className="sr-only">
              SoHo NYC hairstylist specializing in hard-to-manage hair, texture, and natural movement.
            </p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 text-xs uppercase tracking-[0.22em] text-neutral-500"
            >
              SoHo / Downtown NYC
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-9 max-w-lg space-y-5 text-[17px] leading-[1.65] text-neutral-500 md:mt-11 md:text-[20px]"
            >
              <div>
                <p className="text-[22px] font-medium leading-tight tracking-[-0.03em] text-black md:text-[30px]">
                  Hair is a fabric.
                </p>
                <p className="mt-3 text-[16px] leading-relaxed text-neutral-500 md:text-[18px]">
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
            <div className="mt-8 block md:hidden">
              <div className="aspect-[5/3] w-full overflow-hidden bg-neutral-200">
                <img
                  src="/images/me.jpg"
                  alt="Samuel Bullen hairstylist working with client in SoHo NYC"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>
            <motion.div
              variants={fadeUp}
              custom={5}
              className="mt-12 flex flex-wrap gap-5"
            >
              <a
                href="#pricing"
                className="bg-black px-5 py-3 text-sm tracking-wide text-white transition duration-300 hover:-translate-y-px hover:opacity-85 active:opacity-70"
              >
                Book Appointment
              </a>
              <a
                href="#hair"
                className="px-1 py-3 text-sm tracking-wide text-neutral-600 underline underline-offset-8 opacity-80 transition duration-300 hover:text-black hover:opacity-100"
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
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-0 sm:divide-x sm:divide-neutral-300">
            {["15 Years Experience", "SoHo / Downtown NYC", "Hair + Portraits"].map((stat) => (
              <span
                key={stat}
                className="text-center text-[11px] uppercase tracking-[0.2em] text-neutral-400 sm:px-8"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-neutral-300 bg-[#f7f5f0] py-3">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <span className="px-10 text-[11px] uppercase tracking-[0.22em] text-neutral-400">
              {marqueeContent}
            </span>
            <span
              className="px-10 text-[11px] uppercase tracking-[0.22em] text-neutral-400"
              aria-hidden="true"
            >
              {marqueeContent}
            </span>
          </div>
        </div>

        {/* Why Sam */}
        <motion.section
          className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid grid-cols-1 divide-y divide-neutral-200 border-t border-neutral-300 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-10 md:py-8 md:pr-10">
              <h3 className="mb-3 text-[15px] font-semibold tracking-[-0.01em]">
                15 Years, Zero Guesswork
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                I&apos;ve spent 15 years studying how hair moves, grows, and behaves.
                No trends for the sake of trends.
              </p>
            </div>
            <div className="py-10 md:px-10 md:py-8">
              <h3 className="mb-3 text-[15px] font-semibold tracking-[-0.01em]">
                Cut For Real Life
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                The cut is built around how your hair actually lives after you leave, not just how it looks in the chair.
              </p>
            </div>
            <div className="py-10 md:pl-10 md:py-8">
              <h3 className="mb-3 text-[15px] font-semibold tracking-[-0.01em]">
                SoHo / Downtown NYC
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                Located at 469 Broadway, 4th floor. New clients welcome. No
                referral needed.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Hair Work */}
        <section id="hair" className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-10 md:pb-14 md:pt-24">
          <motion.div
            className="mb-12 flex flex-col justify-between gap-6 border-t border-neutral-300 pt-8 md:flex-row"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Hair Work — SoHo NYC
            </p>
            <h2 className="max-w-2xl text-[32px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[56px]">
              Real hair. Real texture. Cuts built to keep working.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3">
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
                <figcaption className="mt-2 translate-y-0 text-[11px] text-neutral-500 opacity-80 transition duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:text-xs">
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
          <div className="max-w-xl space-y-5 text-[17px] leading-[1.65] text-neutral-500 md:text-[20px]">
            <p className="text-black">
              The goal is not just a good haircut in the chair. It&apos;s hair
              that works when you&apos;re on your own.
            </p>
            <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
              If:
            </p>
            <ul className="grid gap-2 text-sm leading-relaxed text-neutral-600 sm:grid-cols-2">
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
          className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid gap-10 border-t border-neutral-300 pt-8 md:grid-cols-[0.8fr_1.2fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Approach
            </p>
            <div className="max-w-3xl space-y-7 text-[22px] leading-[1.42] tracking-[-0.03em] md:text-[38px] md:leading-[1.38]">
              <p className="font-semibold">
                Most haircuts fail because they ignore how your hair actually
                behaves.
              </p>
              <p>
                I pay attention to how it grows, where it pushes, where it
                collapses, and build the shape around that. Scissor or razor work
                depends on what the hair needs.
              </p>
              <p className="text-base leading-relaxed tracking-tight text-neutral-500 md:text-lg">
                Then I walk you through how to dry it, move it, and keep it
                working, so you are not guessing every morning.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Hair Pricing */}
        <section id="pricing" className="mx-auto max-w-7xl px-5 pb-8 pt-24 md:px-10">
          <motion.div
            className="border-t border-neutral-300 pt-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-neutral-500">
              Services
            </p>
            <p className="mb-8 max-w-xl text-[18px] leading-relaxed text-neutral-600 md:text-[20px]">
              Choose the session that fits your hair.
            </p>
          </motion.div>
          <div className="divide-y divide-neutral-300 border-y border-neutral-300">
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
                className="grid cursor-pointer gap-6 py-9 transition duration-200 hover:bg-neutral-100 md:grid-cols-[1.1fr_0.85fr_1.55fr] md:items-start md:gap-10"
              >
                <h3 className="text-[24px] font-medium tracking-[-0.03em]">
                  {service.name}
                </h3>
                <p className="text-[15px] font-medium uppercase tracking-[0.12em] text-black md:text-base">
                  {service.price}
                </p>
                <p className="max-w-xl text-[16px] leading-relaxed text-neutral-600">
                  {service.description}
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* "Also available" divider */}
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <hr className="border-neutral-300" />
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-neutral-400">
            Also available:
          </p>
        </div>

        {/* Hair + Portrait intro */}
        <motion.section
          className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-10 md:pb-24 md:pt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid gap-10 pt-6 md:grid-cols-[0.8fr_1.2fr]">
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Hair + Portrait
            </p>
            <div className="max-w-3xl space-y-6 text-[20px] leading-[1.5] tracking-[-0.02em] md:text-[28px]">
              <p className="font-medium">
                A haircut or styling session, then portraits built around the
                version of you that actually feels right. The whole thing
                considered: the hair, the direction, and the image.
              </p>
              <p className="text-base text-neutral-600 md:text-lg">
                In the salon or around SoHo. Film, digital, or both. I direct it
                so you are not left guessing.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Portrait Work */}
        <section id="photography" className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-16">
          <motion.div
            className="mb-8 grid gap-4 border-t border-neutral-300 pt-8 md:grid-cols-[0.8fr_1.2fr]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
              Selected Portraits
            </p>
            <p className="max-w-2xl text-[22px] font-medium leading-[1.45] tracking-[-0.035em] md:text-[34px]">
              Portraits that feel like you on your best day. Natural, intentional,
              and directed just enough so you&apos;re not left wondering what to do.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3">
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
                <figcaption className="mt-2 block translate-y-0 text-[11px] leading-tight text-neutral-500 opacity-80 transition duration-300 group-hover:-translate-y-0.5 group-hover:opacity-100 sm:text-xs">
                  {photoCaptions[index]}
                </figcaption>
              </motion.figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="mailto:sambullen228@gmail.com?subject=Portrait%20Inquiry"
              className="inline-block bg-black px-5 py-3 text-sm tracking-wide text-white transition duration-300 hover:-translate-y-px hover:opacity-85 active:opacity-70"
            >
              Inquire About Portrait Work
            </a>
          </div>
        </section>

      </main>

      <StickyMobileCTA />

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-neutral-300 bg-[#f7f5f0] px-5 pb-[68px] pt-10 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between md:px-10 md:pb-10">
        <div>
          <p>Samuel Bullen · SoHo / Downtown NYC</p>
          <p className="mt-1 text-xs text-neutral-400">
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
