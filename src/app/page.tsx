import { HeroSection } from "@/components/HeroSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ChallengeSection } from "@/components/ChallengeSection";
import { FinalCTA } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <ServicesSection />
      <ChallengeSection />
      <FinalCTA />
    </>
  );
}
