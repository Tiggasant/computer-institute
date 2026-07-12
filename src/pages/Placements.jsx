// import Seo from "../components/common/Seo";
// import PageHero from "../components/common/PageHero";
// import SectionHeading from "../components/common/SectionHeading";
// import PlacementCard from "../components/placement/PlacementCard";
// import { placementStats, placementCompanies, placementStories } from "../data/content";

// export default function Placements() {
//   return (
//     <>
//       <Seo
//         title="Placements | BrightPath Computer Institute"
//         description="See placement statistics, hiring partners and student success stories from BrightPath Computer Institute."
//       />
//       <PageHero
//         eyebrow="Placements"
//         title="Where our students end up working"
//         description="A dedicated placement cell works with local employers so training leads directly to job opportunities."
//       />

//       <section className="section-py bg-white">
//         <div className="container-page">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
//             {placementStats.map((stat) => (
//               <div key={stat.id} className="card-base p-6 text-center">
//                 <p className="font-display font-bold text-3xl md:text-4xl text-signal-600">{stat.value}</p>
//                 <p className="mt-2 text-sm text-slate-ink/70">{stat.label}</p>
//               </div>
//             ))}
//           </div>

//           <SectionHeading
//             eyebrow="Hiring Partners"
//             title="Companies that hire our graduates"
//             description="A growing network of local businesses that trust BrightPath training."
//           />
//           <div className="flex flex-wrap gap-3 mb-16">
//             {placementCompanies.map((name) => (
//               <span
//                 key={name}
//                 className="px-4 py-2.5 rounded-lg bg-ink-50 text-ink-900 text-sm font-medium font-display"
//               >
//                 {name}
//               </span>
//             ))}
//           </div>

//           <SectionHeading
//             eyebrow="Success Stories"
//             title="From classroom to career"
//             description="A few of the students whose placement journeys we're proud of."
//           />
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {placementStories.map((story) => (
//               <PlacementCard key={story.id} story={story} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { FiBriefcase, FiTrendingUp, FiUsers, FiAward, FiCheckCircle } from "react-icons/fi";

const recruiters = [
  "TCS",
  "Infosys",
  "Wipro",
  "Capgemini",
  "Tech Mahindra",
  "HCLTech",
];

const process = [
  "Career Counseling",
  "Resume Building",
  "Mock Interviews",
  "Technical Training",
  "Company Interviews",
  "Placement Assistance",
];

export default function Placement() {
  return (
    <main className="bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black md:text-6xl">Placement Cell</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-200">
            Career guidance, interview preparation and placement support to help students start successful IT careers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <FiUsers className="mx-auto text-5xl text-orange-500"/>
            <h3 className="mt-4 text-4xl font-black">10,000+</h3>
            <p>Students Trained</p>
          </div>
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <FiTrendingUp className="mx-auto text-5xl text-orange-500"/>
            <h3 className="mt-4 text-4xl font-black">95%</h3>
            <p>Placement Support</p>
          </div>
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <FiAward className="mx-auto text-5xl text-orange-500"/>
            <h3 className="mt-4 text-4xl font-black">15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <FiBriefcase className="mx-auto text-5xl text-orange-500"/>
            <h3 className="mt-4 text-4xl font-black">50+</h3>
            <p>Hiring Partners</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-center text-4xl font-bold">Placement Process</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step)=>(
            <div key={step} className="rounded-2xl bg-white p-6 shadow">
              <FiCheckCircle className="text-4xl text-green-600"/>
              <h3 className="mt-4 text-xl font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold">Our Recruiters</h2>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {recruiters.map((company)=>(
              <div key={company} className="rounded-2xl border bg-slate-50 p-8 text-center font-bold shadow-sm transition hover:shadow-lg">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-center text-white">
        <h2 className="text-4xl font-black">Ready to Start Your Career?</h2>
        <p className="mt-4 text-slate-300">Join our professional training programs and prepare for your dream job.</p>
        <a href="/admission" className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-bold hover:bg-orange-600">
          Apply for Admission
        </a>
      </section>
    </main>
  );
}
