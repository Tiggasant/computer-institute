// import { Link } from "react-router-dom";

// export default function Hero() {
//   return (
//     <section className="relative bg-ink-900 overflow-hidden">
//       <div
//         className="absolute inset-0 bg-grid-fade bg-grid opacity-60"
//         aria-hidden="true"
//       />
//       <div
//         className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/60 to-ink-900"
//         aria-hidden="true"
//       />

//       <div className="container-page relative py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
//         <div className="animate-fade-up">
//           <span className="eyebrow bg-white/10 text-signal-300 mb-5">
//             4 Branches &middot; 1,200+ Students Placed
//           </span>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
//             World Wide Computer Education
//             <span className="text-signal-300"> Center</span>.
//           </h1>
//           <p className="mt-5 text-ink-100/80 text-base md:text-lg max-w-lg">
//             हमारे लोकप्रिय कोर्स :- DCA (Diploma in Computer Applications) PGDCA
//             Tally Prime & GST DEO (Data Entry Operator) Basic Computer Course
//             BCA Guidance MCA Guidance MSC-IT
//           </p>

//           <div className="mt-8 flex flex-wrap gap-3">
//             <Link to="/admission" className="btn-primary">
//               Apply for Admission
//             </Link>
//             <Link to="/courses" className="btn-outline-light">
//               Explore Courses
//             </Link>
//           </div>

//           <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-100/70">
//             <Stat value="15+" label="Years Teaching" />
//             <Stat value="60+" label="Hiring Partners" />
//             <Stat value="4" label="City Branches" />
//           </div>
//         </div>

//         <div className="relative animate-fade-up [animation-delay:150ms]">
//           <TerminalPreview />
//         </div>
//       </div>
//     </section>
//   );
// }

// function Stat({ value, label }) {
//   return (
//     <div>
//       <p className="font-display font-bold text-xl text-white">{value}</p>
//       <p>{label}</p>
//     </div>
//   );
// }

// function TerminalPreview() {
//   const lines = [
//     "$ enroll --course dca --branch nearest",
//     "> checking seat availability...",
//     "> 4 branches found near you",
//     "> placement_support: enabled",
//     "$ status: admissions_open ✔",
//   ];
//   return (
//     <div className="rounded-2xl bg-ink-700/80 border border-white/10 shadow-cardHover overflow-hidden">
//       <div className="flex items-center gap-1.5 px-4 py-3 bg-ink-900/60 border-b border-white/10">
//         <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
//         <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
//         <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
//         <span className="ml-3 text-xs font-mono text-ink-100/50">
//           admissions.sh
//         </span>
//       </div>
//       <div className="p-5 font-mono text-sm space-y-2.5">
//         {lines.map((line, i) => (
//           <p key={i} className="text-signal-300">
//             {line}
//             {i === lines.length - 1 && (
//               <span className="inline-block w-2 h-4 bg-signal-300 ml-1 align-middle animate-caret" />
//             )}
//           </p>
//         ))}
//       </div>
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import heroBg from "../assets/hero-campus.png";

export default function Home() {
  return (
    <main>
      {/* <section className="relative min-h-screen overflow-hidden">
        <img
          src={heroBg}
          alt="World Wide Computer Education Center"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/65 to-black/35"></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <span className="inline-block rounded-full bg-orange-500 px-5 py-2 font-semibold shadow-lg">
              Admissions Open 2026
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Build Your Future With
              <span className="mt-3 block text-orange-400">
                World Wide Computer Education Center
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              Industry-ready computer education with practical labs, live
              projects, certifications, and placement support.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/admission"
                className="rounded-full bg-orange-500 px-8 py-4 font-bold transition hover:bg-orange-600"
              >
                Apply Now
              </Link>

              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                Explore Courses <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 rounded-3xl bg-white/10 p-6 text-white border border-white/20 shadow-2xl">
          <h3 className="text-3xl font-bold text-orange-400">10,000+</h3>
          <p>Students Successfully Trained</p>
        </div>
      </section> */}
<section
  className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-black/40"></div>

  {/* Hero Content */}
  <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
    <div className="max-w-3xl">

      <span className="inline-flex items-center rounded-full bg-orange-500/90 px-5 py-2 text-sm font-semibold text-white shadow-xl">
        🎓 Admissions Open 2026
      </span>

      <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        Build Your Future With
        <span className="mt-2 block text-orange-400">
          World Wide Computer Education Center
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
        Learn from industry experts with practical training,
        live projects, certifications and placement support.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <Link
          to="/admission"
          className="rounded-full bg-orange-500 px-8 py-4 text-center font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
        >
          Apply Now
        </Link>

        <Link
          to="/courses"
          className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/20"
        >
          Explore Courses
          <FiArrowRight />
        </Link>

      </div>

      {/* Stats */}
      <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">

        <div className="rounded-2xl bg-white/10 p-5 text-center">
          <h3 className="text-3xl font-bold text-orange-400">10K+</h3>
          <p className="mt-2 text-sm text-white">Students</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 text-center">
          <h3 className="text-3xl font-bold text-orange-400">50+</h3>
          <p className="mt-2 text-sm text-white">Courses</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 text-center">
          <h3 className="text-3xl font-bold text-orange-400">15+</h3>
          <p className="mt-2 text-sm text-white">Years</p>
        </div>

        <div className="rounded-2xl bg-white/10 p-5 text-center">
          <h3 className="text-3xl font-bold text-orange-400">95%</h3>
          <p className="mt-2 text-sm text-white">Placement</p>
        </div>

      </div>

    </div>
  </div>
</section>

    </main>
  );
}
