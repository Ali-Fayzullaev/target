import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { HeroSection } from "@/components/HeroSection";
import { PainPointsSection } from "@/components/PainPointsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhyMeSection } from "@/components/WhyMeSection";
import { CasesSection } from "@/components/CasesSection";
import { CrmBannerSection } from "@/components/CrmBannerSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 overflow-x-hidden transition-colors">
      {/* Плавающая кнопка WhatsApp */}
      <FloatingWhatsAppButton />
      
      <Header/>

      {/* Hero — первый экран с главным CTA */}
      <HeroSection />
      
      {/* Боли — идентификация проблем клиента */}
      <PainPointsSection />
      
      {/* Решения — как мы решаем эти проблемы */}
      <SolutionsSection />
      
      {/* Почему я — социальное доказательство */}
      <WhyMeSection />
      
      {/* Кейсы — конкретные результаты */}
      <CasesSection />
      
      {/* CRM бонус — дополнительная мотивация */}
      <CrmBannerSection />
      
      {/* Финальный CTA — последний push */}
      <FinalCTASection />

      <Footer/>
    </main>
  );
}
