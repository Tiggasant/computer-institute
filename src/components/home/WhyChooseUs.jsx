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

export default function WhyChooseUs() {
  return (
    <section className="section-py bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why BrightPath"
          title="Built around what gets students hired"
          description="Fifteen years of running computer courses locally has taught us what actually helps students land jobs."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r) => (
            <div key={r.title} className="flex gap-4">
              <div className="w-11 h-11 rounded-lg bg-signal-50 text-signal-600 flex items-center justify-center shrink-0">
                <ReasonIcon name={r.icon} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink-900 mb-1">{r.title}</h3>
                <p className="text-sm text-slate-ink/75 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
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
