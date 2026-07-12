import { Link } from "react-router-dom";
import { placementStats } from "../../data/content";
import { useEffect, useState } from "react";

function useCountTo(target, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(20, Math.floor(duration / target));
    const handle = setInterval(() => {
      start += Math.max(1, Math.floor(target / (duration / stepTime)));
      if (start >= target) {
        setValue(target);
        clearInterval(handle);
      } else {
        setValue(start);
      }
    }, stepTime);
    return () => clearInterval(handle);
  }, [target, duration]);
  return value;
}

export default function StudentSuccess() {
  return (
    <section className="section-py bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-fade bg-grid opacity-30" aria-hidden="true" />
      <div className="container-page relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow bg-white/10 text-signal-300 mb-4">Student Success</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Numbers that come from actual placements, not projections
            </h2>
          </div>
          <Link to="/placements" className="btn-outline-light w-fit shrink-0">
            See Placement Stories
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {placementStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }) {
  const numeric = parseInt(String(stat.value).replace(/[^0-9]/g, "")) || 0;
  const count = useCountTo(numeric || 1, 1200);
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
      <p className="font-display font-bold text-3xl md:text-4xl text-signal-300">{count}</p>
      <p className="mt-2 text-sm text-ink-100/70">{stat.label}</p>
    </div>
  );
}
