import SectionHeading from "../common/SectionHeading";

const REASONS = [
  {
    title: "Practical, Hands-On Labs",
    desc: "Every course is majority practical — you work on real systems and real business scenarios, not just theory.",
    icon: "lab",
  },
  {
    title: "Small Batch Sizes",
    desc: "Batches are capped so faculty can give individual attention and no student is left behind.",
    icon: "users",
  },
  {
    title: "Placement Support",
    desc: "A dedicated placement cell connects graduates with 60+ local hiring partners across industries.",
    icon: "target",
  },
  {
    title: "4 Convenient Branches",
    desc: "Central, North, South and East branches mean there's likely a classroom close to home.",
    icon: "map",
  },
  {
    title: "Flexible Batch Timings",
    desc: "Regular, weekend and evening batches fit around school, college or work schedules.",
    icon: "clock",
  },
  {
    title: "Recognised Certification",
    desc: "Certificates are accepted by local employers and, for MSCIT, recognised at the state level.",
    icon: "badge",
  },
];

const STUDENTS = [
  {
    name: "Priya Sharma",
    label: "DCA Graduate",
    quote: "I got a job within a month of finishing my course. The training was practical and the placement support was amazing.",
    image: "https://i.pravatar.cc/320?img=65",
  },
  {
    name: "Rohan Singh",
    label: "Tally Prime",
    quote: "The live billing practice and GST sessions helped me build real confidence.",
    image: "https://i.pravatar.cc/320?img=66",
  },
  {
    name: "Ayesha Khan",
    label: "PGDCA Alumna",
    quote: "Small batches meant the faculty actually noticed when I needed help.",
    image: "https://i.pravatar.cc/320?img=67",
  },
];

export default function WhyChooseUs() {
  const GRADIENTS = [
    "from-orange-400 to-rose-400",
    "from-signal-400 to-signal-600",
    "from-sky-400 to-indigo-500",
    "from-amber-400 to-yellow-500",
  ];

  return (
    <section className="section-py bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why BrightPath"
          title="Built around what gets students hired"
          description="Fifteen years of running computer courses locally has taught us what actually helps students land jobs."
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-6">
            <div className="rounded-[2rem] overflow-hidden bg-slate-900 shadow-cardHover">
              <img
                src={STUDENTS[0].image}
                alt={STUDENTS[0].name}
                className="h-full w-full object-cover"
              />
              <div className="bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent px-6 py-6 text-white">
                <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Student Spotlight</p>
                <h3 className="mt-3 text-3xl font-bold">{STUDENTS[0].name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-orange-200">{STUDENTS[0].label}</p>
                <p className="mt-4 max-w-lg text-sm text-slate-200">
                  "{STUDENTS[0].quote}"
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {STUDENTS.slice(1).map((student) => (
                <div key={student.name} className="rounded-3xl bg-slate-950 p-5 text-white shadow-cardHover border border-white/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="h-14 w-14 rounded-3xl object-cover"
                    />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-orange-300">{student.label}</p>
                      <p className="font-display text-lg font-semibold">{student.name}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-300">"{student.quote}"</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {REASONS.map((r, idx) => (
              <div
                key={r.title}
                className={`rounded-3xl p-6 bg-white/5 border border-white/5 hover:bg-white/10 hover:shadow-cardHover transform transition duration-300 ease-in-out hover:-translate-y-2`}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${GRADIENTS[idx % GRADIENTS.length]} text-white shadow-md`}>
                    <ReasonIcon name={r.icon} />
                  </div>

                  <div>
                    <h3 className="font-display font-semibold text-ink-900 mb-2 text-lg">{r.title}</h3>
                    <p className="text-sm text-ink-600/80 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReasonIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8 };
  switch (name) {
    case "lab":
      return <svg {...common}><path d="M9 3v6L4 19a1 1 0 001 1.5h14a1 1 0 001-1.5L15 9V3M9 3h6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "users":
      return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6M17 8a3 3 0 100-6M22 20c0-2.8-2-5-4.5-5.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "target":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.5" /></svg>;
    case "map":
      return <svg {...common}><path d="M9 20l-6 3V7l6-3 6 3 6-3v16l-6 3-6-3z" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 4v16M15 7v16" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    case "badge":
      return <svg {...common}><circle cx="12" cy="9" r="5" /><path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    default:
      return null;
  }
}
