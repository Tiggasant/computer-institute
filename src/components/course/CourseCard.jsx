import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="card-base p-6 flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="font-display font-semibold text-lg text-ink-900 leading-snug">
          {course.name}
        </h3>
        <span className="shrink-0 text-xs font-mono font-semibold text-signal-700 bg-signal-50 px-2 py-1 rounded">
          {course.code}
        </span>
      </div>

      <p className="text-sm text-slate-ink/80 mb-4 flex-1">{course.summary}</p>

      <ul className="space-y-1.5 mb-5">
        {course.highlights.slice(0, 3).map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-ink/80">
            <svg className="w-4 h-4 mt-0.5 shrink-0 text-signal-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z" clipRule="evenodd" />
            </svg>
            {h}
          </li>
        ))}
      </ul>

      <div className="terminal-chip mb-4 w-fit">
        <span className="text-signal-500">$</span> {course.command}
      </div>

      <div className="flex items-center justify-between border-t border-ink-50 pt-4">
        <div className="text-sm">
          <p className="text-slate-ink/60">{course.duration}</p>
          <p className="font-display font-semibold text-ink-900">{course.fee}</p>
        </div>
        <Link
          to="/admission"
          state={{ courseId: course.id }}
          className="btn-primary text-sm px-4 py-2"
        >
          Enroll
        </Link>
      </div>
    </div>
  );
}
