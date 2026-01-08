import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhyMeSection } from "@/components/WhyMeSection";
import { CasesSection } from "@/components/CasesSection";
import { CrmBannerSection } from "@/components/CrmBannerSection";
import { FinalCTASection } from "@/components/FinalCTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <FloatingWhatsAppButton />
      <HeroSection />
      <PainPointsSection />
      <SolutionsSection />
      <WhyMeSection />
      <CasesSection />
      <CrmBannerSection />
      <FinalCTASection />
    </main>
  );
}
