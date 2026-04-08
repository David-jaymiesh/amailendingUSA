import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import ContentFlowSection from "@/components/ContentFlowSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PortfolioSection from "@/components/PortfolioSection";
import PremiumSection from "@/components/PremiumSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ContentFlowSection />
        <PremiumSection />
        <HowWeWorkSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;