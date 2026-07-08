import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-ink-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-fade bg-grid opacity-60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/60 to-ink-900"
        aria-hidden="true"
      />

      <div className="container-page relative py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-up">
          <span className="eyebrow bg-white/10 text-signal-300 mb-5">
            4 Branches &middot; 1,200+ Students Placed
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            World Wide Computer Education
            <span className="text-signal-300"> Center</span>.
          </h1>
          <p className="mt-5 text-ink-100/80 text-base md:text-lg max-w-lg">
            हमारे लोकप्रिय कोर्स :- DCA (Diploma in Computer Applications) PGDCA
            Tally Prime & GST DEO (Data Entry Operator) Basic Computer Course
            BCA Guidance MCA Guidance MSC-IT
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admission" className="btn-primary">
              Apply for Admission
            </Link>
            <Link to="/courses" className="btn-outline-light">
              Explore Courses
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-100/70">
            <Stat value="15+" label="Years Teaching" />
            <Stat value="60+" label="Hiring Partners" />
            <Stat value="4" label="City Branches" />
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <TerminalPreview />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display font-bold text-xl text-white">{value}</p>
      <p>{label}</p>
    </div>
  );
}

function TerminalPreview() {
  const lines = [
    "$ enroll --course dca --branch nearest",
    "> checking seat availability...",
    "> 4 branches found near you",
    "> placement_support: enabled",
    "$ status: admissions_open ✔",
  ];
  return (
    <div className="rounded-2xl bg-ink-700/80 border border-white/10 shadow-cardHover overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-ink-900/60 border-b border-white/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs font-mono text-ink-100/50">
          admissions.sh
        </span>
      </div>
      <div className="p-5 font-mono text-sm space-y-2.5">
        {lines.map((line, i) => (
          <p key={i} className="text-signal-300">
            {line}
            {i === lines.length - 1 && (
              <span className="inline-block w-2 h-4 bg-signal-300 ml-1 align-middle animate-caret" />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
