# BrightPath Computer Institute — Website

A modern, mobile-first, SEO-friendly website for a 4-branch computer training
institute, built with **React 18 + Vite + Tailwind CSS + React Router +
Axios**.

## Quick Start

```bash
npm install
npm run dev        # start local dev server (http://localhost:5173)
npm run build       # production build -> /dist
npm run preview     # preview the production build locally
```

Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` once a real backend
exists. Until then, every form and data list works against local mock data,
so the site is fully demoable offline.

## Design System

| Token | Value | Use |
|---|---|---|
| `ink-900` | `#0F1E33` | Primary dark — nav, footer, dark sections |
| `ink-600` | `#1F3A5F` | Secondary dark |
| `signal-500` | `#0EA5A0` | Accent — links, icons, highlights (tech/screen motif) |
| `spark-500` | `#F5A623` | CTA / urgency — "Admissions Open", primary buttons |
| `paper` | `#F7F9FC` | Light section background |
| `slate-ink` | `#334155` | Body text |

Typefaces: **Sora** (display/headings), **Inter** (body), **JetBrains Mono**
(the "terminal" signature motif used for course command chips, e.g.
`$ dca --duration 6mo`, tying the visual identity back to "computer
education" without leaning on stock clip-art).

All tokens live in `tailwind.config.js` — change them there and the whole
site updates.

## Folder Structure

```
src/
├── assets/                # static images/icons (add real branch/course photos here)
├── components/
│   ├── common/             # Navbar, Footer, FloatingContactBar, Seo, PageHero, SectionHeading, ScrollToTop
│   ├── home/                # Hero, AdmissionBanner, PopularCourses, WhyChooseUs, StudentSuccess, TestimonialsSection, FinalCta
│   ├── course/               # CourseCard
│   ├── branch/                # BranchCard
│   ├── testimonial/            # TestimonialCard
│   ├── gallery/                # GalleryCard
│   └── placement/               # PlacementCard
├── pages/                  # One file per route (Home, About, Courses, Branches, Gallery, Placements, Contact, Admission, NotFound)
├── layouts/
│   └── MainLayout.jsx        # Navbar + <Outlet/> + Footer + FloatingContactBar, shared by every route
├── data/                   # Local content: courses.js, branches.js, content.js (testimonials/gallery/placements)
├── services/               # Axios API layer: apiClient.js, admissionService.js, coursesService.js
├── hooks/
│   └── useFormState.js       # Shared controlled-form state hook (Contact + Admission forms)
├── App.jsx                 # React Router route table
└── main.jsx                 # App entry point
```

## Routing

All routes are nested under `MainLayout` (`src/App.jsx`) so every page
automatically gets the sticky navbar, footer, and the fixed mobile
WhatsApp/Call bar:

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/courses` | Courses |
| `/branches` | Branches |
| `/gallery` | Gallery |
| `/placements` | Placements |
| `/contact` | Contact |
| `/admission` | Online Admission |
| `*` | 404 Not Found |

Course cards link to `/admission` with the course pre-selected via React
Router's `state` (`<Link to="/admission" state={{ courseId }} />`), so a
student clicking "Enroll" on a course lands on a form with that course
already chosen.

## Lead Forms — Formspree (No Backend Required)

The Contact and Admission forms submit directly to **Formspree**, a hosted
form-backend service. No server, database, or API to build or maintain —
Formspree emails you every submission and keeps a dashboard of all entries.

**Setup (5 minutes):**
1. Sign up at [formspree.io](https://formspree.io) (free tier: 50
   submissions/month, upgrade if you outgrow it).
2. Create a form named **"Admissions"** → copy its endpoint URL
   (looks like `https://formspree.io/f/abcdwxyz`).
3. Create a second form named **"Contact"** → copy its endpoint URL.
4. Copy `.env.example` to `.env` and paste both endpoints in.
5. In each Formspree form's settings, add the email address(es) that should
   receive notifications (e.g. `admissions@yourinstitute.in`).
6. Rebuild (`npm run build`) and redeploy.

Until the `.env` values are set, both forms fall back to a mocked "success"
response (logged with a console warning) so the site is still fully
demoable before Formspree is configured.

This logic lives in `src/services/admissionService.js` —
`submitAdmissionForm()` and `submitContactForm()`.

## API Integration Strategy (Future Backend)

If you later outgrow Formspree and build a real backend (e.g. to manage
admissions status, add an admin dashboard, or integrate with a CRM):

- **`src/services/apiClient.js`** — a single configured Axios instance
  (base URL from `VITE_API_BASE_URL`, timeout, response-error normalisation),
  ready to point at your API.
- **`src/services/coursesService.js`** — demonstrates the **fetch-with-
  local-fallback** pattern: try `GET /courses` first, fall back to the
  bundled `src/data/courses.js` if the API isn't available. The same pattern
  is recommended for Branches, Testimonials, Gallery and Placements as those
  endpoints become available.
- Forms use a shared `useFormState` hook (`src/hooks/useFormState.js`) for
  consistent controlled-input + submit-status handling. If forms grow more
  complex (multi-step, conditional fields, file uploads), consider migrating
  to `react-hook-form`.

## Key UX/Business Features

- **Fixed WhatsApp + Call bar** (`FloatingContactBar.jsx`) — a full-width
  bottom bar on mobile (the two highest-intent actions for a local lead-gen
  business), collapsing to floating circular buttons on tablet/desktop.
- **Admission Open banner** on the homepage with a direct link to `/admission`.
  Update the copy in `AdmissionBanner.jsx` per intake cycle.
- **Course filter by duration** and **Gallery filter by category** — client-side
  filtering, ready to swap for server-side filtering once a real API exists.
- **Google Maps embeds** per branch (`data/branches.js` → `mapEmbed`).
  Replace the placeholder embed URLs with your real branches' "Embed a map"
  iframe src from Google Maps.

## SEO & Performance Notes

- Per-page `<title>` and meta description via the lightweight `Seo.jsx`
  component (swap for `react-helmet-async` if you need per-route Open Graph
  images or structured data).
- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<nav>`, heading hierarchy)
  throughout.
- Images are currently styled placeholders in the Gallery — replace
  `GalleryCard.jsx`'s gradient block with real `<img loading="lazy">` tags
  and add width/height to avoid layout shift once real photos are available.
- `scroll-behavior: smooth` and `prefers-reduced-motion` are respected
  globally (`src/index.css`).
- Fonts are loaded via `<link rel="preconnect">` + Google Fonts CSS for fast
  first paint; self-host the font files if you need to remove the
  third-party request entirely.

## Before Going Live — Checklist

1. Replace phone numbers, WhatsApp numbers, email and addresses in
   `src/data/branches.js`.
2. Replace the 4 Google Maps `mapEmbed` iframe URLs with your real branches.
3. Swap gallery placeholder tiles for real photos (`src/data/content.js` +
   `GalleryCard.jsx`).
4. Set up your two Formspree forms and add the endpoints to `.env`
   (see "Lead Forms — Formspree" above) so admission/contact submissions
   actually reach you.
5. Add a real `favicon.svg` / social share image.
6. Run `npm run build` and deploy the `/dist` folder to your host (Netlify,
   Vercel, or any static host — this is a fully static SPA build).
