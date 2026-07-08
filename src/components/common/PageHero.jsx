export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-ink-900 bg-grid-fade bg-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/85 to-ink-900" aria-hidden="true" />
      <div className="container-page relative py-14 md:py-20">
        {eyebrow && <span className="eyebrow bg-white/10 text-signal-300 mb-4">{eyebrow}</span>}
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl">{title}</h1>
        {description && (
          <p className="mt-4 text-ink-100/80 max-w-2xl text-base md:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
