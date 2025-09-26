import * as React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import CurrentOpenings from "@/components/CurrentOpenings";
import LifeAtVontech from "@/components/LifeAtVontech";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      <main>
        <HeroSection />
        <WhyWorkWithUs />
        <CurrentOpenings />
        <LifeAtVontech />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
