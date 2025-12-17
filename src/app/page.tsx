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

export default function Home() {
  return (
    <div className="min-h-screen ">
       <HeroSection />
    </div>
  );
}