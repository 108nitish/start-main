import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative mt-24 flex items-center justify-center overflow-hidden">

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">AI-First Engineering</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-up" style={{ animationDelay: '100ms' }}>
            <span className="text-foreground">AI-Powered </span>
            <span className="gradient-text">Software</span>
            <span className="text-foreground"> & </span>
            <span className="gradient-text-accent">Consulting</span>
            <span className="text-foreground"> That Scales</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl animate-fade-up" style={{ animationDelay: '200ms' }}>
            We design, build, and consult on AI-driven systems that automate growth and operations for ambitious businesses.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <Button variant="hero" size="xl">
              Book a Consultation
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;