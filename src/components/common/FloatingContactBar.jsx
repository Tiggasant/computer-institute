import { primaryContact } from "../../data/branches";

/**
 * Fixed, thumb-reachable contact bar. On mobile it renders as a full-width
 * bottom bar (the two actions a lead-gen local business cares about most);
 * on larger screens it collapses into floating circular buttons so it
 * doesn't compete with desktop layouts.
 */
export default function FloatingContactBar() {
  return (
    <>
      {/* Mobile: fixed bottom bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 flex sm:hidden">
        <a
          href={`https://wa.me/${primaryContact.whatsapp}?text=${encodeURIComponent(
            "Hi, I'd like to know more about your computer courses."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-display font-semibold py-3.5 text-sm"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a
          href={`tel:${primaryContact.phone}`}
          className="flex-1 flex items-center justify-center gap-2 bg-spark-500 text-ink-900 font-display font-semibold py-3.5 text-sm"
        >
          <CallIcon />
          Call Now
        </a>
      </div>

      {/* Desktop / tablet: floating circular buttons */}
      <div className="hidden sm:flex flex-col gap-3 fixed bottom-6 right-6 z-50">
        <a
          href={`https://wa.me/${primaryContact.whatsapp}?text=${encodeURIComponent(
            "Hi, I'd like to know more about your computer courses."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-cardHover hover:scale-105 transition-transform"
        >
          <WhatsAppIcon size={26} />
        </a>
        <a
          href={`tel:${primaryContact.phone}`}
          aria-label="Call the institute"
          className="w-14 h-14 rounded-full bg-spark-500 text-ink-900 flex items-center justify-center shadow-cardHover hover:scale-105 transition-transform"
        >
          <CallIcon size={24} />
        </a>
      </div>
    </>
  );
}

function WhatsAppIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.83L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.34-.5.05-1.02.24-3.4-.7-2.87-1.14-4.7-4.07-4.84-4.26-.14-.19-1.16-1.54-1.16-2.94 0-1.4.74-2.09 1-2.38.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.3.48-.14.17-.31.38-.44.51-.14.14-.29.3-.13.58.17.28.75 1.23 1.6 1.99 1.1.98 2.03 1.28 2.31 1.42.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
    </svg>
  );
}

function CallIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.45a2 2 0 0 1 2.11-.45c.85.3 1.73.51 2.63.63A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
