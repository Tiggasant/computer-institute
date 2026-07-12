import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiAward,
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";
import heroBg from "../assets/hero-campus.png";

const stats = [
  { icon: FiUsers, value: "10,000+", label: "Students Trained" },
  { icon: FiBookOpen, value: "50+", label: "Courses" },
  { icon: FiAward, value: "15+", label: "Years Experience" },
  { icon: FiBriefcase, value: "95%", label: "Placement Support" },
];

const courses = ["PGDCA", "DCA", "ADCA", "Python", "Web Development", "Tally Prime"];

export default function Home() {
  return (
    <main className="bg-slate-50">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={heroBg}
          alt="WWCEC Campus"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-black/30" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
          <div className="max-w-3xl text-white">
            <span className="rounded-full bg-orange-500 px-5 py-2 font-semibold">
              Admissions Open 2026
            </span>

            <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Build Your Future With
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-gradient-pulse">
                World Wide Computer Education Center
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-200">
              Industry-ready training, live projects, certifications and placement
              support to help you launch your IT career.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/admission" className="rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 font-bold text-white shadow-2xl hover:scale-105 transition-transform">
                Apply Now
              </Link>

              <Link to="/courses" className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 hover:bg-white/10 transition">
                Explore Courses <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-6 text-center shadow-xl transition-transform hover:-translate-y-2">
              <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 shadow-md">
                <item.icon className="text-2xl text-orange-600" />
              </div>
              <h3 className="mt-3 text-3xl font-bold">{item.value}</h3>
              <p className="mt-1 text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-center text-4xl font-bold">Popular Courses</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course} className="rounded-3xl bg-white p-8 shadow-xl transition-transform hover:-translate-y-3 border border-transparent hover:border-orange-50">
              <div className="flex items-center justify-between">
                <FiBookOpen className="text-4xl text-orange-500" />
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold">Popular</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold">{course}</h3>
              <p className="mt-3 text-slate-600">Practical training, certification and placement guidance.</p>
              <div className="mt-6">
                <Link to="/courses" className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-white font-semibold shadow hover:scale-105 transition-transform">View Course <FiArrowRight /></Link>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mt-24 text-center text-4xl font-bold">Why Choose WWCEC?</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Expert Faculty","Modern Labs","Government Courses","Placement Support"].map((item)=>(
            <div key={item} className="rounded-2xl bg-orange-50 p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto h-14 w-14 flex items-center justify-center rounded-full bg-white">
                <FiCheckCircle className="text-2xl text-orange-500"/>
              </div>
              <h3 className="mt-4 font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
