import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import PlacementCard from "../components/placement/PlacementCard";
import { placementStats, placementCompanies, placementStories } from "../data/content";

export default function Placements() {
  return (
    <>
      <Seo
        title="Placements | BrightPath Computer Institute"
        description="See placement statistics, hiring partners and student success stories from BrightPath Computer Institute."
      />
      <PageHero
        eyebrow="Placements"
        title="Where our students end up working"
        description="A dedicated placement cell works with local employers so training leads directly to job opportunities."
      />

      <section className="section-py bg-white">
        <div className="container-page">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {placementStats.map((stat) => (
              <div key={stat.id} className="card-base p-6 text-center">
                <p className="font-display font-bold text-3xl md:text-4xl text-signal-600">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-ink/70">{stat.label}</p>
              </div>
            ))}
          </div>

          <SectionHeading
            eyebrow="Hiring Partners"
            title="Companies that hire our graduates"
            description="A growing network of local businesses that trust BrightPath training."
          />
          <div className="flex flex-wrap gap-3 mb-16">
            {placementCompanies.map((name) => (
              <span
                key={name}
                className="px-4 py-2.5 rounded-lg bg-ink-50 text-ink-900 text-sm font-medium font-display"
              >
                {name}
              </span>
            ))}
          </div>

          <SectionHeading
            eyebrow="Success Stories"
            title="From classroom to career"
            description="A few of the students whose placement journeys we're proud of."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placementStories.map((story) => (
              <PlacementCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
