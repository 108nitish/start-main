'use client';

import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="glass-card p-12 lg:p-20 text-center max-w-4xl mx-auto gradient-border animate-scale-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Ready to Transform?</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Let's Build AI That{" "}
            <span className="gradient-text">Actually Works</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Partner with us to create AI solutions that drive real business outcomes. From strategy to deployment, we're with you every step.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Calendar className="mr-2 w-5 h-5" />
              Book a Consultation
            </Button>
            <Button variant="heroOutline" size="xl">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;