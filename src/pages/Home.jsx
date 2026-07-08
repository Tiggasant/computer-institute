import Seo from "../components/common/Seo";
import Hero from "../components/home/Hero";
import AdmissionBanner from "../components/home/AdmissionBanner";
import PopularCourses from "../components/home/PopularCourses";
import WhyChooseUs from "../components/home/WhyChooseUs";
import StudentSuccess from "../components/home/StudentSuccess";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FinalCta from "../components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Seo
        title="BrightPath Computer Institute | Computer Courses, Admissions Open"
        description="Job-oriented computer courses across 4 branches — DCA, PGDCA, Tally, DEO, MSCIT & more. Practical training with placement support. Admissions open now."
      />
      <AdmissionBanner />
      <Hero />
      <PopularCourses />
      <WhyChooseUs />
      <StudentSuccess />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
