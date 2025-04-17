
import React from 'react';
import Navbar from '@/components/layout/Navbar.tsx';
import Footer from '@/components/layout/Footer.tsx';
import HeroSection from '@/components/home/HeroSection.tsx';
import AboutSection from '@/components/home/AboutSection.tsx';
import BreakthroughSection from '@/components/home/BreakthroughSection.tsx';
import DexaSection from '@/components/home/DexaSection.tsx';
import MultiSpecialitySection from '@/components/home/MultiSpecialitySection.tsx';
import WhyChooseSection from '@/components/home/WhyChooseSection.tsx';
import SkillRecoverySection from '@/components/home/SkillRecoverySection.tsx';
import TestimonialSection from '@/components/home/TestimonialSection.tsx';
import FaqSection from '@/components/home/FaqSection.tsx';
import EmpoweringSection from '@/components/home/EmpoweringSection.tsx';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <BreakthroughSection />
        <DexaSection />
        <MultiSpecialitySection />
        <WhyChooseSection />
        <SkillRecoverySection />
        <TestimonialSection />
        <FaqSection />
        <EmpoweringSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
