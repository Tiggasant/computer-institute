// Central course catalogue. In production this would be fetched from the
// institute's CMS/API via src/services/coursesService.js — see that file
// for the fetch-with-fallback pattern that reads from this file offline.

export const courses = [
  {
    id: "dca",
    code: "DCA",
    name: "Diploma in Computer Applications",
    duration: "6 Months",
    mode: "Regular / Weekend",
    level: "Beginner to Intermediate",
    fee: "\u20B98,500",
    summary:
      "A complete foundation course covering computer fundamentals, MS Office, internet & email, and basic programming logic.",
    highlights: [
      "MS Word, Excel, PowerPoint mastery",
      "Internet, email & digital literacy",
      "Typing speed & accuracy training",
      "Certificate + placement assistance",
    ],
    command: "dca --duration 6mo --level beginner",
  },
  {
    id: "pgdca",
    code: "PGDCA",
    name: "Post Graduate Diploma in Computer Applications",
    duration: "12 Months",
    mode: "Regular",
    level: "Graduate Level",
    fee: "\u20B915,000",
    summary:
      "An advanced diploma for graduates covering programming, databases, web development and office automation in depth.",
    highlights: [
      "C, C++ & Python programming",
      "Database management (SQL)",
      "Web development basics (HTML/CSS/JS)",
      "Advanced Excel & Tally",
    ],
    command: "pgdca --duration 12mo --level graduate",
  },
  {
    id: "tally",
    code: "TALLY",
    name: "Tally with GST",
    duration: "3 Months",
    mode: "Regular / Weekend",
    level: "Beginner to Intermediate",
    fee: "\u20B96,000",
    summary:
      "Industry-focused accounting course covering Tally Prime, GST filing, invoicing and financial reporting.",
    highlights: [
      "Tally Prime — inventory & accounting",
      "GST return filing practicals",
      "Payroll & banking modules",
      "Real business case studies",
    ],
    command: "tally --module gst --tool prime",
  },
  {
    id: "deo",
    code: "DEO",
    name: "Data Entry Operator Course",
    duration: "2 Months",
    mode: "Regular",
    level: "Beginner",
    fee: "\u20B94,000",
    summary:
      "Fast-track course to build speed, accuracy and software skills required for data entry & back-office jobs.",
    highlights: [
      "English & Hindi typing speed",
      "MS Excel data handling",
      "Form filling & documentation",
      "Mock tests for govt/private exams",
    ],
    command: "deo --focus typing+excel",
  },
  {
    id: "basic-computer",
    code: "BCC",
    name: "Basic Computer Course",
    duration: "1 Month",
    mode: "Regular / Weekend",
    level: "Beginner",
    fee: "\u20B92,000",
    summary:
      "An entry-level course for absolute beginners — computer basics, internet use and everyday digital skills.",
    highlights: [
      "Computer fundamentals & OS",
      "Internet, email, social media safely",
      "Basic MS Office introduction",
      "Ideal for students & homemakers",
    ],
    command: "basic-computer --level intro",
  },
  {
    id: "msc-it",
    code: "MSC-IT",
    name: "MSCIT (Maharashtra State Certificate in IT)",
    duration: "3 Months",
    mode: "Regular",
    level: "Beginner to Intermediate",
    fee: "\u20B93,500",
    summary:
      "Government-recognised IT literacy certification covering computer operations and common productivity tools.",
    highlights: [
      "State board recognised certificate",
      "Practical + online exam prep",
      "MS Office & internet modules",
      "Widely accepted for govt jobs",
    ],
    command: "msc-it --board state --exam online",
  },
  {
    id: "advanced-excel",
    code: "ADV-XL",
    name: "Advanced Excel & Data Analytics",
    duration: "2 Months",
    mode: "Weekend",
    level: "Intermediate",
    fee: "\u20B95,000",
    summary:
      "Job-ready Excel skills for office and analyst roles — formulas, pivot tables, dashboards and automation basics.",
    highlights: [
      "Advanced formulas & pivot tables",
      "Dashboard & chart building",
      "Data cleaning techniques",
      "Intro to macros",
    ],
    command: "excel --track analytics --level advanced",
  },
  {
    id: "web-design",
    code: "WEB-DEV",
    name: "Web Designing (HTML, CSS, JS)",
    duration: "3 Months",
    mode: "Regular / Weekend",
    level: "Beginner to Intermediate",
    fee: "\u20B97,000",
    summary:
      "Learn to design and build responsive websites from scratch — perfect first step toward a career in tech.",
    highlights: [
      "HTML5, CSS3 & responsive layout",
      "JavaScript fundamentals",
      "Live project building",
      "Portfolio website by course end",
    ],
    command: "web-dev --stack html+css+js",
  },
];

export const popularCourseIds = ["dca", "tally", "pgdca", "msc-it"];
