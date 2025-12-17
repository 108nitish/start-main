'use client'
import { Code, Brain, Cog, Instagram, Database, Cpu, Wrench, ArrowUpRight, KanbanSquare } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "AI Software Development",
    description: "Custom AI-powered web & SaaS platforms built for scale and performance.",
    gradient: "from-primary to-blue-glow",
  },
  {
    icon: Brain,
    title: "AI Consulting & Strategy",
    description: "Architecture design, AI roadmaps, and cost optimization for your business.",
    gradient: "from-blue-glow to-accent",
  },
  {
    icon: Cog,
    title: "AI Automation Solutions",
    description: "Workflow automation powered by LLMs to streamline your operations.",
    gradient: "from-accent to-purple-glow",
  },
  {
    icon: Instagram,
    title: "Instahelper Platform",
    description: "AI-powered Instagram automation for comments, DMs, and engagement.",
    gradient: "from-purple-glow to-primary",
  },
  {
    icon: Database,
    title: "RAG-Based AI Systems",
    description: "Private-data chatbots using vector databases for secure AI responses.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Cpu,
    title: "LLM Integration",
    description: "OpenAI, local LLMs, and performance tuning for optimal results.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Wrench,
    title: "Maintenance & Scaling",
    description: "Long-term AI system support to keep your solutions running smoothly.",
    gradient: "from-blue-glow to-primary",
  },
  {
    icon: KanbanSquare,
    title: "StackUp",
    description: "A task management tool for both web and PWA, designed to streamline your workflow.",
    gradient: "from-purple-glow to-accent",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 " />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 animate-fade-up">What We Offer</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            AI Services & <span className="gradient-text">Consulting</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-200">
            Enterprise-grade AI solutions tailored to your business needs. From strategy to deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass-card p-6 hover-lift cursor-pointer animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-[1px] mb-5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;