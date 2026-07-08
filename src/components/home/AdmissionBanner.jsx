import { Link } from "react-router-dom";

export default function AdmissionBanner() {
  return (
    <div className="bg-spark-500">
      <div className="container-page py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <p className="font-display font-semibold text-ink-900 text-sm md:text-base">
          🎓 Admissions Open for 2026 batches — limited seats across all 4 branches
        </p>
        <Link
          to="/admission"
          className="font-display font-semibold text-sm text-ink-900 underline underline-offset-2 shrink-0"
        >
          Reserve Your Seat →
        </Link>
      </div>
    </div>
  );
}
