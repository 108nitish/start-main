'use client';

import React, { useState } from 'react';
import { 
  Rocket, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Menu, 
  X, 
  ChevronRight, 
  Globe, 
  Users, 
  ArrowRight 
} from 'lucide-react'; 
import HeroSection from './components/HeroSection';
import ValueSection from './components/ValueSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import WhyUsSection from './components/WhyUsSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechStackSection from './components/TechStackSection';

export default function Home() {
  return (
    <div className="min-h-screen ">
       <HeroSection />
       <ValueSection />
       <ServicesSection />
       <ProductsSection />
       <WhyUsSection />
       <ProcessSection />
       <TestimonialsSection />
       <TechStackSection />
    </div>
  );
}