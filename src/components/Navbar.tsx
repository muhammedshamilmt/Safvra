"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const mainNavLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/#projects" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
];

let supportsDisplayTransition: boolean | undefined;

function canTransitionDisplay(): boolean {
  if (typeof document === "undefined") return false;
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
  const probe = document.createElement("div");
  probe.style.cssText =
    "transition: display 1s allow-discrete !important; display: block;";
  document.body.appendChild(probe);
  void getComputedStyle(probe).display;
  probe.style.display = "none";
  supportsDisplayTransition = getComputedStyle(probe).display === "block";
  probe.remove();
  return supportsDisplayTransition;
}

function supportsTopLayerExit(): boolean {
  if (typeof window === "undefined") return false;
  return Boolean(
    window.CSS?.supports?.("overlay", "auto") && canTransitionDisplay()
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.removeAttribute("data-closing");
    if (!dialog.open) {
      dialog.showModal();
    }
    setIsOpen(true);
  };

  const closeMenu = useCallback(async () => {
    const dialog = dialogRef.current;
    if (!dialog || !dialog.open) return;

    setIsOpen(false);

    if (!supportsTopLayerExit()) {
      dialog.setAttribute("data-closing", "");
      const animations = dialog.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 600)),
        ]);
      }
      if (!dialog.hasAttribute("data-closing")) return;
      dialog.removeAttribute("data-closing");
    }

    dialog.close();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (event: Event) => {
      event.preventDefault();
      void closeMenu();
    };

    const handleClose = () => {
      dialog.removeAttribute("data-closing");
      setIsOpen(false);
    };

    // Close when clicking directly on the backdrop outside the dialog card
    const handleClick = (event: MouseEvent) => {
      if (event.target === dialog) {
        void closeMenu();
      }
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("click", handleClick);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("click", handleClick);
    };
  }, [closeMenu]);

  return (
    <>
      {/* Minimal Floating Top Navbar (Left Star Logo + Right Hamburger Button) */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8 pointer-events-none">
        {/* Left Top Logo */}
        <Link
          href="/"
          aria-label="Safvara Home"
          className="pointer-events-auto mix-blend-difference group relative flex items-center justify-center w-11 h-11 rounded-full transition-transform duration-500 ease-out hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90"
          >
            <path
              d="M4 4C12.5 11.5 12.5 20.5 4 28C11.5 19.5 20.5 19.5 28 28C19.5 20.5 19.5 11.5 28 4C20.5 12.5 11.5 12.5 4 4Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        {/* Right Top Hamburger Button (White circle with two clean horizontal lines) */}
        <button
          type="button"
          onClick={openMenu}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="pointer-events-auto group flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-white text-[#121212] shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)] active:scale-95 cursor-pointer"
        >
          <span className="flex flex-col items-center justify-center gap-[5px] w-4">
            <span className="h-[1.8px] w-full bg-[#121212] rounded-full transition-transform duration-300 group-hover:translate-x-0.5" />
            <span className="h-[1.8px] w-full bg-[#121212] rounded-full transition-transform duration-300 group-hover:-translate-x-0.5" />
          </span>
        </button>
      </header>

      {/* Floating Right-Top Sidebar Menu Card (Pure white, spacious, our #FF5526 brand accent, no backdrop blur, pinned to top right) */}
      <dialog
        ref={dialogRef}
        aria-label="Site navigation"
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          bottom: "auto",
          left: "auto",
          margin: "0 0 auto auto",
        }}
        className="nav-dialog z-50 h-fit max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] sm:w-[450px] max-w-[460px] rounded-[28px] sm:rounded-[32px] bg-white text-[#121212] shadow-[0_28px_80px_rgba(0,0,0,0.18)] border border-black/[0.08] outline-none overflow-y-auto"
      >
        <div className="flex flex-col justify-between h-full p-7 sm:p-9 gap-6 sm:gap-7">
          {/* Header Row: "Menu" title + "×" round close button (Get Started removed per request) */}
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.07]">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5526]" />
              <span className="text-[17px] sm:text-[18px] font-semibold text-[#111111] tracking-[-0.02em]">
                Menu
              </span>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="flex h-9 w-9 sm:h-9.5 sm:w-9.5 items-center justify-center rounded-full bg-[#F4F4F2] text-[#111111] transition-all duration-300 hover:bg-[#121212] hover:text-white hover:rotate-90 active:scale-95 cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3L13 13M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Explore Links Section (Scaled up and elegant) */}
          <div className="flex flex-col">
            <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#8E8E8B] mb-2.5 block">
              EXPLORE
            </span>

            <ul className="space-y-1 sm:space-y-1.5">
              {mainNavLinks.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between py-1.5 sm:py-2 text-[22px] sm:text-[26px] font-normal tracking-[-0.03em] text-[#111111] transition-all duration-200 hover:translate-x-2 hover:text-[#FF5526]"
                  >
                    <span>{item.label}</span>
                    <span className="text-[12px] font-mono text-[#AAAAAA] opacity-0 -translate-x-1.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#FF5526]">
                      0{idx + 1} →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section + Bottom Teaser Card */}
          <div className="pt-4 border-t border-black/[0.07] flex flex-col gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#8E8E8B] mb-2.5 block">
                CONNECT
              </span>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12.5px] sm:text-[13.5px] font-medium text-[#444444]">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5526] transition-colors flex items-center gap-1.5"
                >
                  <span className="font-bold">𝕏</span> <span>Twitter</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5526] transition-colors flex items-center gap-1.5"
                >
                  <span>@</span> <span>Instagram</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FF5526] transition-colors flex items-center gap-1.5"
                >
                  <span className="font-bold text-[9px] border border-current px-0.5 rounded-[2px] leading-tight">
                    in
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Bottom Rounded Teaser Image Card */}
            <Link
              href="/services"
              onClick={closeMenu}
              className="relative aspect-[2.4/1] w-full rounded-[18px] overflow-hidden bg-[#1A1A1A] group block shadow-sm border border-black/[0.04]"
            >
              <img
                src="/landing/cards-imgs/image-2.png"
                alt="Safvara Studio interior preview"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-center justify-between">
                <span className="text-[12.5px] sm:text-[13px] font-medium tracking-[-0.01em] text-white">
                  Crafted spaces, made timeless
                </span>
                <span className="text-[12px] font-semibold text-[#FF5526] transition-transform group-hover:translate-x-1">
                  Explore →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
