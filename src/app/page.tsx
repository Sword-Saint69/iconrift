import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";

export default function Home() {
  return (
    <div className="relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Scrollable Content */}
      <div className="relative flex flex-col pt-20">
        <Hero />
        <FeaturedGrid />
      </div>
    </div>
  );
}
