import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DesiresSection from "@/components/DesiresSection";
import ProcessSection from "@/components/ProcessSection";
import CasesSection from "@/components/CasesSection";
import ExecutionSection from "@/components/ExecutionSection";
import PackagesSection from "@/components/PackagesSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DesiresSection />
        <ProcessSection />
        <CasesSection />
        <ExecutionSection />
        <PackagesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
