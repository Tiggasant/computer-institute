import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import BranchCard from "../components/branch/BranchCard";
import { branches } from "../data/branches";

export default function Branches() {
  return (
    <>
      <Seo
        title="Our Branches | BrightPath Computer Institute"
        description="Find BrightPath Computer Institute's 4 branches with maps, addresses, timings and contact details."
      />
      <PageHero
        eyebrow="Branches"
        title="4 branches, one standard of teaching"
        description="Visit the branch closest to you, or call ahead to check batch timings and seat availability."
      />

      <section className="section-py bg-paper">
        <div className="container-page grid sm:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <BranchCard key={branch.id} branch={branch} />
          ))}
        </div>
      </section>
    </>
  );
}
