"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  bgImage: string;
  bgAlt: string;
  mockupType: "music-dark" | "workspace-light" | "fitness-mobile" | "artist-stage";
}

const PROJECTS: ProjectItem[] = [
  {
    id: "soundscape-ai",
    title: "Sunlit Loft Residence",
    category: "Residential Fit-Out & Styling",
    year: "2025",
    bgImage: "/landing/projects/image-1.png",
    bgAlt: "Warm sunlit double-height living room interior",
    mockupType: "music-dark",
  },
  {
    id: "cospace-platform",
    title: "Pavilion Garden Villa",
    category: "Bespoke Indoor-Outdoor Living",
    year: "2024",
    bgImage: "/landing/projects/image-2.png",
    bgAlt: "Open pavilion living room overlooking garden and pool",
    mockupType: "workspace-light",
  },
  {
    id: "pulse-athletics",
    title: "Oculus Sanctuary Atrium",
    category: "Biophilic Architecture & Fit-Out",
    year: "2024",
    bgImage: "/landing/projects/image-3.png",
    bgAlt: "Architectural atrium with circular skylight and indoor garden",
    mockupType: "fitness-mobile",
  },
  {
    id: "clairo-tour",
    title: "Veranda Executive Lounge",
    category: "Turnkey Luxury Interior",
    year: "2023",
    bgImage: "/landing/projects/image-4.png",
    bgAlt: "Contemporary luxury living room with floor-to-ceiling glass",
    mockupType: "artist-stage",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [cardProgress, setCardProgress] = useState<number[]>([0, 0, 0, 0]);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const updateCardsOnScroll = () => {
      const vh = window.innerHeight;

      if (sectionRef.current) {
        const secRect = sectionRef.current.getBoundingClientRect();
        if (secRect.top < vh * 0.85) {
          setHeaderVisible(true);
        }
      }

      const nextProgress = cardRefs.current.map((cardEl) => {
        if (!cardEl) return 0;
        const rect = cardEl.getBoundingClientRect();
        // Start revealing when card top enters 95% of viewport height
        // Reach full reveal (1.0) when card top reaches 38% of viewport height
        const start = vh * 0.96;
        const end = vh * 0.36;
        const raw = (start - rect.top) / (start - end);
        return Math.max(0, Math.min(1, raw));
      });

      setCardProgress(nextProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCardsOnScroll);
    };

    updateCardsOnScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-white text-[#121212] pb-24 sm:pb-32 lg:pb-40 px-6 sm:px-10 md:px-12 overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto">
        {/* Top Section Header Row: "Projects" Left & "(2023 - 2025)" Right */}
        <div
          className={`flex items-baseline justify-between border-b border-black/[0.06] pb-6 sm:pb-8 mb-8 sm:mb-10 transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${headerVisible
            ? "opacity-100 translate-y-0 blur-none"
            : "opacity-0 translate-y-6 blur-[6px]"
            }`}
        >
          <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold tracking-[-0.035em] leading-none text-[#1A1A1A]">
            Projects
          </h2>

          <span className="font-mono text-[12px] sm:text-[13.5px] font-normal tracking-[0.04em] text-[#8E8D8A]">
            (2023 – 2025)
          </span>
        </div>

        {/* 2x2 Bento Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {PROJECTS.map((project, index) => {
            const p = cardProgress[index] ?? 0;
            // Smooth cubic easing for scroll-driven entrance & parallax
            const eased = p * p * (3 - 2 * p);
            const cardTranslateY = (1 - eased) * 44;
            const cardScale = 0.94 + eased * 0.06;
            const cardOpacity = Math.min(1, 0.15 + eased * 0.85);
            const cardBlur = Math.max(0, (1 - Math.min(1, eased * 1.35)) * 8);
            const innerParallaxY = (1 - eased) * 26;
            const bgScale = 1.12 - eased * 0.08;

            return (
              <article
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                style={{
                  opacity: cardOpacity,
                  transform: `translate3d(0, ${cardTranslateY.toFixed(1)}px, 0) scale(${cardScale.toFixed(4)})`,
                  filter: `blur(${cardBlur.toFixed(2)}px)`,
                }}
                className="group relative aspect-[16/11] w-full overflow-hidden rounded-[20px] sm:rounded-[24px] bg-[#181818] cursor-pointer will-change-[transform,opacity,filter] shadow-[0_12px_36px_rgba(0,0,0,0.06)] transition-shadow duration-500 hover:shadow-[0_26px_65px_rgba(0,0,0,0.16)]"
              >
                {/* Monochrome B&W Photographic Backdrop with Scroll & Hover Zoom */}
                <div
                  style={{
                    transform: `scale(${bgScale.toFixed(4)})`,
                  }}
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                >
                  <img
                    src={project.bgImage}
                    alt={project.bgAlt}
                    loading="lazy"
                    width={900}
                    height={620}
                    className="h-full w-full object-cover object-center"
                  />
                  {/* Subtle radial vignette for centered UI contrast */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.42)_100%)]" />
                </div>

                {/* Centered Floating UI Mockup Container with Scroll Parallax & Hover Lift
                <div
                  style={{
                    transform: `translate3d(0, ${innerParallaxY.toFixed(1)}px, 0)`,
                  }}
                  className="relative z-10 flex h-full w-full items-center justify-center p-6 sm:p-10 md:p-12 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
                >
                  {project.mockupType === "music-dark" && <MusicDarkMockup />}
                  {project.mockupType === "workspace-light" && (
                    <WorkspaceLightMockup />
                  )}
                  {project.mockupType === "fitness-mobile" && (
                    <FitnessMobileMockup />
                  )}
                  {project.mockupType === "artist-stage" && <ArtistStageMockup />}
                </div> */}

                {/* Subtle Bottom-Left Hover Caption Pill */}
                <div className="pointer-events-none absolute bottom-4 left-4 sm:bottom-5 sm:left-5 z-20 flex items-center gap-2.5 rounded-full bg-[#121212]/85 backdrop-blur-md px-4 py-2 text-white opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5526]" />
                  <span className="text-[12px] sm:text-[13px] font-medium tracking-[-0.01em]">
                    {project.title}
                  </span>
                  <span className="text-[11px] text-white/60">
                    — {project.category}
                  </span>
                </div>

                {/* Top-Right Hover Quick Action Arrow */}
                <div className="pointer-events-none absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212] shadow-lg opacity-0 translate-y-2 scale-90 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 1 Mockup: Dark Music Streaming App UI (Matches Top-Left Reference)   */
/* -------------------------------------------------------------------------- */
function MusicDarkMockup() {
  const portraits = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
      tint: "from-red-600/70 to-orange-500/40",
    },
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
      tint: "from-amber-500/70 to-yellow-400/40",
    },
    {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop",
      tint: "from-pink-600/70 to-fuchsia-500/40",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
      tint: "from-emerald-900/60 to-zinc-800/60",
    },
  ];

  return (
    <div className="w-[82%] max-w-[490px] aspect-[16/10.5] rounded-[10px] sm:rounded-[12px] bg-[#111113] text-white p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.65)] border border-white/[0.08] flex flex-col justify-between overflow-hidden text-[8px] sm:text-[10px]">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="font-semibold tracking-tight text-white/90 text-[9px] sm:text-[10px]">
            SoundScape
          </span>
        </div>
        <div className="h-3.5 w-28 sm:w-36 rounded-full bg-white/[0.06] px-2 flex items-center text-[7px] text-white/40">
          Search tracks, artists...
        </div>
        <div className="flex items-center gap-1">
          <span className="h-3.5 w-3.5 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Body Grid: Left Sidebar + Main Content */}
      <div className="grid grid-cols-12 gap-3 flex-1 pt-2.5 overflow-hidden">
        {/* Left Mini Nav */}
        <div className="col-span-3 flex flex-col justify-between border-r border-white/[0.05] pr-2 text-[7px] sm:text-[8px] text-white/50">
          <div className="space-y-1.5">
            <div className="text-white font-medium flex items-center gap-1">
              <span className="h-1 w-1 rounded-full bg-[#FF5526]" /> Home
            </div>
            <div>Discover</div>
            <div>Radio</div>
            <div>Albums</div>
            <div>Podcasts</div>
          </div>
          <div className="space-y-1 text-white/35 pt-2 border-t border-white/[0.05]">
            <div> Library</div>
            <div>Favourites</div>
          </div>
        </div>

        {/* Right Main Content: 4 Colorful Artist Cards + Tracklist */}
        <div className="col-span-9 flex flex-col justify-between">
          <div>
            <p className="text-[7px] sm:text-[8px] text-white/60 mb-1.5 font-medium">
              Top Featured Artists
            </p>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {portraits.map((item, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-[5px] overflow-hidden bg-zinc-800"
                >
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${item.tint} mix-blend-color`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tracklist Rows */}
          <div className="space-y-1.5 mt-2">
            {[
              { name: "Neon Horizon", artist: "Klara V", time: "03:24" },
              { name: "Velvet Echoes", artist: "Sora AI", time: "02:51" },
              { name: "Midnight Pulse", artist: "Allam Studio", time: "04:08" },
            ].map((track, idx) => (
              <div
                key={track.name}
                className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-1 text-[7px] sm:text-[8px]"
              >
                <div className="flex items-center gap-2">
                  <span className="h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-[#FF5526] to-purple-600 shrink-0" />
                  <div>
                    <p className="text-white/90 font-medium leading-none">
                      {track.name}
                    </p>
                    <p className="text-white/40 text-[6px] mt-0.5">
                      {track.artist}
                    </p>
                  </div>
                </div>
                {/* Fake Waveform Bar */}
                <div className="hidden sm:flex items-center gap-0.5">
                  {[3, 6, 4, 8, 5, 7, 3, 5, 8, 4].map((h, barIdx) => (
                    <span
                      key={barIdx}
                      style={{ height: `${h}px` }}
                      className={`w-[1.5px] rounded-full ${idx === 0 && barIdx < 5 ? "bg-[#FF5526]" : "bg-white/20"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-white/40 tabular-nums">{track.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 2 Mockup: Clean White SaaS Workspace Dashboard (Matches Top-Right)   */
/* -------------------------------------------------------------------------- */
function WorkspaceLightMockup() {
  const rooms = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=260&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=260&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=260&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=260&auto=format&fit=crop",
  ];

  return (
    <div className="w-[82%] max-w-[490px] aspect-[16/10.5] rounded-[10px] sm:rounded-[12px] bg-white text-[#121212] p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-black/[0.06] flex flex-col justify-between overflow-hidden text-[8px] sm:text-[10px]">
      <div className="grid grid-cols-12 gap-3 h-full">
        {/* Left Sidebar */}
        <div className="col-span-3 border-r border-black/[0.06] pr-2 flex flex-col justify-between">
          <div>
            <p className="font-bold text-[9px] sm:text-[10px] tracking-tight leading-tight mb-3">
              Co
              <br />
              Space
            </p>
            <div className="space-y-1.5 text-[7px] sm:text-[8px] text-black/50">
              <div className="rounded bg-black/[0.05] px-1.5 py-1 text-black font-medium">
                Home
              </div>
              <div className="px-1.5">Bookings</div>
              <div className="px-1.5">Locations</div>
              <div className="px-1.5">Community</div>
            </div>
          </div>
          <div className="text-[6.5px] text-black/40">● Support online</div>
        </div>

        {/* Main Workspace Content */}
        <div className="col-span-9 flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[6.5px] text-black/40">Hi Sarah, welcome</p>
              <h4 className="text-[11px] sm:text-[13px] font-semibold tracking-tight text-[#121212]">
                Welcome back
              </h4>
            </div>
            <div className="flex items-center gap-1">
              <span className="h-3.5 w-3.5 rounded-full bg-[#FF5526]/15 text-[#FF5526] flex items-center justify-center text-[7px] font-bold">
                S
              </span>
            </div>
          </div>

          {/* Upcoming Bookings Schedule */}
          <div className="rounded-md border border-black/[0.06] p-2 bg-[#FAFAFA]">
            <div className="flex items-center justify-between text-[7px] text-black/60 mb-1">
              <span className="font-medium text-[#FF5526]">Tue, Nov 18</span>
              <span>2 Bookings confirmed</span>
            </div>
            <div className="space-y-1 text-[6.5px] text-black/70">
              <div className="flex justify-between">
                <span>Studio A — Daylight Loft</span>
                <span className="text-emerald-600 font-medium">Active</span>
              </div>
              <div className="flex justify-between">
                <span>Boardroom 04 — SoHo</span>
                <span className="text-black/40">2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Last Visited Spaces Row */}
          <div>
            <p className="text-[7px] font-medium text-black/60 mb-1">
              Last visited
            </p>
            <div className="grid grid-cols-4 gap-1.5">
              {rooms.map((src, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="aspect-[16/10] rounded-[4px] overflow-hidden bg-zinc-100">
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-[6px] text-black/60 truncate">
                    Studio 0{i + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 3 Mockup: Dual iPhone Fitness / Activity Screens (Bottom-Left)       */
/* -------------------------------------------------------------------------- */
function FitnessMobileMockup() {
  return (
    <div className="relative flex items-center justify-center gap-2 sm:gap-3 h-full py-2">
      {/* Left Phone Screen */}
      <div className="w-[125px] sm:w-[155px] aspect-[9/18.5] rounded-[18px] sm:rounded-[22px] bg-white text-[#121212] p-2.5 sm:p-3 shadow-[0_22px_50px_rgba(0,0,0,0.5)] border border-black/[0.08] flex flex-col justify-between -translate-y-2 z-20">
        <div>
          <div className="flex items-center justify-between text-[6px] text-black/40 mb-1.5">
            <span>9:41</span>
            <span className="h-1.5 w-6 rounded-full bg-black/15" />
            <span>100%</span>
          </div>
          <p className="text-[7.5px] sm:text-[8.5px] font-bold tracking-tight uppercase text-[#121212] mb-2">
            Latest News
          </p>

          {/* Feed Items */}
          <div className="space-y-2">
            <div className="flex gap-1.5 items-center">
              <div className="h-7 w-7 rounded bg-zinc-200 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop"
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[6.5px] font-semibold leading-tight">
                  HIIT Endurance Peak
                </p>
                <p className="text-[5.5px] text-black/45">12 min • Pro Plan</p>
              </div>
            </div>

            <div className="flex gap-1.5 items-center">
              <div className="h-7 w-7 rounded bg-zinc-200 overflow-hidden shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=120&auto=format&fit=crop"
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-[6.5px] font-semibold leading-tight">
                  Core &amp; Mobility AI
                </p>
                <p className="text-[5.5px] text-black/45">18 min • Daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Promo Card inside Left Phone */}
        <div className="rounded-lg bg-[#FFF4F0] p-2 border border-[#FF5526]/15">
          <span className="inline-block rounded-full bg-[#FF5526] px-1.5 py-0.5 text-[5px] font-semibold text-white mb-1">
            PRO TIP
          </span>
          <p className="text-[6px] font-medium text-[#121212] leading-snug">
            Personalized recovery metrics synced with your wearable.
          </p>
        </div>
      </div>

      {/* Right Phone Screen (Progress Gauge) */}
      <div className="w-[125px] sm:w-[155px] aspect-[9/18.5] rounded-[18px] sm:rounded-[22px] bg-white text-[#121212] p-2.5 sm:p-3 shadow-[0_22px_50px_rgba(0,0,0,0.45)] border border-black/[0.08] flex flex-col justify-between translate-y-3 z-10">
        <div className="flex items-center justify-between text-[6px] text-black/40">
          <span>9:41</span>
          <span className="h-1.5 w-6 rounded-full bg-black/15" />
          <span>5G</span>
        </div>

        <div className="text-center my-auto">
          <p className="text-[7px] font-bold tracking-wider uppercase text-black/50 mb-2">
            TODAY
          </p>
          {/* Circular Progress Ring SVG */}
          <div className="relative mx-auto h-20 w-20 sm:h-24 sm:w-24 flex items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="#F0F0F0"
                strokeWidth="7"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="#0047FF"
                strokeWidth="7"
                strokeDasharray="240"
                strokeDashoffset="65"
                strokeLinecap="round"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                stroke="#FF5526"
                strokeWidth="7"
                strokeDasharray="240"
                strokeDashoffset="195"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[12px] sm:text-[14px] font-bold tracking-tight text-[#121212]">
                1,500
              </span>
              <span className="text-[5.5px] text-black/40 uppercase">
                kcal burned
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-3 gap-1 pt-2 border-t border-black/[0.05] text-center">
          <div>
            <p className="text-[6.5px] font-bold text-[#121212]">8.4k</p>
            <p className="text-[5px] text-black/40">Steps</p>
          </div>
          <div>
            <p className="text-[6.5px] font-bold text-[#FF5526]">48m</p>
            <p className="text-[5px] text-black/40">Zone 4</p>
          </div>
          <div>
            <p className="text-[6.5px] font-bold text-[#0047FF]">94%</p>
            <p className="text-[5px] text-black/40">Score</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card 4 Mockup: "Clairo" Artist Banner & Tour UI (Bottom-Right Reference)  */
/* -------------------------------------------------------------------------- */
function ArtistStageMockup() {
  return (
    <div className="w-[82%] max-w-[490px] aspect-[16/10.5] rounded-[10px] sm:rounded-[12px] bg-[#0B0B10] text-white shadow-[0_25px_60px_rgba(0,0,0,0.65)] border border-white/[0.08] flex flex-col justify-between overflow-hidden text-[8px] sm:text-[10px]">
      {/* Upper Purple-Blue Stage Hero Banner */}
      <div className="relative h-[52%] w-full overflow-hidden bg-gradient-to-r from-[#1A1245] via-[#3B27BA] to-[#191536] p-3.5 sm:p-5 flex flex-col justify-between">
        {/* Stage Performer Image Blend */}
        <img
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop"
          alt="Stage performer"
          loading="lazy"
          className="pointer-events-none absolute right-0 top-0 h-full w-[62%] object-cover object-center opacity-75 mix-blend-lighten"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F0C24] via-[#1E1654]/60 to-transparent" />

        <div className="relative z-10 flex items-center gap-1.5 text-[7px] text-white/70">
          <span className="h-2 w-2 rounded-full bg-indigo-400" />
          <span>Verified Artist Profile</span>
        </div>

        <div className="relative z-10">
          <h4 className="text-[16px] sm:text-[22px] font-bold tracking-[-0.03em] text-white leading-none">
            Clairo
          </h4>
          <p className="text-[6.5px] sm:text-[7.5px] text-white/65 mt-1">
            Charm World Tour • Generative Stage Visuals
          </p>
        </div>
      </div>

      {/* Lower Track / Tour Schedule Table */}
      <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between bg-[#0B0B10]">
        <div className="space-y-1.5">
          {[
            { title: "Nomad — Live Visual Cut", city: "Los Angeles", plays: "1,420,890" },
            { title: "Sexy to Someone", city: "New York", plays: "2,980,112" },
            { title: "Juna (AI Stage Edit)", city: "London", plays: "1,890,400" },
          ].map((row) => (
            <div
              key={row.title}
              className="flex items-center justify-between border-b border-white/[0.05] pb-1 text-[7px] sm:text-[8px]"
            >
              <span className="font-medium text-white/90 w-2/5 truncate">
                {row.title}
              </span>
              <span className="text-white/40 w-1/4">{row.city}</span>
              <span className="text-white/45 tabular-nums">{row.plays}</span>
              <span className="rounded-full bg-indigo-500/20 text-indigo-300 px-1.5 py-0.5 text-[6px]">
                Play
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[6.5px] text-white/40 pt-1">
          <span>Web Audio &amp; Tour Experience</span>
          <span className="rounded bg-[#3B27BA] px-2 py-0.5 text-white font-medium">
            Explore Project
          </span>
        </div>
      </div>
    </div>
  );
}

