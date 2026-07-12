export default function TestimonialCard({ testimonial, compact = false }) {
  return (
    <div className={`card-base group ${compact ? 'p-4' : 'p-6'} flex flex-col h-full relative transition-all duration-200 hover:-translate-y-0.5`}>

      <div className="sheen" aria-hidden="true" />

      <div className="flex gap-0.5 mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-spark-500" : "text-ink-100"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
          </svg>
        ))}
      </div>

      <p className="text-sm text-ink-600/85 flex-1 leading-relaxed">"{testimonial.quote}"</p>

      <div className="mt-5 pt-4 border-t border-ink-50">
        <p className="font-display font-semibold text-ink-900 text-sm">{testimonial.name}</p>
        <p className="text-xs text-ink-600/60">
          {testimonial.course} &middot; {testimonial.branch}
        </p>
      </div>
    </div>
  );
}
