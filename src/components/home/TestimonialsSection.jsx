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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
