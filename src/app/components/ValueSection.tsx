'use client'
import { Bot, Zap, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const ValueSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-border/50 bg-card/50 text-muted-foreground text-sm font-medium mb-6">
            VALUE WE PROVIDE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What We Do? - We Do Best!
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Large card - AI Expertise */}
          <div className="row-span-2 p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm flex flex-col">
            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="relative w-full aspect-square max-w-[280px] rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                {/* Abstract AI visual */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-primary/30 border border-primary/50 flex items-center justify-center">
                    <Bot className="w-10 h-10 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded-xl bg-accent/30 border border-accent/50 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-secondary/30 border border-secondary/50 flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
              Expert Team for
              <br />
              AI & Automation
            </h3>
            <p className="text-muted-foreground text-sm text-center">
              LLMs, RAG Systems, Custom AI
            </p>
          </div>

          {/* Stats card - Projects */}
          <div className="p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <p className="text-muted-foreground font-medium mb-2">Delivered</p>
            <p className="text-6xl md:text-7xl font-bold text-primary mb-2">50+</p>
            <p className="text-foreground font-medium">AI Projects</p>
          </div>

          {/* Feature card - SaaS */}
          <div className="p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              Built Production-Grade
              <br />
              AI Systems & SaaS
            </h3>
          </div>

          {/* CTA card */}
          <div className="p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Quality That
              <br />
              Drives Results
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Systems built for scale,
              <br />
              not just demos.
            </p>
            <Button variant="glass" className="group">
              Get in touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats card - Growth */}
          <div className="p-6 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <p className="text-muted-foreground font-medium mb-2">Scaled clients from</p>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl md:text-6xl font-bold text-foreground">0</span>
              <ArrowRight className="w-8 h-8 text-primary" />
              <span className="text-5xl md:text-6xl font-bold text-primary">10x</span>
            </div>
            <p className="text-foreground font-medium">Revenue Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;