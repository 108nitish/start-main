'use client'
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "NexusAI transformed our customer support with their RAG system. Response accuracy improved by 85% while cutting costs in half.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    avatar: "SC",
  },
  {
    quote: "Their AI consulting helped us identify $2M in potential automation savings. The roadmap they delivered was actionable from day one.",
    author: "Michael Roberts",
    role: "VP Engineering, DataScale",
    avatar: "MR",
  },
  {
    quote: "Instahelper 10x'd our Instagram engagement. The AI responses feel genuinely human and our conversion rates have never been higher.",
    author: "Emma Watson",
    role: "Founder, GrowthLabs",
    avatar: "EW",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 animate-fade-up">Testimonials</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card p-8 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;