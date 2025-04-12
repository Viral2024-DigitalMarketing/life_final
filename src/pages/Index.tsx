
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection.tsx';
import AboutSection from '@/components/home/AboutSection';
import BreakthroughSection from '@/components/home/BreakthroughSection';
import DexaSection from '@/components/home/DexaSection';
import MultiSpecialitySection from '@/components/home/MultiSpecialitySection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import SkillRecoverySection from '@/components/home/SkillRecoverySection';
import TestimonialSection from '@/components/home/TestimonialSection';
import FaqSection from '@/components/home/FaqSection';
import EmpoweringSection from '@/components/home/EmpoweringSection';

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
