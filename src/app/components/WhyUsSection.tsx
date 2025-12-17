'use client'

import { Brain, Users, Shield, DollarSign, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "AI-First Engineering",
    description: "Every solution starts with AI at its core, not as an afterthought.",
  },
  {
    icon: Users,
    title: "Consulting-Driven Approach",
    description: "We understand your business before writing a single line of code.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Enterprise-grade security and regulatory compliance built-in.",
  },
  {
    icon: DollarSign,
    title: "Cost-Efficient Architecture",
    description: "Optimized AI infrastructure that scales without breaking the bank.",
  },
  {
    icon: Rocket,
    title: "Production Experience",
    description: "Real-world deployments serving millions of requests daily.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <p className="text-primary font-medium mb-4">Why Choose Us</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Consultants Who <span className="gradient-text">Build</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just advisors—we're engineers who ship production-ready AI systems. Our team combines deep AI expertise with real-world consulting experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl sm:text-4xl font-display font-bold gradient-text">50+</p>
                <p className="text-sm text-muted-foreground">AI Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-display font-bold gradient-text-accent">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime SLA</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-display font-bold gradient-text">10M+</p>
                <p className="text-sm text-muted-foreground">API Calls/Month</p>
              </div>
            </div>
          </div>

          {/* Right Content - Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="glass-card p-5 flex items-start gap-4 hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;