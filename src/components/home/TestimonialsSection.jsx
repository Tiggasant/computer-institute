import SectionHeading from "../common/SectionHeading";
import TestimonialCard from "../testimonial/TestimonialCard";
import { testimonials } from "../../data/content";

export default function TestimonialsSection() {
  return (
    <section className="section-py bg-paper">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Testimonials"
          title="What our students say"
          description="Real feedback from students across our 4 branches."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold">Featured Story</h3>
              <p className="mt-4 text-sm opacity-90">{testimonials[0].quote}</p>
              <p className="mt-4 font-semibold">{testimonials[0].name} • <span className="text-sm font-normal">{testimonials[0].course}</span></p>
            </div>
          </div>

          <div className="lg:col-span-2 grid gap-5 sm:grid-cols-2">
            {testimonials.slice(1).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
