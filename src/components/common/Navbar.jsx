import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

import {
  FiMenu,
  FiX,
  FiArrowRight,
  FiChevronDown,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

import { FaTwitter, FaYoutube } from "react-icons/fa";

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
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const topBarRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeights = () => {
      if (topBarRef.current) {
        setTopBarHeight(topBarRef.current.getBoundingClientRect().height);
      }
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
      }
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Premium Top Bar */}
      <div
        ref={topBarRef}
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-500 ${
          sticky ? "-translate-y-full opacity-0" : ""
        }`}
      >
        <div className="bg-color-graded shadow-[0_12px_40px_rgba(0,0,0,.25)]">
          {/* <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-5 py-2 lg:flex-row"> */}
          <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-1 md:gap-0 px-2 py-0.5 md:h-8">

            <p className="text-center text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] leading-none text-white lg:text-left">
              <span className="inline-flex items-center gap-1 text-gradient-pulse">
                <span className="text-[11px]">✨</span>
                <span>Welcome to</span>
              </span>
              <span className="ml-2 bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,196,37,0.35)] text-shimmer">
                World Wide Computer Education Center
              </span>
            </p>

            <div className="flex items-center gap-4">
              <span className="follow-us-fun text-[10px] font-semibold uppercase tracking-[0.12em]">
                Follow Us
              </span>

              <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener" className="follow-us-icon flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-[0_0_14px_rgba(236,72,153,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-110">
                <FiInstagram className="h-3.5 w-3.5" />
              </a>

              <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener" className="follow-us-icon flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-[#1877F2] text-white shadow-[0_0_14px_rgba(24,119,242,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-110">
                <FiFacebook className="h-3.5 w-3.5" />
              </a>

              <a href="https://x.com" target="_blank" rel="noreferrer noopener" className="follow-us-icon flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-[#1D9BF0] text-white shadow-[0_0_14px_rgba(29,155,240,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-110">
                <FaTwitter className="h-3.5 w-3.5" />
              </a>

              <a href="https://www.youtube.com" target="_blank" rel="noreferrer noopener" className="follow-us-icon flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-red-600 text-white shadow-[0_0_14px_rgba(239,68,68,0.28)] transition duration-300 hover:-translate-y-0.5 hover:scale-110">
                <FaYoutube className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        style={{ top: sticky ? 0 : topBarHeight }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          sticky
            ? "bg-white/90 shadow-xl border-b border-slate-200"
            : "bg-slate-900"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 xl:px-8">

          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="WWCEC"
              className="h-12 w-12 object-contain logo-spin"
            />

            <div>
              <h2 className={`text-lg font-bold ${sticky ? "text-slate-900" : "text-white"}`}>
                World Wide
              </h2>

              <p className={`text-[11px] ${sticky ? "text-slate-500" : "text-slate-300"}`}>
                Computer Education Center
              </p>
            </div>
          </Link>

{/* ================= Desktop Navigation ================= */}

<nav className="hidden flex-1 justify-center lg:flex">
  <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2">

    {NAV_LINKS.map((item) => {
      if (item.label === "Courses") {
        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setCourseOpen(true)}
            onMouseLeave={() => setCourseOpen(false)}
          >
            <button
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                sticky
                  ? "text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                  : "text-white hover:bg-white/10 hover:text-orange-300"
              }`}
            >
              Courses
              <FiChevronDown
                className={`transition ${courseOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute left-0 top-14 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl transition-all ${
                courseOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-3 opacity-0"
              }`}
            >
              {[
                "PGDCA",
                "DCA",
                "ADCA",
                "Python",
                "Web Development",
                "Tally Prime",
              ].map((course) => (
                <Link
                  key={course}
                  to="/courses"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600"
                >
                  {course}
                </Link>
              ))}
            </div>
          </div>
        );
      }

      return (
        <NavLink key={item.to} to={item.to} end={item.to === "/"}>
          {({ isActive }) => (
            <div
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-orange-500 text-white shadow-lg"
                  : sticky
                  ? "text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                  : "text-white hover:bg-white/10 hover:text-orange-300"
              }`}
            >
              {item.label}
            </div>
          )}
        </NavLink>
      );
    })}

  </div>
</nav>

{/* ================= Right Actions ================= */}

<div className="hidden items-center gap-4 lg:flex">
  <Link
    to="/admission"
    className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
  >
    Apply Now
    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
  </Link>
</div>

{/* ================= Mobile Menu Button ================= */}

<button
  onClick={() => setMenuOpen(!menuOpen)}
  className={`rounded-xl p-2 transition lg:hidden ${
    sticky ? "text-slate-900" : "text-white"
  }`}
>
  {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
</button>

</div>
</header>

<div
  className="w-full"
  style={{
    height: sticky ? headerHeight : topBarHeight + headerHeight,
    minHeight: sticky ? headerHeight : topBarHeight + headerHeight,
  }}
/>
{menuOpen && (
  <div
    className="fixed inset-0 z-[90] bg-black/60 lg:hidden"
    onClick={() => setMenuOpen(false)}
  />
)}

{/* ================= MOBILE DRAWER ================= */}

<aside
  className={`fixed top-0 right-0 z-[100] h-dvh w-full max-w-sm bg-white shadow-[0_20px_80px_rgba(0,0,0,.25)] transition-transform duration-500 lg:hidden ${
    menuOpen
      ? "translate-x-0"
      : "translate-x-full"
  }`}
>
  <div className="h-full overflow-y-auto overscroll-contain">
  {/* Header */}
  <div className="bg-gradient-to-r from-[#071B3B] via-[#0B2A57] to-[#071B3B] px-6 py-6 text-white">

    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="WWCEC"
          className="h-14 w-14 rounded-full bg-white p-1 shadow-lg"
        />

        <div>
          <h3 className="text-lg font-bold">World Wide</h3>
          <p className="text-xs text-slate-300">
            Computer Education Center
          </p>
        </div>
      </div>

      <button
        onClick={() => setMenuOpen(false)}
        className="rounded-xl bg-white/10 p-2 hover:bg-white/20"
      >
        <FiX size={24} />
      </button>

    </div>

    <div className="mt-6 rounded-2xl bg-white/10 p-4">

      <p className="text-sm leading-6">
        👋 Welcome to
        <span className="font-bold text-orange-300">
          {" "}World Wide Computer Education Center
        </span>
      </p>

      <div className="mt-5">
        <p className="mb-3 text-sm follow-us-fun text-slate-300">
          Follow Us
        </p>

        <div className="flex gap-4">

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white transition hover:scale-110"
          >
            <FiInstagram />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-110"
          >
            <FiFacebook />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D9BF0] text-white transition hover:scale-110"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white transition hover:scale-110"
          >
            <FaYoutube />
          </a>

        </div>
      </div>

    </div>

  </div>

  {/* Navigation */}

  <nav className="px-5 py-6">

    <div className="space-y-2">

      {NAV_LINKS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `flex items-center justify-between rounded-2xl px-5 py-4 text-[15px] font-semibold transition-all ${
              isActive
                ? "bg-orange-500 text-white shadow-lg"
                : "text-slate-700 hover:bg-orange-50 hover:text-orange-600"
            }`
          }
        >
          <span>{item.label}</span>
          <FiArrowRight />
        </NavLink>
      ))}

    </div>

    <Link
      to="/admission"
      onClick={() => setMenuOpen(false)}
      className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 py-4 font-semibold text-white shadow-xl transition hover:scale-[1.02]"
    >
      Apply Now
      <FiArrowRight />
    </Link>

  </nav>

  <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-slate-50 px-5 py-4">
    <p className="text-center text-xs text-slate-500">
      © 2026 World Wide Computer Education Center
    </p>
  </div>
 </div>
</aside>

{/* ================= BACK TO TOP ================= */}

{sticky && (
  <button
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    className="fixed bottom-24 right-5 z-[120] flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
    aria-label="Back to top"
  >
    ↑
  </button>
)}

{/* ================= OPTIONAL NAVBAR GLOW ================= */}

<div
  className={`pointer-events-none fixed left-0 right-0 top-0 z-40 h-24 transition-all duration-500 ${
    sticky
      ? "bg-gradient-to-b from-orange-500/10 to-transparent"
      : "opacity-0"
  }`}
/>

    </>
  );
}
