export default function BranchCard({ branch }) {
  return (
    <div className="card-base group overflow-hidden flex flex-col relative transition-all duration-200 hover:-translate-y-0.5">

      <div className="sheen" aria-hidden="true" />
      <div className="aspect-video w-full bg-ink-50">


        <iframe
          title={branch.name}
          src={branch.mapEmbed}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-lg text-ink-900 mb-1">{branch.name}</h3>
        <p className="text-sm text-ink-600/70 mb-4">{branch.address}</p>

        <ul className="space-y-2 text-sm mb-5">
          <li className="flex items-center gap-2 text-ink-600/80">
            <ClockIcon /> {branch.timing}
          </li>
          <li className="flex items-center gap-2 text-ink-600/80">
            <PhoneIcon /> {branch.phone}
          </li>
        </ul>

        <div className="mt-auto flex gap-2">
          <a href={`tel:${branch.phone}`} className="btn-secondary flex-1 text-sm py-2.5">
            Call Branch
          </a>
          <a
            href={`https://wa.me/${branch.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 text-sm py-2.5"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 text-signal-600 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5a1 1 0 00.3.7l3 3a1 1 0 001.4-1.4L11 9.6V5z" clipRule="evenodd" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 text-signal-600 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 3.5A1.5 1.5 0 013.5 2h1.586a1.5 1.5 0 011.415 1.05l.926 2.777a1.5 1.5 0 01-.375 1.541l-.943.943a11.06 11.06 0 005.026 5.026l.943-.943a1.5 1.5 0 011.541-.375l2.777.926A1.5 1.5 0 0116.5 15v1.5a1.5 1.5 0 01-1.5 1.5H14C6.82 18 1 12.18 1 5v-.5A1.5 1.5 0 012 3.5z" />
    </svg>
  );
}
