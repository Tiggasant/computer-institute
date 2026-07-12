export default function SectionHeading({ eyebrow, title, description, align = "left", light = false }) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl mb-10 md:mb-12 ${alignment}`}>
      {eyebrow && (
        <span className={`eyebrow mb-3 ${light ? "bg-white/10 text-signal-300" : ""}`}>{eyebrow}</span>
      )}
      <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base md:text-lg ${light ? "text-ink-100/75" : "text-ink-600/80"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
