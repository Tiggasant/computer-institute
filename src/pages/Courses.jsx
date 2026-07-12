// import { useState, useMemo } from "react";
// import Seo from "../components/common/Seo";
// import PageHero from "../components/common/PageHero";
// import CourseCard from "../components/course/CourseCard";
// import { courses } from "../data/courses";

// const DURATIONS = ["All", "1 Month", "2 Months", "3 Months", "6 Months", "12 Months"];

// export default function Courses() {
//   const [filter, setFilter] = useState("All");

//   const filtered = useMemo(
//     () => (filter === "All" ? courses : courses.filter((c) => c.duration === filter)),
//     [filter]
//   );

//   return (
//     <>
//       <Seo
//         title="Courses | BrightPath Computer Institute"
//         description="Explore DCA, PGDCA, Tally, DEO, Basic Computer, MSCIT and more job-oriented computer courses at BrightPath."
//       />
//       <PageHero
//         eyebrow="Courses"
//         title="Job-oriented courses for every starting point"
//         description="From absolute beginners to graduates seeking an advanced diploma — find the course that matches your goal."
//       />

//       <section className="section-py bg-paper">
//         <div className="container-page">
//           <div className="flex flex-wrap gap-2 mb-10">
//             {DURATIONS.map((d) => (
//               <button
//                 key={d}
//                 onClick={() => setFilter(d)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
//                   filter === d
//                     ? "bg-ink-900 text-white border-ink-900"
//                     : "bg-white text-slate-ink border-ink-100 hover:border-signal-500 hover:text-signal-700"
//                 }`}
//               >
//                 {d}
//               </button>
//             ))}
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filtered.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>

//           {filtered.length === 0 && (
//             <p className="text-center text-slate-ink/60 py-16">
//               No courses match this duration yet. Try a different filter.
//             </p>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }


import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiClock,
  FiAward,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const courses = [
  {
    title: "PGDCA",
    duration: "1 Year",
    level: "Post Graduate",
    desc: "Professional diploma covering programming, databases, networking and software development."
  },
  {
    title: "DCA",
    duration: "6 Months",
    level: "Diploma",
    desc: "Fundamentals of computers, MS Office, Internet and practical computer applications."
  },
  {
    title: "ADCA",
    duration: "1 Year",
    level: "Advanced Diploma",
    desc: "Advanced office tools, programming basics, accounting and practical projects."
  },
  {
    title: "Python",
    duration: "4 Months",
    level: "Programming",
    desc: "Python programming, automation, APIs and project-based learning."
  },
  {
    title: "Web Development",
    duration: "6 Months",
    level: "Professional",
    desc: "HTML, CSS, JavaScript, React and responsive website development."
  },
  {
    title: "Tally Prime",
    duration: "3 Months",
    level: "Accounting",
    desc: "GST, accounting, payroll and business management using Tally Prime."
  }
];

export default function Courses() {
  return (
    <main className="bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black md:text-6xl">Our Courses</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-200">
            Industry-focused computer courses designed to build practical skills
            and improve career opportunities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                <FiBookOpen className="text-3xl text-orange-500" />
              </div>

              <h2 className="mt-6 text-2xl font-bold">{course.title}</h2>

              <div className="mt-4 flex items-center gap-2 text-slate-600">
                <FiClock />
                <span>{course.duration}</span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-slate-600">
                <FiAward />
                <span>{course.level}</span>
              </div>

              <p className="mt-5 text-slate-600">{course.desc}</p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-600"/> Practical Training</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-600"/> Certificate</li>
                <li className="flex items-center gap-2"><FiCheckCircle className="text-green-600"/> Placement Support</li>
              </ul>

              <Link
                to="/admission"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Apply Now <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
