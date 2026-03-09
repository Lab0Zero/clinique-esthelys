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
      <FeatureDuo />
      <FeatureCarousel />
      <BentoGrid />
      <CustomerStories />
      <CTAFinal />
    </>
  );
}
