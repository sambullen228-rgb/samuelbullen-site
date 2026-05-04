"use client";

import { useState } from "react";
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
  "Soft movement",
  "Clean shape",
  "Creative texture",
  "Real-world wear",
  "Defined curls",
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


export default function Home() {
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  return (
    <>
      <main className="min-h-screen bg-[#111110] text-[#E8E6E1]">
        {/* Announcement bar */}
        {!announcementDismissed && (
          <div className="relative flex min-h-10 items-center justify-center bg-[#111110] px-10 py-3">
            <p className="text-center text-[11px] uppercase tracking-[0.1em] text-[#9A9690]">
              Now booking new clients. Start with the service that fits your hair.{" "}
              <a
                href="#pricing"
                className="text-[#E8E6E1] underline underline-offset-4 decoration-white/[0.04] transition duration-[400ms] hover:text-[#E8E6E1]"
              >
                Book Appointment →
              </a>
            </p>
            <button
              onClick={() => setAnnouncementDismissed(true)}
              className="absolute right-4 text-[#5A5955] transition-colors duration-[400ms] hover:text-white md:hidden"
              aria-label="Dismiss"
            >
              ✕
            </button>
          </div>
        )}

        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#top" className="font-normal tracking-[0.02em] text-[#E8E6E1] transition duration-[400ms] hover:text-[#5A5955]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif", fontSize: "16px" }}>
            SB
          </a>
          <nav className="flex gap-5 text-[10px] font-light uppercase tracking-[0.08em] text-[#E8E6E1] sm:gap-7 sm:text-[11px]">
            <a href="#hair" className="transition-colors duration-[400ms] hover:text-[#5A5955]">Hair</a>
            <a href="#pricing" className="transition-colors duration-[400ms] hover:text-[#5A5955]">Services</a>
            <a href="#education" className="transition-colors duration-[400ms] hover:text-[#5A5955]">Education</a>
            <a href="#photography" className="transition-colors duration-[400ms] hover:text-[#5A5955]">Portrait Work</a>
          </nav>
        </header>

        {/* Hero */}
        <section
          id="top"
          className="mx-auto flex max-w-7xl items-center px-5 pb-8 pt-8 md:min-h-[70svh] md:items-end md:justify-between md:px-10 md:pb-14 md:pt-16"
        >
          <div className="max-w-3xl">
            <p
              className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#5A5955]"
            >
              Hard-to-Manage Hair Specialist
            </p>
            <h1
              className="mt-2 max-w-2xl text-[52px] font-normal leading-[1.08] tracking-[-0.02em] md:mt-3 md:text-[86px]"
            >
              Hair Design that finally works.
            </h1>
            <p className="sr-only">
              SoHo NYC hairstylist specializing in hard-to-manage hair, texture, and natural movement.
            </p>
            <p
              className="mt-6 text-[11px] uppercase tracking-[0.15em] text-[#5A5955]"
            >
              SoHo / Downtown NYC
            </p>
            <div
              className="mt-9 max-w-lg space-y-5 text-[17px] leading-[1.65] text-[#9A9690] md:mt-11 md:text-[20px]"
            >
              <div>
                <p className="text-[24px] font-normal leading-tight tracking-[-0.02em] text-[#E8E6E1] md:text-[32px]">
                  Hair is a fabric.
                </p>
                <p className="mt-4 text-[16px] leading-[1.8] text-[#9A9690] md:text-[18px]">
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
            </div>
            {/* Mobile: image left, buttons right */}
            <div className="mt-6 flex items-start gap-5 md:hidden">
              <div className="aspect-[3/4] w-[42%] max-w-[150px] shrink-0 overflow-hidden bg-[#1A1918]">
                <img
                  src="/images/me.jpg"
                  alt="Samuel Bullen hairstylist working with client in SoHo NYC"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col gap-4 pt-1">
                <a
                  href="#pricing"
                  className="btn-dark"
                >
                  Book Appointment
                </a>
                <a
                  href="#hair"
                  className="px-1 py-3 text-[12px] uppercase tracking-[0.08em] text-[#E8E6E1] transition duration-[400ms] hover:text-[#5A5955]"
                >
                  View Work
                </a>
              </div>
            </div>
            {/* Desktop buttons */}
            <div
              className="mt-12 hidden flex-wrap gap-5 md:flex"
            >
              <a
                href="#pricing"
                className="btn-dark"
              >
                Book Appointment
              </a>
              <a
                href="#hair"
                className="px-1 py-3 text-[12px] uppercase tracking-[0.08em] text-[#E8E6E1] transition duration-[400ms] hover:text-[#5A5955]"
              >
                View Work
              </a>
            </div>
          </div>

          <div
            className="hidden shrink-0 md:block"
          >
            <div className="aspect-[3/4] w-[280px] overflow-hidden lg:w-[340px]">
              <img
                src="/images/me.jpg"
                alt="Samuel Bullen hairstylist working with client in SoHo NYC"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
          </div>
        </section>

        {/* Credibility bar */}
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-0 sm:divide-x sm:divide-white/[0.04]">
            {["15 Years Experience", "469 Broadway, 4th Floor, New York, NY", "Hair + Portraits"].map((stat) => (
              <span
                key={stat}
                className="text-center text-[10px] uppercase tracking-[0.2em] text-[#5A5955] sm:px-10"
              >
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-white/[0.04] bg-[#111110] py-3">
          <div className="animate-marquee flex w-max whitespace-nowrap">
            <span className="px-10 text-[11px] uppercase tracking-[0.2em] text-[#5A5955]">
              {marqueeContent}
            </span>
            <span
              className="px-10 text-[11px] uppercase tracking-[0.2em] text-[#5A5955]"
              aria-hidden="true"
            >
              {marqueeContent}
            </span>
          </div>
        </div>

        {/* Hair Work */}
        <section id="hair" className="mx-auto max-w-7xl px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-32">
          <div
            className="mb-12 flex flex-col justify-between gap-6 border-t border-white/[0.04] pt-8 md:flex-row"
          >
            <p className="section-label">
              Hair Work — SoHo NYC
            </p>
            <h2 className="max-w-2xl text-[32px] font-normal leading-[1.2] tracking-[-0.01em] md:text-[52px]">
              Real hair. Real texture. Cuts built to keep working.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-[4.5rem] lg:grid-cols-3">
            {workCaptions.map((caption, index) => (
              <figure
                key={caption}
                className={`group ${index === 1 ? "lg:mt-16" : ""}`}
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#1A1918]">
                  <img
                    src={`/images/hair/${workImageSources[index]}`}
                    alt={workImageAlts[index]}
                    style={{ objectPosition: workImagePositions[index] }}
                    className="h-full w-full object-cover transition-transform duration-[500ms] ease-[ease] group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#5A5955] transition duration-[400ms] group-hover:text-[#E8E6E1] sm:text-[11px]">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Pain points */}
        <section
          className="mx-auto max-w-7xl px-5 pb-4 pt-4 md:px-10 md:pb-8 md:pt-6"
        >
          <div className="mx-auto max-w-[380px] space-y-5 text-[14px] leading-[1.8] text-[#9A9690]">
            <p className="text-[#E8E6E1]">
              The goal is not just a good haircut in the chair. It&apos;s hair
              that works when you&apos;re on your own.
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#5A5955]">
              If:
            </p>
            <ul className="grid gap-2 text-sm leading-relaxed text-[#9A9690] sm:grid-cols-2">
              <li>Your hair looks different every day</li>
              <li>Haircuts fall apart after a week</li>
              <li>Styling never feels repeatable at home</li>
              <li>No one has really explained your hair to you</li>
            </ul>
            <p className="text-[#E8E6E1]">You&apos;re in the right place.</p>
          </div>
        </section>

        {/* Approach */}
        <section
          className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"
        >
          <div className="grid gap-10 border-t border-white/[0.04] pt-8 md:grid-cols-[0.8fr_1.2fr]">
            <p className="section-label">
              Approach
            </p>
            <div className="max-w-3xl space-y-7 text-[22px] font-normal leading-[1.5] tracking-[-0.01em] md:text-[32px]">
              <p className="font-normal">
                Most haircuts fail because they ignore how your hair actually
                behaves.
              </p>
              <p>
                I pay attention to how it grows, where it pushes, where it
                collapses, and build the shape around that. Scissor or razor work
                depends on what the hair needs.
              </p>
              <p className="text-base leading-relaxed tracking-tight text-[#9A9690] md:text-lg">
                Then I walk you through how to dry it, move it, and keep it
                working, so you are not guessing every morning.
              </p>
            </div>
          </div>
        </section>

        {/* Hair Pricing */}
        <section id="pricing" className="mx-auto max-w-7xl px-5 pb-12 pt-16 md:px-10">
          <div
            className="border-t border-white/[0.04] pt-8"
          >
            <p className="section-label mb-4">
              Services
            </p>
            <p className="mb-12 max-w-[380px] text-[14px] leading-[1.8] text-[#9A9690]">
              Choose the session that fits your hair.
            </p>
          </div>
          <div className="divide-y divide-white/[0.04] border-y border-white/[0.04]">
            {services.map((service, index) => (
              <a
                key={service.name}
                href={service.bookingHref}
                target="_blank"
                rel="noreferrer"
                className="service-row grid cursor-pointer gap-6 px-2 py-12 md:grid-cols-[1.1fr_0.85fr_1.55fr] md:items-start md:gap-10 md:px-4"
              >
                <h3 className="text-[20px] font-normal tracking-[0] text-[#E8E6E1]">
                  {service.name}
                </h3>
                <p className="text-[14px] font-light text-[#9A9690]">
                  {service.price}
                </p>
                <p className="max-w-[580px] text-[12px] font-light leading-[1.8] text-[#9A9690]">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Razor Cutting Education */}
        <section id="education" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <div className="border-t border-white/[0.04] pt-8">
              <p className="section-label mb-10">Razor Cutting Education</p>
              <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
                <div>
                  <h2 className="text-[32px] font-normal leading-[1.2] tracking-[-0.01em] text-[#E8E6E1] md:text-[48px]">
                    Razor Cutting Education for Stylists
                  </h2>
                  <p className="mt-5 text-[16px] leading-[1.75] text-[#9A9690] md:text-[18px]">
                    Real-world razor cutting for stylists who want control, not chaos.
                  </p>
                </div>
                <div className="space-y-8">
                  <p className="text-[16px] leading-[1.8] text-[#9A9690] md:text-[18px]">
                    This is not a technique demo or a trend workshop. It is practical
                    razor education built from 15 years of behind-the-chair work — the
                    kind of education that changes how you think about a haircut, not
                    just how you hold a tool.
                  </p>
                  <ul className="space-y-4 border-t border-white/[0.04] pt-6">
                    {[
                      "Controlling weight and texture with a razor",
                      "When to use a razor vs scissors — and when not to",
                      "Building cuts that grow out properly",
                      "Adapting razor work to different hair types",
                      "Client communication and expectation setting",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-[15px] leading-[1.7] text-[#9A9690]">
                        <span className="mt-0.5 shrink-0 text-[11px] uppercase tracking-[0.18em] text-[#5A5955]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2">
                    <a
                      href="mailto:sambullen228@gmail.com?subject=Razor%20Cutting%20Education%20Inquiry"
                      className="btn-dark"
                    >
                      Request Education Info
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* "Also available" divider */}
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <hr className="border-white/[0.04]" />
          <p className="mt-6 inline-block text-[10px] uppercase tracking-[0.15em] text-[#5A5955]">
            Also available:
          </p>
        </div>

        {/* Portrait Work */}
        <section id="photography" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-24">
          <div
            className="mb-8 grid gap-4 border-t border-white/[0.04] pt-8 md:grid-cols-[0.8fr_1.2fr]"
          >
            <p className="section-label">
              Portraits
            </p>
            <h2 className="max-w-2xl text-[26px] font-normal leading-[1.4] tracking-[-0.02em] md:text-[36px]">
              Portraits that feel like you on your best day. Natural, intentional,
              and directed just enough so you&apos;re not left wondering what to do.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-[4.5rem] lg:grid-cols-3">
            {portraitImageSources.map((_, index) => (
              <figure
                key={portraitImageSources[index]}
                className="group"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#1A1918]">
                  <img
                    src={`/images/portraits/${portraitImageSources[index]}`}
                    alt={portraitImageAlts[index]}
                    style={{ objectPosition: portraitImagePositions[index] }}
                    className="h-full w-full object-cover transition-transform duration-[500ms] ease-[ease] group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="mt-3 block text-[10px] uppercase tracking-[0.18em] leading-tight text-[#5A5955] transition duration-[400ms] group-hover:text-[#E8E6E1] sm:text-[11px]">
                  {photoCaptions[index]}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 text-center">
            <a
              href="mailto:sambullen228@gmail.com?subject=Portrait%20Inquiry"
              className="btn-dark"
            >
              Inquire About Portrait Work
            </a>
          </div>
        </section>

        {/* Hair + Portrait intro */}
        <section
          className="mx-auto max-w-7xl px-5 pb-28 pt-12 md:px-10 md:pb-32 md:pt-14"
        >
          <div className="grid gap-10 pt-6 md:grid-cols-[0.8fr_1.2fr]">
            <p className="section-label">
              Hair + Portrait
            </p>
            <div className="max-w-3xl space-y-6 text-[20px] font-normal leading-[1.5] tracking-[-0.01em] md:text-[28px]">
              <p className="font-light">
                A haircut or styling session, then portraits built around the
                version of you that actually feels right. The whole thing
                considered: the hair, the direction, and the image.
              </p>
              <p className="text-base text-[#9A9690] md:text-lg">
                In the salon or around SoHo. Film, digital, or both. I direct it
                so you are not left guessing.
              </p>
            </div>
          </div>
        </section>

      </main>

      <StickyMobileCTA />

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/[0.04] bg-[#111110] px-5 pb-[68px] pt-10 text-[12px] text-[#5A5955] md:flex-row md:items-center md:justify-between md:px-10 md:pb-10">
        <div>
          <p>Samuel Bullen · SoHo / Downtown NYC</p>
          <p className="mt-2 text-[11px] tracking-[0.05em]">
            469 Broadway, 4th Floor, New York, NY
          </p>
        </div>
        <div className="flex gap-5">
          <a href="mailto:sambullen228@gmail.com" className="transition duration-[400ms] hover:text-[#5A5955]">
            Email
          </a>
          <a
            href="https://www.instagram.com/thesambullen"
            target="_blank"
            rel="noreferrer"
            className="transition duration-[400ms] hover:text-[#5A5955]"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
