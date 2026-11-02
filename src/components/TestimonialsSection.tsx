"use client";

import { useEffect, useRef, useState } from "react";

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "emma-rodriguez",
    quote:
      '"LUXURA completely transformed my style! The AI recommendations are spot-on, and I\'ve discovered brands I never would have found otherwise."',
    name: "Emma Rodriguez",
    role: "Fashion Blogger",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "sarah-chen",
    quote:
      '"Finally, a platform that truly understands my aesthetic. The personalized curation saves me hours of browsing and always delivers amazing pieces."',
    name: "Sarah Chen",
    role: "Creative Director",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "maria-santos",
    quote:
      '"The quality of recommendations is incredible. Every piece I\'ve ordered through LUXURA has become a staple in my wardrobe."',
    name: "Maria Santos",
    role: "Style Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "jessica-park",
    quote:
      '"LUXURA\'s AI knows my style better than I do! It\'s like having a personal stylist who\'s always available and never misses the mark."',
    name: "Jessica Park",
    role: "Fashion Influencer",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [cardProgress, setCardProgress] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    let rafId = 0;

    const updateOnScroll = () => {
      const vh = window.innerHeight;

      if (sectionRef.current) {
        const secRect = sectionRef.current.getBoundingClientRect();
        if (secRect.top < vh * 0.85) {
          setHeaderVisible(true);
        }
      }

      const nextProgress = cardRefs.current.map((cardEl, idx) => {
        if (!cardEl) return 0;
        const rect = cardEl.getBoundingClientRect();
        // Stagger start threshold slightly per card column
        const start = vh * (0.96 - idx * 0.03);
        const end = vh * 0.42;
        const raw = (start - rect.top) / (start - end);
        return Math.max(0, Math.min(1, raw));
      });

      setCardProgress(nextProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateOnScroll);
    };

    updateOnScroll();
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
      id="testimonials"
      ref={sectionRef}
      className="relative w-full bg-white text-[#121212] py-24 sm:py-32 lg:py-40 px-6 sm:px-10 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-[1380px] mx-auto">
        {/* Top Centered Header Block */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          {/* "TESTIMONIALS" Pill Badge */}
          <div
            className={`inline-flex items-center justify-center rounded-full bg-[#F2F2F2] px-6 py-2.5 mb-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${headerVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-4 blur-[4px]"
              }`}
          >
            <span className="text-[11px] sm:text-[11.5px] font-medium uppercase  text-[#555555]">
              TESTIMONIALS
            </span>
          </div>

          {/* Main Heading: "What our clients say" */}
          <h2
            style={{
              transitionDelay: headerVisible ? "100ms" : "0ms",
            }}
            className={`text-[36px] sm:text-[48px] lg:text-[54px] font-normal tracking-[-0.03em] leading-[1.12] text-[#121212] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${headerVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-6 blur-[6px]"
              }`}
          >
            What our clients say
          </h2>

          {/* Subtitle */}
          <p
            style={{
              transitionDelay: headerVisible ? "200ms" : "0ms",
            }}
            className={`mt-4 max-w-[580px] text-[15px] sm:text-[16.5px] leading-[1.55] tracking-[-0.01em] text-[#686868] font-normal transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${headerVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-6 blur-[6px]"
              }`}
          >
            Hear from fashion industry leaders who trust LUXURA STUDIO for their
            most important moments
          </p>
        </div>

        {/* 4-Column Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {TESTIMONIALS.map((item, idx) => {
            const p = cardProgress[idx] ?? 0;
            const eased = p * p * (3 - 2 * p);
            const translateY = (1 - eased) * 42;
            const scale = 0.94 + eased * 0.06;
            const opacity = Math.min(1, 0.15 + eased * 0.85);
            const blur = Math.max(0, (1 - Math.min(1, eased * 1.4)) * 8);

            return (
              <article
                key={item.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                style={{
                  opacity,
                  transform: `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`,
                  filter: `blur(${blur.toFixed(2)}px)`,
                }}
                className="group relative flex flex-col justify-between min-h-[380px] sm:min-h-[420px] xl:min-h-[450px] rounded-[24px] bg-[#F5F5F5] border border-black/[0.03] p-7 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2.5 hover:bg-white hover:border-black/[0.08] hover:shadow-[0_22px_50px_rgba(0,0,0,0.07)] will-change-[transform,opacity,filter]"
              >
                {/* Top Quote Text */}
                <blockquote className="text-[14.5px] sm:text-[15.5px] leading-[1.6] tracking-[-0.01em] text-[#555555] font-normal transition-colors duration-300 group-hover:text-[#222222]">
                  {item.quote}
                </blockquote>

                {/* Bottom Author Profile Row */}
                <div className="flex items-center gap-3.5 pt-8 mt-auto">
                  <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full bg-[#D8D8D8] ring-2 ring-transparent transition-all duration-300 group-hover:ring-[#FF5526]/40">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      loading="lazy"
                      width={44}
                      height={44}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="text-[14px] sm:text-[15px] font-semibold tracking-[-0.015em] text-[#1E1E1E] leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] font-normal tracking-[-0.01em] text-[#808080] mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

