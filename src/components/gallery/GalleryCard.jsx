const CATEGORY_ACCENTS = {
  "Practical Labs": "from-signal-600 to-ink-700",
  Events: "from-spark-500 to-ink-700",
  Farewell: "from-ink-600 to-signal-700",
  "Outdoor Activities": "from-signal-500 to-spark-600",
};

export default function GalleryCard({ item }) {
  const gradient = CATEGORY_ACCENTS[item.category] || "from-ink-600 to-ink-900";

  return (
    <figure className="card-base overflow-hidden group">
      <div
        className={`aspect-square bg-gradient-to-br ${gradient} flex items-center justify-center relative`}
      >
        <span className="font-mono text-xs text-white/70 absolute top-3 left-3">
          #{String(item.id).padStart(2, "0")}
        </span>
        <PhotoIcon />
      </div>
      <figcaption className="p-4">
        <span className="text-xs font-mono text-signal-700 bg-signal-50 px-2 py-0.5 rounded">
          {item.category}
        </span>
        <p className="mt-2 text-sm text-slate-ink/80">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

function PhotoIcon() {
  return (
    <svg className="w-10 h-10 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M21 16l-5.5-5.5a1 1 0 00-1.4 0L7 17" />
    </svg>
  );
}
