import { useState, useMemo } from "react";
import Seo from "../components/common/Seo";
import PageHero from "../components/common/PageHero";
import GalleryCard from "../components/gallery/GalleryCard";
import { galleryItems, galleryCategories } from "../data/content";

export default function Gallery() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((g) => g.category === category)),
    [category]
  );

  return (
    <>
      <Seo
        title="Gallery | BrightPath Computer Institute"
        description="See photos from BrightPath Computer Institute's practical labs, events, farewells and outdoor activities."
      />
      <PageHero
        eyebrow="Gallery"
        title="Life at BrightPath"
        description="A look at our practical labs, campus events, farewells and outdoor activities across branches."
      />

      <section className="section-py bg-paper">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  category === cat
                    ? "bg-ink-900 text-white border-ink-900"
                    : "bg-white text-slate-ink border-ink-100 hover:border-signal-500 hover:text-signal-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
