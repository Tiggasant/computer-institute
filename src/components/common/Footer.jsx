// import { Link } from "react-router-dom";
// import { branches, primaryContact } from "../../data/branches";

// export default function Footer() {
//   const year = new Date().getFullYear();

//   return (
//     <footer className="bg-ink-900 text-ink-100">
//       <div className="container-page py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
//         <div>
//           <div className="flex items-center gap-2 mb-3">
//             <span className="terminal-chip">cec</span>
//             <span className="font-display font-bold text-lg text-white">
//               WWCEC <span className="text-signal-300">Institute</span>
//             </span>
//           </div>
//           <p className="text-sm text-ink-100/80 leading-relaxed">
//             Job-oriented computer courses across 4 branches. Practical training,
//             experienced faculty and dedicated placement support since 2011.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-white font-display font-semibold mb-3 text-sm tracking-wide uppercase">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <Link to="/about" className="hover:text-signal-300">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link to="/courses" className="hover:text-signal-300">
//                 Courses
//               </Link>
//             </li>
//             <li>
//               <Link to="/placements" className="hover:text-signal-300">
//                 Placements
//               </Link>
//             </li>
//             <li>
//               <Link to="/gallery" className="hover:text-signal-300">
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link to="/admission" className="hover:text-signal-300">
//                 Online Admission
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-display font-semibold mb-3 text-sm tracking-wide uppercase">
//             Our Branches
//           </h3>
//           <ul className="space-y-2 text-sm">
//             {branches.map((b) => (
//               <li key={b.id}>
//                 <Link to="/branches" className="hover:text-signal-300">
//                   {b.area}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-white font-display font-semibold mb-3 text-sm tracking-wide uppercase">
//             Get in Touch
//           </h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <a
//                 href={`tel:${primaryContact.phone}`}
//                 className="hover:text-signal-300"
//               >
//                 {primaryContact.phone}
//               </a>
//             </li>
//             <li>
//               <a
//                 href={`mailto:${primaryContact.email}`}
//                 className="hover:text-signal-300"
//               >
//                 {primaryContact.email}
//               </a>
//             </li>
//             <li>
//               <a
//                 href={`https://wa.me/${primaryContact.whatsapp}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-signal-300"
//               >
//                 Chat on WhatsApp
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-100/70">
//           <p>
//             &copy; {year} BrightPath Computer Institute. All rights reserved.
//           </p>
//           <p>Designed for students. Built for careers.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
} from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Footer() {
  // Back-to-top handled by Navbar component; Footer no longer needs scroll listener

  const quick = [
    ["Home","/"],["About","/about"],["Courses","/courses"],
    ["Branches","/branches"],["Gallery","/gallery"],
    ["Placements","/placements"],["Contact","/contact"]
  ];

  const courses = [
    "PGDCA","DCA","ADCA","Tally Prime",
    "Web Development","Python","Java","CCC"
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white">Ready to Start Your Career?</h2>
            <p className="mt-2 text-orange-100">
              Join thousands of students building successful careers with WWCEC.
            </p>
          </div>
          <Link to="/admission"
            className="rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition hover:scale-105">
            Apply Now
          </Link>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="WWCEC" className="h-14 w-14 object-contain"/>
              <div>
                <h3 className="text-xl font-bold text-white">World Wide</h3>
                <p className="text-xs text-slate-400">Computer Education Center</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Professional computer education, skill development and placement
              assistance for students across Chhattisgarh.
            </p>

            <div className="mt-6 flex gap-3">
              {[FiFacebook,FiInstagram,FiLinkedin,FiYoutube].map((Icon,i)=>(
                <a key={i} href="#" className="rounded-full bg-slate-800 p-3 transition hover:bg-orange-500 hover:text-white">
                  <Icon size={18}/>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-3">
              {quick.map(([t,l])=>(
                <Link key={t} to={l} className="block transition hover:translate-x-1 hover:text-orange-400">
                  {t}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Popular Courses</h4>
            <div className="space-y-3">
              {courses.map(c=>(
                <p key={c} className="transition hover:text-orange-400">{c}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">Contact</h4>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <FiMapPin className="mt-1 text-orange-400"/>
                <span>Raipur, Chhattisgarh</span>
              </div>

              <div className="flex gap-3">
                <FiPhone className="mt-1 text-orange-400"/>
                <span>+91 8400400400</span>
              </div>

              <div className="flex gap-3">
                <FiMail className="mt-1 text-orange-400"/>
                <span>info@wwcec.in</span>
              </div>

              <div className="flex gap-3">
                <FiClock className="mt-1 text-orange-400"/>
                <span>Mon - Sat : 9:00 AM - 7:00 PM</span>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 font-medium text-white">Newsletter</p>
              <div className="flex overflow-hidden rounded-xl bg-slate-800">
                <input
                  placeholder="Your Email"
                  className="w-full bg-transparent px-4 py-3 outline-none"
                />
                <button className="bg-orange-500 px-4 text-white hover:bg-orange-600">
                  <FiArrowRight/>
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm md:flex-row">
            <p>© 2026 World Wide Computer Education Center. All Rights Reserved.</p>
            <div className="flex gap-6">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms</Link>
              <Link to="/">Refund Policy</Link>
            </div>
          </div>
        </div>

        {/* Back-to-top button removed from Footer to avoid duplication with Navbar */}
      </footer>
    </>
  );
}
