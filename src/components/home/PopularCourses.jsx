import { Link } from "react-router-dom";
import CourseCard from "../course/CourseCard";
import SectionHeading from "../common/SectionHeading";
import { courses, popularCourseIds } from "../../data/courses";

export default function PopularCourses() {
  const popular = courses.filter((c) => popularCourseIds.includes(c.id));

  return (
    <section className="section-py bg-paper">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Course Catalogue"
            title="Popular Courses"
            description="Practical, job-focused programs designed with local employers in mind."
          />
          <Link to="/courses" className="btn-secondary text-sm mb-10 md:mb-12 w-fit">
            View All Courses
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {popular.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
