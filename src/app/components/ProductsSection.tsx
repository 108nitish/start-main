'use client'
import { MessageCircle, TrendingUp, Shield, Zap, Database, Search, Bot, ArrowRight, Brain } from "lucide-react";
import { Button } from "./ui/button";

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-primary font-medium mb-4 animate-fade-up">Our Products</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Production-Ready <span className="gradient-text-accent">AI Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-200">
            Flagship products built with enterprise-grade architecture and AI-first engineering.
          </p>
        </div>

        {/* Product 1: Instahelper */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          <div className="order-2 lg:order-1 space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-sm text-accent font-medium">Featured Product</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Instahelper
            </h3>
            <p className="text-lg text-muted-foreground">
              AI-powered Instagram automation platform that handles comments, DMs, and engagement at scale. Transform your social media presence with intelligent automation.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Smart DM Automation</p>
                  <p className="text-sm text-muted-foreground">AI-crafted responses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Growth Analytics</p>
                  <p className="text-sm text-muted-foreground">Real-time insights</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Platform Safe</p>
                  <p className="text-sm text-muted-foreground">Compliance-first design</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Lightning Fast</p>
                  <p className="text-sm text-muted-foreground">Sub-second responses</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="mt-4">
              Explore Instahelper
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          {/* Product Visual */}
          <div className="order-1 lg:order-2 relative animate-slide-in-right">
            <div className="glass-card p-6 glow-cyan">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-purple-glow flex items-center justify-center">
                  <Bot className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Instahelper Dashboard</p>
                  <p className="text-sm text-muted-foreground">AI Automation Suite</p>
                </div>
              </div>
              
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-display font-bold gradient-text">24.5K</p>
                    <p className="text-xs text-muted-foreground">DMs Sent</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-display font-bold gradient-text-accent">89%</p>
                    <p className="text-xs text-muted-foreground">Response Rate</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <p className="text-2xl font-display font-bold gradient-text">+340%</p>
                    <p className="text-xs text-muted-foreground">Engagement</p>
                  </div>
                </div>
                
                <div className="bg-secondary/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Automation Status</span>
                    <span className="text-xs text-primary">Active</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-primary to-accent rounded-full animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product 2: RAG Systems */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Product Visual */}
          <div className="relative animate-fade-up">
            <div className="glass-card p-6 glow-purple">
              {/* RAG Flow Diagram */}
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground text-center mb-2">RAG Architecture Flow</p>
                
                {/* Data Sources */}
                <div className="flex justify-center gap-3">
                  <div className="bg-secondary/50 rounded-lg px-4 py-3 text-center">
                    <p className="text-xs text-muted-foreground">PDFs</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg px-4 py-3 text-center">
                    <p className="text-xs text-muted-foreground">Docs</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg px-4 py-3 text-center">
                    <p className="text-xs text-muted-foreground">Web</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-primary to-accent" />
                </div>

                {/* Vector DB */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl px-8 py-4">
                    <div className="flex items-center gap-3">
                      <Database className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Vector Database</p>
                        <p className="text-xs text-muted-foreground">Embeddings & Similarity Search</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-accent to-primary" />
                </div>

                {/* LLM */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-accent/20 to-purple-glow/20 border border-accent/30 rounded-xl px-8 py-4">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium text-foreground">LLM Processing</p>
                        <p className="text-xs text-muted-foreground">Context-Aware Responses</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-purple-glow to-primary" />
                </div>

                {/* Output */}
                <div className="flex justify-center">
                  <div className="bg-secondary/50 rounded-xl px-6 py-3 flex items-center gap-2">
                    <Search className="w-4 h-4 text-primary" />
                    <p className="text-sm text-foreground">Accurate AI Responses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm text-primary font-medium">Enterprise Solution</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              RAG-Based AI Systems
            </h3>
            <p className="text-lg text-muted-foreground">
              Build private-data chatbots that leverage your organization's knowledge base. Our RAG systems ensure accurate, context-aware AI responses using vector databases and advanced retrieval techniques.
            </p>
            
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-foreground">Private data stays private</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-foreground">Real-time document ingestion</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-foreground">Semantic search capabilities</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm">✓</span>
                </div>
                <span className="text-foreground">Multi-model support</span>
              </li>
            </ul>

            <Button variant="heroOutline" size="lg" className="mt-4">
              Learn About RAG
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;