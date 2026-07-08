import { useState, useMemo } from "react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import CourseCard from "../components/course/CourseCard";
import { courses } from "../data/courses";

const DURATIONS = ["All", "1 Month", "2 Months", "3 Months", "6 Months", "12 Months"];

export default function Courses() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? courses : courses.filter((c) => c.duration === filter)),
    [filter]
  );

  return (
    <>
      <Seo
        title="Courses | BrightPath Computer Institute"
        description="Explore DCA, PGDCA, Tally, DEO, Basic Computer, MSCIT and more job-oriented computer courses at BrightPath."
      />
      <PageHero
        eyebrow="Courses"
        title="Job-oriented courses for every starting point"
        description="From absolute beginners to graduates seeking an advanced diploma — find the course that matches your goal."
      />

      <section className="section-py bg-paper">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-10">
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === d
                    ? "bg-ink-900 text-white border-ink-900"
                    : "bg-white text-slate-ink border-ink-100 hover:border-signal-500 hover:text-signal-700"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-ink/60 py-16">
              No courses match this duration yet. Try a different filter.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
