import { Link } from "react-router-dom";
import { primaryContact } from "../../data/branches";

export default function FinalCta() {
  return (
    <section className="section-py bg-white">
      <div className="container-page">
        <div className="rounded-3xl bg-ink-900 px-6 py-12 md:px-14 md:py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-30" aria-hidden="true" />
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
              Seats are filling for the next batch. Start with a free counselling call.
            </h2>
            <p className="mt-4 text-ink-100/75 max-w-xl mx-auto">
              Talk to our counsellors about the right course for your goals, no obligation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/admission" className="btn-primary">
                Apply for Admission
              </Link>
              <a href={`tel:${primaryContact.phone}`} className="btn-outline-light">
                Call {primaryContact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
