import { Link } from "react-router-dom";
import Seo from "../components/common/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | BrightPath Computer Institute" />
      <section className="min-h-[60vh] flex items-center justify-center bg-paper">
        <div className="text-center px-6">
          <p className="terminal-chip mx-auto w-fit mb-6">
            <span className="text-signal-500">$</span> 404 --page not-found
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-ink-900 mb-3">
            This page doesn't exist
          </h1>
          <p className="text-slate-ink/70 mb-8 max-w-md mx-auto">
            The page you're looking for may have moved. Head back home or explore our courses.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">Back to Home</Link>
            <Link to="/courses" className="btn-secondary">View Courses</Link>
          </div>
        </div>
      </section>
    </>
  );
}
