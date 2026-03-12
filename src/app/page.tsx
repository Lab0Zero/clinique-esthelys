import Hero from "@/components/sections/Hero";
import FeatureDuo from "@/components/sections/FeatureDuo";
import FeatureCarousel from "@/components/sections/FeatureCarousel";
import BentoGrid from "@/components/sections/BentoGrid";
import CustomerStories from "@/components/sections/CustomerStories";
import CTAFinal from "@/components/sections/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Smooth dark→light transition zone */}
      <div className="h-24 sm:h-32 bg-gradient-to-b from-dark to-bg" />
      <FeatureDuo />
      <FeatureCarousel />
      <BentoGrid />
      <CustomerStories />
      <CTAFinal />
    </>
  );
}
