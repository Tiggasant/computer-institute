import { Link } from "react-router-dom";
import { branches, primaryContact } from "../../data/branches";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-100">
      <div className="container-page py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="terminal-chip">cec</span>
            <span className="font-display font-bold text-lg text-white">
              WWCEC <span className="text-signal-300">Institute</span>
            </span>
          </div>
          <p className="text-sm text-ink-100/80 leading-relaxed">
            Job-oriented computer courses across 4 branches. Practical training,
            experienced faculty and dedicated placement support since 2011.
          </p>
        </div>

        <div>
          <h3 className="text-white font-display font-semibold mb-3 text-sm tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-signal-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-signal-300">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/placements" className="hover:text-signal-300">
                Placements
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-signal-300">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/admission" className="hover:text-signal-300">
                Online Admission
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-semibold mb-3 text-sm tracking-wide uppercase">
            Our Branches
          </h3>
          <ul className="space-y-2 text-sm">
            {branches.map((b) => (
              <li key={b.id}>
                <Link to="/branches" className="hover:text-signal-300">
                  {b.area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-display font-semibold mb-3 text-sm tracking-wide uppercase">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`tel:${primaryContact.phone}`}
                className="hover:text-signal-300"
              >
                {primaryContact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${primaryContact.email}`}
                className="hover:text-signal-300"
              >
                {primaryContact.email}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${primaryContact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-signal-300"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-100/70">
          <p>
            &copy; {year} BrightPath Computer Institute. All rights reserved.
          </p>
          <p>Designed for students. Built for careers.</p>
        </div>
      </div>
    </footer>
  );
}
