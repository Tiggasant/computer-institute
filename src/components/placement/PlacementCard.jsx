export default function PlacementCard({ story }) {
  return (
    <div className="card-base group p-6 flex flex-col h-full relative transition-all duration-200 hover:-translate-y-0.5">

      <div className="sheen" aria-hidden="true" />
      <div className="flex items-center gap-3 mb-4">


        <div className="w-11 h-11 rounded-full bg-ink-900 text-signal-300 font-display font-semibold flex items-center justify-center text-sm shrink-0">
          {story.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-display font-semibold text-ink-900 text-sm">{story.name}</p>
          <p className="text-xs text-ink-600/60">
            {story.role} &middot; {story.company}
          </p>
        </div>
      </div>
      <p className="text-sm text-ink-600/85 leading-relaxed flex-1">{story.story}</p>
      <span className="mt-4 w-fit text-xs font-mono text-signal-700 bg-signal-50 px-2 py-1 rounded">
        {story.course}
      </span>
    </div>
  );
}
