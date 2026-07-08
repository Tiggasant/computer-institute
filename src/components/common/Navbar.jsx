import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/branches", label: "Branches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/placements", label: "Placements" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close mobile menu on route change is handled by Link onClick below
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-ink-900/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="terminal-chip">
            <span
              className="w-2 h-2 rounded-full bg-signal-500 animate-caret"
              aria-hidden="true"
            />
            cec
          </span>
          <span className="font-display font-bold text-lg md:text-xl text-white">
            WWCEC <span className="text-signal-300">Institute</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-signal-300 bg-white/5"
                      : "text-ink-100 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/admission" className="btn-primary text-sm px-5 py-2.5">
            Apply for Admission
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-white hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-ink-700 ${
          open ? "max-h-[520px]" : "max-h-0"
        }`}
      >
        <ul className="container-page py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? "text-signal-300 bg-white/5"
                      : "text-ink-100 hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link
              to="/admission"
              onClick={() => setOpen(false)}
              className="btn-primary w-full text-sm"
            >
              Apply for Admission
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
