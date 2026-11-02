"use client";

import { useState } from "react";

const HERO_DEMO_BG = "/landing/herobg.png";
const BIO_AVATAR_SRC = "/landing/herobg.png";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 2;
    const y = (e.clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url('${HERO_DEMO_BG}')`,
      }}
      className="relative min-h-dvh w-full overflow-hidden bg-[#E2E1DF] bg-cover bg-center bg-no-repeat flex flex-col justify-between select-none"
    >
      {/* Full-Section Background Image Layer with Subtle Parallax & High LCP Priority */}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -6}px, 0) scale(1.04)`,
        }}
        className="pointer-events-none absolute inset-0 z-0 transition-transform duration-700 ease-out"
      >
        <img
          src={HERO_DEMO_BG}
          alt="Hero background"
          fetchPriority="high"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />
        {/* Subtle atmospheric gradient so foreground text & giant "Creative" wordmark stay crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/15" />
      </div>

      {/* Giant Oversized White Background Typography ("Creative") */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-5%] sm:bottom-[-7.5%] left-0 right-0 z-10 flex items-end justify-start overflow-hidden pl-2 sm:pl-6"
      >
        <div
          style={{
            transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -6}px, 0)`,
          }}
          className="transition-transform duration-700 ease-out"
        >
          <span className="block font-sans text-[33vw] sm:text-[30vw] lg:text-[28.5vw] font-medium tracking-[-0.055em] leading-[0.78] text-white whitespace-nowrap">
            Creative
          </span>
        </div>
      </div>

      {/* Foreground Interactive Layer (Left Headline + Pill CTA & Bottom-Right Bio Card) */}
      <div className="relative z-30 flex-1 w-full max-w-[1480px] mx-auto px-6 sm:px-10 md:px-12 pt-28 pb-7 sm:pb-10 flex flex-col justify-between pointer-events-none">
        {/* Left Upper-Middle Headline + Dual Pill CTA */}
        <div className="my-auto pt-4 sm:pt-8 max-w-[340px] sm:max-w-[390px] pointer-events-auto">
          <h1 className="animate-fade-up text-[22px] sm:text-[26px] lg:text-[28px] font-medium tracking-[-0.028em] leading-[1.26] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            I craft high-impact AI photo &amp; video that help brands stand out.
          </h1>

          {/* Dual Pill Button + Orange Circle Arrow Button */}
          <div className="animate-fade-up-delay-1 mt-7 sm:mt-8 inline-flex items-center gap-2.5 group">
            <a
              href="#consultation"
              className="inline-flex h-12 sm:h-13.5 items-center justify-center rounded-full bg-white px-6 sm:px-7 text-[13.5px] sm:text-[14.5px] font-medium tracking-[-0.015em] text-[#121212] shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-all duration-300 ease-out group-hover:bg-[#121212] group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.24)]"
            >
              Book a consultation
            </a>

            <a
              href="#consultation"
              aria-label="Book a consultation"
              className="inline-flex h-12 w-12 sm:h-13.5 sm:w-13.5 items-center justify-center rounded-full bg-[#FF5526] text-white shadow-[0_6px_20px_rgba(255,85,38,0.38)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-45 group-hover:bg-[#ff3d08]"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom-Right Floating Bio Pill Card */}
        <div className="w-full flex justify-end mt-auto pt-10 pointer-events-auto">
          <div
            style={{
              transform: `translate3d(${mousePos.x * -6}px, ${mousePos.y * -5}px, 0)`,
            }}
            className="animate-fade-up-delay-2 transition-transform duration-500 ease-out"
          >
            <div className="animate-float-card flex items-center gap-4 sm:gap-5 rounded-[20px] bg-white p-2.5 sm:p-3 pr-5 sm:pr-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] border border-black/[0.03] max-w-[420px] sm:max-w-[450px] transition-shadow duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
              {/* Thumbnail Avatar Image */}
              <div className="relative h-[74px] w-[74px] sm:h-[82px] sm:w-[82px] shrink-0 overflow-hidden rounded-[14px] bg-[#181818]">
                <img
                  src={BIO_AVATAR_SRC}
                  alt="Allam portrait thumbnail"
                  width={82}
                  height={82}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#FF5526]/45 via-[#FF5526]/10 to-transparent mix-blend-color" />
              </div>

              {/* Bio Copy with Orange Dot Indicator */}
              <p className="text-[12.5px] sm:text-[13.5px] leading-[1.42] tracking-[-0.015em] text-[#222222] font-normal">
                <span
                  aria-hidden="true"
                  className="inline-block h-1.5 w-1.5 rounded-full bg-[#FF5526] align-middle mr-1.5 -mt-0.5"
                />
                <span className="font-medium text-[#121212]">
                  Hey, I&apos;m Allam.
                </span>{" "}
                I believe great visuals don&apos;t happen by accident—they&apos;re
                made. And that&apos;s exactly what I do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
