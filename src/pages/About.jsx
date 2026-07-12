// import Seo from "../components/common/Seo";
// import PageHero from "../components/common/PageHero";
// import SectionHeading from "../components/common/SectionHeading";

// const ACHIEVEMENTS = [
//   { value: "2011", label: "Institute Founded" },
//   { value: "4", label: "Branches Across the City" },
//   { value: "1,200+", label: "Students Placed" },
//   { value: "60+", label: "Hiring Partners" },
// ];

// export default function About() {
//   return (
//     <>
//       <Seo
//         title="About Us | BrightPath Computer Institute"
//         description="Learn about BrightPath Computer Institute's story, mission, vision and achievements across our 4 branches."
//       />
//       <PageHero
//         eyebrow="About Us"
//         title="15 वर्षों से Skills से Success तक"
//         description="एक छोटे से Classroom से शुरू हुआ हमारा सफर आज 4 Branches तक पहुँच चुका है। समय के साथ हमारी पहचान बढ़ी है, लेकिन हमारा लक्ष्य नहीं बदला — Students को Practical Skills, Industry-Relevant Knowledge और Job-Oriented Training प्रदान करना।"
//       />

//       <section className="section-py bg-white">
//         <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
//           <div>
//             <SectionHeading eyebrow="Our Story" title="How WWCEC  Started" />
//             <p className="text-slate-ink/80 leading-relaxed mb-4">
//               World Wide Computer Education Center में आपका स्वागत है। हमारा
//               उद्देश्य विद्यार्थियों को Computer Education के साथ-साथ
//               Job-Oriented Skills प्रदान करना है, ताकि वे अपने करियर में सफल हो
//               सकें। हम छात्रों को केवल सर्टिफिकेट ही नहीं, बल्कि Practical
//               Knowledge और वास्तविक कार्य अनुभव से जुड़ी सीख भी देते हैं।
//             </p>
//             <p className="text-slate-ink/80 leading-relaxed mb-4">
//               हमारे संस्थान में DCA, PGDCA, MSCIT, Tally, Basic Computer, DEO
//               तथा अन्य Computer Courses उपलब्ध हैं। सभी कोर्स अनुभवी Faculty
//               Members द्वारा पढ़ाए जाते हैं और Practical Training पर विशेष ध्यान
//               दिया जाता है।
//             </p>
//             <p className="text-slate-ink/80 leading-relaxed">
//               हमारा लक्ष्य हर छात्र को बेहतर शिक्षा, आत्मविश्वास और रोजगार के
//               अवसर प्रदान करना है। आज हमारे अनेक छात्र विभिन्न क्षेत्रों में
//               सफलतापूर्वक कार्य कर रहे हैं और अपने सपनों को साकार कर रहे हैं।
//             </p>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-6">
//             <div className="card-base p-6">
//               <span className="eyebrow mb-3">Mission</span>
//               <p className="text-slate-ink/80 leading-relaxed text-sm">
//                 "हमारा मिशन Students और Job Seekers को Practical Computer Skills
//                 और Industry-Relevant Training प्रदान करना है, ताकि वे
//                 आत्मविश्वास के साथ बेहतर Career Opportunities प्राप्त कर सकें।
//                 हम Affordable, Accessible और Quality Computer Education के
//                 माध्यम से हर विद्यार्थी को सफलता की ओर बढ़ने में सहायता करते
//                 हैं।"
//               </p>
//             </div>
//             <div className="card-base p-6">
//               <span className="eyebrow mb-3">Vision</span>
//               <p className="text-slate-ink/80 leading-relaxed text-sm">
//                 "हमारा Vision शहर का सबसे विश्वसनीय Computer Training Institute
//                 बनना है, जहाँ Students अपने Career की मजबूत शुरुआत करें और
//                 Employers को Skilled, Practical और Job-Ready Professionals
//                 मिलें।"
//               </p>
//             </div>
//             <div className="card-base p-6 sm:col-span-2">
//               <span className="eyebrow mb-3">Our Approach</span>
//               <p className="text-slate-ink/80 leading-relaxed text-sm">
//                 "हर Course को Practical Learning को ध्यान में रखकर तैयार किया
//                 गया है। Small Batches, Individual Attention, Hands-on Training
//                 और Placement Support हमारी शिक्षा प्रणाली की प्रमुख विशेषताएँ
//                 हैं।"
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section-py bg-ink-900 bg-grid-fade bg-grid">
//         <div className="container-page">
//           <SectionHeading
//             align="center"
//             light
//             eyebrow="Achievements"
//             title="Fifteen years, one focus"
//             description="A track record built branch by branch, batch by batch."
//           />
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {ACHIEVEMENTS.map((a) => (
//               <div
//                 key={a.label}
//                 className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
//               >
//                 <p className="font-display font-bold text-3xl md:text-4xl text-signal-300">
//                   {a.value}
//                 </p>
//                 <p className="mt-2 text-sm text-ink-100/70">{a.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { FiTarget, FiEye, FiAward, FiUsers, FiCheckCircle } from "react-icons/fi";

const highlights = [
  "Experienced & Qualified Faculty",
  "Modern Computer Labs",
  "Industry-Oriented Curriculum",
  "Live Practical Training",
  "Placement Assistance",
  "Government Recognized Courses",
];

export default function About() {
  return (
    <main className="bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-orange-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-black md:text-6xl">About WWCEC</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
            World Wide Computer Education Center provides quality computer education with practical training and career guidance.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold">Who We Are</h2>
          <p className="mt-6 leading-8 text-slate-600">
            We help students build IT skills through practical learning, experienced faculty, and industry-focused courses.
          </p>
          <div className="mt-10 space-y-4">
            {highlights.map((item)=>(
              <div key={item} className="flex items-center gap-3">
                <FiCheckCircle className="text-green-600"/>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <FiTarget className="text-5xl text-orange-500"/>
            <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-slate-600">Deliver affordable, practical, career-oriented education.</p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <FiEye className="text-5xl text-orange-500"/>
            <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-slate-600">Become a leading computer education institute.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center md:grid-cols-3">
          <div><FiUsers className="mx-auto text-5xl text-orange-400"/><h3 className="mt-4 text-4xl font-black">10,000+</h3><p>Students</p></div>
          <div><FiAward className="mx-auto text-5xl text-orange-400"/><h3 className="mt-4 text-4xl font-black">15+</h3><p>Years</p></div>
          <div><FiCheckCircle className="mx-auto text-5xl text-orange-400"/><h3 className="mt-4 text-4xl font-black">95%</h3><p>Placement Support</p></div>
        </div>
      </section>
    </main>
  );
}
