"use client";

import { useEffect, useRef, useState } from "react";

const CONTACT_BG_IMAGE = "/landing/herobg.png";

export default function ContactFooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#DCDCD9] text-[#1A1A1A] overflow-hidden select-none"
    >
      {/* ==================================================================== */}
      {/* UPPER VISUAL CONTACT STAGE + OVERLAPPING "Kinetic" GIANT WORDMARK    */}
      {/* ==================================================================== */}
      <div className="relative min-h-[760px] sm:min-h-[860px] lg:min-h-[940px] w-full flex flex-col justify-between pt-10 sm:pt-14 px-6 sm:px-10 md:px-12 overflow-hidden">
        {/* Background Image Layer (`/landing/herobg.png`) with Smooth Atmospheric Fade into Footer */}
        <div
          aria-hidden="true"
          style={{
            transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -6}px, 0) scale(1.04)`,
          }}
          className="pointer-events-none absolute inset-0 z-0 transition-transform duration-700 ease-out"
        >
          <img
            src={CONTACT_BG_IMAGE}
            alt="Contact visual backdrop"
            loading="lazy"
            width={1920}
            height={1080}
            className="h-full w-full object-cover object-center"
          />
          {/* Top-to-Bottom Studio Fog & Seamless Blend into #DCDCD9 Footer Surface */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-[#DCDCD9]/15 to-[#DCDCD9]" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#DCDCD9] via-[#DCDCD9]/90 to-transparent" />
          {/* Subtle Orange Light Streak Glow matching the reference */}
          <div className="absolute right-[12%] top-[36%] h-48 w-96 rounded-full bg-[#FF5526]/25 blur-[80px]" />
        </div>

        {/* Top-Left Geometric Black Brand Emblem */}
        <div
          className={`relative z-20 max-w-[1480px] w-full mx-auto transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#1A1A1A]"
          >
            <path d="M9 6H21L26 12H14L9 6Z" fill="currentColor" />
            <path d="M9 15H15.5V30H9V15Z" fill="currentColor" />
            <path
              d="M18.5 14L27 22V30H20.5V23L15.5 18L18.5 14Z"
              fill="currentColor"
            />
            <circle
              cx="26.5"
              cy="7.5"
              r="2.2"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        {/* Middle Interactive Content Grid: Left CTA Block + Right Floating Form Card */}
        <div className="relative z-20 max-w-[1480px] w-full mx-auto my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: "Ready to scale your brand?" + Pill CTA */}
          <div
            style={{
              transitionDelay: isVisible ? "120ms" : "0ms",
            }}
            className={`lg:col-span-5 max-w-[300px] transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-8 blur-[6px]"
              }`}
          >
            <h2 className="text-[26px] sm:text-[32px] font-medium tracking-[-0.03em] leading-[1.15] text-[#1A1A1A]">
              Ready to scale
              <br />
              your brand?
            </h2>

            <p className="mt-3.5 text-[12px] sm:text-[13px] leading-[1.5] tracking-[-0.01em] text-black font-normal">
              We don&apos;t just talk results — we create them. Join the brands
              that already trust Kinetic to grow faster.
            </p>

            {/* White Pill Button with Glowing Orange Orb Thumbnail on the Left */}
            <div className="mt-6">
              <a
                href="#consultation-form"
                className="group inline-flex items-center gap-4 rounded-full bg-white p-1.5 pr-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(0,0,0,0.14)]"
              >
                <span className="relative h-10 w-10 rounded-full overflow-hidden bg-[#1A0904] shrink-0 flex items-center justify-center">
                  <img
                    src={CONTACT_BG_IMAGE}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover scale-125 brightness-90 contrast-125 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-150"
                  />
                  <span className="absolute inset-0 bg-gradient-to-tr from-[#FF2A00]/80 via-[#FF6B00]/60 to-amber-300/40 mix-blend-color-dodge" />
                  <span className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-amber-200 to-transparent blur-[0.5px]" />
                </span>
                <span className="text-[12.5px] sm:text-[13px] font-semibold tracking-[-0.015em] text-[#1A1A1A]">
                  Get started
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Floating White Contact Form Card ("Let's build something bold") */}
          <div
            id="consultation-form"
            style={{
              transitionDelay: isVisible ? "260ms" : "0ms",
              transform: `translate3d(${mousePos.x * 6}px, ${mousePos.y * 5}px, 0)`,
            }}
            className={`lg:col-span-7 flex lg:justify-end transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0 scale-100 blur-none"
              : "opacity-0 translate-y-12 scale-[0.96] blur-[8px]"
              }`}
          >
            <div className="w-full max-w-[430px] rounded-[28px] sm:rounded-[32px] bg-white p-7 sm:p-10 shadow-[0_24px_70px_rgba(0,0,0,0.12)] border border-black/[0.03]">
              <div className="text-center mb-6 sm:mb-7">
                <h3 className="text-[22px] sm:text-[25px] font-medium tracking-[-0.03em] leading-[1.18]">
                  <span className="text-[#E85B35] block">Let&apos;s build</span>
                  <span className="text-[#1A1A1A] block">something bold</span>
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="brand-name" className="sr-only">
                    Your brand name
                  </label>
                  <input
                    id="brand-name"
                    type="text"
                    required
                    placeholder="Your brand name"
                    className="h-12 sm:h-13 w-full rounded-full bg-[#EDEDED] px-6 text-[13px] text-[#1A1A1A] placeholder:text-[#9A9A9A] outline-none transition-all duration-200 focus:bg-[#E4E4E4] focus:ring-2 focus:ring-[#FF5526]/30"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Contact email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="Contact email"
                    className="h-12 sm:h-13 w-full rounded-full bg-[#EDEDED] px-6 text-[13px] text-[#1A1A1A] placeholder:text-[#9A9A9A] outline-none transition-all duration-200 focus:bg-[#E4E4E4] focus:ring-2 focus:ring-[#FF5526]/30"
                  />
                </div>

                <div className="pt-1.5">
                  <button
                    type="submit"
                    className="h-12 sm:h-13 w-full rounded-full border border-[#3A3A3A] bg-transparent px-6 text-[12.5px] sm:text-[13px] font-semibold tracking-[-0.01em] text-[#1A1A1A] transition-all duration-300 ease-out hover:bg-[#1A1A1A] hover:text-white active:scale-[0.99] cursor-pointer"
                  >
                    {submitted ? "Request sent ✓" : "Start now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Giant Full-Bleed White "Kinetic" Display Wordmark Spanning Edge-to-Edge */}
        <div
          aria-hidden="true"
          className="relative z-10 w-full flex items-end justify-center overflow-hidden pt-2"
        >
          <div
            style={{
              transform: `translate3d(${mousePos.x * -12}px, 0, 0)`,
            }}
            className={`w-full text-center transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
              }`}
          >
            <span className="block font-sans text-[23.5vw] sm:text-[22.8vw] font-medium tracking-[-0.055em] leading-[0.78] text-white select-none whitespace-nowrap">
              Safvra
            </span>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* LOWER FOOTER COLLABORATION & LINKS DIRECTORY                         */}
      {/* ==================================================================== */}
      <div className="relative z-20 max-w-[1480px] mx-auto px-6 sm:px-10 md:px-12 pt-14 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column (6 cols): Collaboration Headline + Outlined Pill CTA + Copyright */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[46px] font-normal tracking-[-0.035em] leading-[1.08] text-[#1A1A1A] max-w-[460px]">
                We’ll be glad to
                <br />
                collaborate with you.
              </h2>

              <div className="mt-7 sm:mt-8">
                <a
                  href="#consultation-form"
                  className="inline-flex h-11 sm:h-12 items-center justify-center rounded-full border border-[#5A5A5A] px-9 sm:px-11 text-[12px] sm:text-[12.5px] font-semibold tracking-[-0.01em] text-[#1A1A1A] transition-all duration-300 ease-out hover:bg-[#1A1A1A] hover:border-[#1A1A1A] hover:text-white"
                >
                  Get started
                </a>
              </div>
            </div>

            <p className="mt-14 lg:mt-20 text-[11px] font-normal tracking-[-0.01em] text-[#8E8E8B]">
              © Kinetic Studio 2025
            </p>
          </div>

          {/* Middle Column (3 cols): Location & Social */}
          <div className="lg:col-span-3 flex flex-col gap-10 sm:gap-12">
            {/* Location */}
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-normal tracking-[-0.025em] text-[#1A1A1A] mb-3.5">
                Location
              </h3>
              <p className="text-[12px] sm:text-[12.5px] leading-[1.55] text-[#4A4A4A] font-normal">
                Kyiv, Ukraine —
                <br />
                working worldwide
              </p>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-normal tracking-[-0.025em] text-[#1A1A1A] mb-3.5">
                Social
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 max-w-[220px] text-[12px] sm:text-[12.5px] font-normal text-[#4A4A4A]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  YouTube
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (3 cols): Contact & Helpful Links */}
          <div className="lg:col-span-3 flex flex-col gap-10 sm:gap-12">
            {/* Contact */}
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-normal tracking-[-0.025em] text-[#1A1A1A] mb-3.5">
                Contact
              </h3>
              <div className="flex flex-col gap-2 text-[12px] sm:text-[12.5px] font-normal text-[#4A4A4A]">
                <a
                  href="tel:+380670000000"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  +380 67 000 00 00
                </a>
                <a
                  href="mailto:hello@kineticstudio.com"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  hello@kineticstudio.com
                </a>
              </div>
            </div>

            {/* Helpful Links */}
            <div>
              <h3 className="text-[18px] sm:text-[20px] font-normal tracking-[-0.025em] text-[#1A1A1A] mb-3.5">
                Helpful Links
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 max-w-[220px] text-[12px] sm:text-[12.5px] font-normal text-[#4A4A4A]">
                <a
                  href="#about"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#services"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:text-[#FF5526] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

