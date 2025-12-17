'use client'
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Consult",
    description: "Deep dive into your business challenges, goals, and AI opportunities.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design Architecture",
    description: "Blueprint the optimal AI solution with scalability and security in mind.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Build & Deploy",
    description: "Develop, test, and ship production-ready AI systems.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Scale & Optimize",
    description: "Continuous improvement, monitoring, and scaling support.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-accent/5 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 animate-fade-up">How We Work</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Our <span className="gradient-text-accent">Consulting</span> Process
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-200">
            A proven methodology that transforms your AI vision into reality.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="glass-card p-6 text-center hover-lift h-full overflow-visible">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto mt-4 mb-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector Dot - Desktop */}
                {/* <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow-cyan z-10" /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;