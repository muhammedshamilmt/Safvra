"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const mainLinksLeft = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

const mainLinksRight = [
  { label: "Impact", href: "#stats" },
  { label: "Philosophy", href: "#statement" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
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
          new Promise((r) => setTimeout(r, 1100)),
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

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
    };
  }, [closeMenu]);

  return (
    <>
      {/* Minimal Floating Top Navbar (Left Star Logo + Right Equals Circle Button) */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8 pointer-events-none">
        {/* Left Top Logo */}
        <Link
          href="/"
          aria-label="Safvara Home"
          className="pointer-events-auto group relative flex items-center justify-center w-11 h-11 rounded-full transition-transform duration-500 ease-out hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-90"
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

      {/* Full 100vh Dropdown Menu Modal with Slow Smooth Top-Down Curtain Animation */}
      <dialog
        ref={dialogRef}
        aria-label="Full screen site navigation"
        className="nav-dialog fixed inset-0 z-50 m-0 h-dvh w-screen max-h-none max-w-none bg-white text-[#121212] p-0 border-none outline-none"
      >
        <div className="flex flex-col justify-between h-full w-full overflow-y-auto">
          {/* Top Bar inside Fullscreen Menu */}
          <div
            className={`flex items-center justify-between px-6 py-7 sm:px-12 sm:py-9 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
              ? "opacity-100 translate-y-0 delay-150"
              : "opacity-0 -translate-y-4 delay-0"
              }`}
          >
            <Link
              href="/"
              onClick={closeMenu}
              className="text-xs sm:text-[13px] font-bold tracking-[0.06em] uppercase text-[#121212] hover:opacity-70 transition-opacity"
            >
              SAFVRA STUDIO
            </Link>

            {/* Center Close Button */}
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#F4F4F4] text-[#121212] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#121212] hover:text-white hover:rotate-90 cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 2.5L13.5 13.5M13.5 2.5L2.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-xs sm:text-[13px] font-bold tracking-[0.06em] uppercase text-[#121212] hover:opacity-70 transition-opacity"
            >
              CONTACT
            </a>
          </div>

          {/* Center Main Navigation & Contact Action Buttons */}
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-16 md:px-24 py-8 flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
              {/* Left & Middle Columns: MAIN Navigation Links */}
              <div className="lg:col-span-8">
                <p
                  className={`text-[11px] font-medium uppercase tracking-[0.08em] text-[#9A9A9A] mb-6 sm:mb-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                    ? "opacity-100 translate-y-0 delay-200"
                    : "opacity-0 translate-y-4 delay-0"
                    }`}
                >
                  MAIN
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-2 sm:gap-y-3">
                  {/* Column 1 */}
                  <ul className="space-y-1 sm:space-y-2">
                    {mainLinksLeft.map((item, idx) => (
                      <li key={item.label} className="overflow-hidden">
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          style={{
                            transitionDelay: isOpen
                              ? `${240 + idx * 75}ms`
                              : `${(3 - idx) * 40}ms`,
                          }}
                          className={`group inline-flex items-center text-[40px] sm:text-[54px] xl:text-[64px] font-normal tracking-[-0.03em] leading-[1.12] text-[#121212] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-2.5 hover:text-[#FF5526] ${isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                            }`}
                        >
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Column 2 */}
                  <ul className="space-y-1 sm:space-y-2">
                    {mainLinksRight.map((item, idx) => (
                      <li key={item.label} className="overflow-hidden">
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          style={{
                            transitionDelay: isOpen
                              ? `${320 + idx * 75}ms`
                              : `${(3 - idx) * 40}ms`,
                          }}
                          className={`group inline-flex items-center text-[40px] sm:text-[54px] xl:text-[64px] font-normal tracking-[-0.03em] leading-[1.12] text-[#121212] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-2.5 hover:text-[#FF5526] ${isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                            }`}
                        >
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: CONTACT Actions */}
              <div
                className={`lg:col-span-4 lg:pl-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
                  ? "opacity-100 translate-y-0 delay-500"
                  : "opacity-0 translate-y-6 delay-0"
                  }`}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#9A9A9A] mb-6 sm:mb-8">
                  CONTACT
                </p>

                <div className="flex flex-col gap-3.5 max-w-[270px]">
                  <a
                    href="#consultation-form"
                    onClick={closeMenu}
                    className="flex h-12 sm:h-13 w-full items-center justify-center bg-[#0F0F0F] px-6 text-xs sm:text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#262626] active:scale-[0.99]"
                  >
                    Book A Consultation
                  </a>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="flex h-12 sm:h-13 w-full items-center justify-center bg-[#FF5526] px-6 text-xs sm:text-[13px] font-medium text-white transition-all duration-300 hover:bg-[#e04318] active:scale-[0.99]"
                  >
                    Start Your Project
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar inside Fullscreen Menu */}
          <div
            className={`border-t border-[#ECECEC] px-6 py-6 sm:px-12 sm:py-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen
              ? "opacity-100 translate-y-0 delay-500"
              : "opacity-0 translate-y-4 delay-0"
              }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              {/* Left: QUICK CONTACT Social Icons */}
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#9A9A9A] mb-3">
                  QUICK CONTACT
                </p>
                <div className="flex items-center gap-2">
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center border border-[#E5E5E5] text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#121212] hover:text-white"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  {/* X / Twitter */}
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X"
                    className="flex h-9 w-9 items-center justify-center border border-[#E5E5E5] text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#121212] hover:text-white"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center border border-[#E5E5E5] text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#121212] hover:text-white"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="flex h-9 w-9 items-center justify-center border border-[#E5E5E5] text-[#121212] transition-colors hover:border-[#121212] hover:bg-[#121212] hover:text-white"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Center: ADDRESS */}
              <div className="sm:mx-auto">
                <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-[#9A9A9A] mb-2">
                  ADDRESS
                </p>
                <address className="not-italic text-xs leading-[1.6] font-medium text-[#121212]">
                  123 Main St,
                  <br />
                  San Francisco,
                  <br />
                  CA 94105
                </address>
              </div>

              {/* Right: Brand Wordmark */}
              <div className="self-start sm:self-end">
                <span className="text-base sm:text-lg font-extrabold tracking-[-0.03em] uppercase text-[#121212]">
                  SAFVRA INTERIORS<sup className="text-[9px] font-semibold ml-0.5">®</sup>
                </span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
