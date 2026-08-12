import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface NavItem {
  label: string;
  href: string;
}

interface Props {
  nav: NavItem[];
  linkedin: string;
}

/**
 * Site menu: full-viewport overlay on mobile/tablet, right-side drawer on
 * desktop (lg and up). Both slide in from the right.
 */
export default function MenuOverlay({ nav, linkedin }: Props) {
  const [open, setOpen] = useState(false);
  // Portal target only exists after hydration (react-dom/server can't render portals)
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="site-menu"
        className="flex cursor-pointer items-center gap-2.5 text-sm font-bold text-neutral-900 transition-colors hover:text-brand"
      >
        Menu
        <span aria-hidden="true" className="flex w-6 flex-col items-end gap-1.5">
          <span className="h-0.5 w-6 bg-current" />
          <span className="h-0.5 w-4 bg-current" />
        </span>
      </button>

      {mounted &&
        createPortal(
          <div id="site-menu" className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`}>
        {/* Backdrop (visible behind the desktop drawer) */}
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel: full screen below lg, right drawer at lg+ */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute inset-y-0 right-0 flex w-full flex-col bg-brand shadow-2xl transition-transform duration-300 ease-out lg:w-[420px] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-end px-5 md:h-20 md:px-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex cursor-pointer items-center gap-2.5 text-sm font-bold text-white/90 transition-colors hover:text-white"
            >
              Close
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-2">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-display px-4 py-2 text-5xl font-extrabold tracking-tight text-white transition-all duration-300 hover:text-white/70 md:text-6xl ${
                  open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + i * 60}ms` : "0ms" }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-center pb-12">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Hawkins on LinkedIn"
              className="text-white/80 transition-colors hover:text-white"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0z" />
              </svg>
            </a>
          </div>
        </div>
          </div>,
          document.body,
        )}
    </>
  );
}
