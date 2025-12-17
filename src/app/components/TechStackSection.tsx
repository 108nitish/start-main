'use client';

const technologies = [
  { name: "OpenAI GPT", category: "LLM" },
  { name: "Claude", category: "LLM" },
  { name: "Llama", category: "Local LLM" },
  { name: "Mistral", category: "Local LLM" },
  { name: "Pinecone", category: "Vector DB" },
  { name: "Weaviate", category: "Vector DB" },
  { name: "Qdrant", category: "Vector DB" },
  { name: "LangChain", category: "Framework" },
  { name: "LlamaIndex", category: "Framework" },
  { name: "FastAPI", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "AWS", category: "Cloud" },
  // { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "PostgreSQL", category: "Database" },
  // { name: "HTML", category: "Frontend" },
  // { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  // { name: "Material-UI", category: "Frontend" },
  { name: "React-Native", category: "Frontend" },
  { name: "Expo", category: "Frontend" },
  { name: "Zustand", category: "Frontend" },
  // { name: "Redux", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Postman", category: "Backend" },
  { name: "AWS S3", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "SurrealDB", category: "Database" },
  { name: "Prisma", category: "Database" },
  // { name: "C", category: "Programming Languages" },
  // { name: "C++", category: "Programming Languages" },
  // { name: "Java", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "R", category: "Programming Languages" },
  { name: "MATLAB", category: "Programming Languages" },
  { name: "NumPy", category: "Data Science / Libraries" },
  { name: "Pandas", category: "Data Science / Libraries" },
  { name: "scikit-learn", category: "Data Science / Libraries" },
  { name: "Matplotlib", category: "Data Science / Libraries" },
];

const TechStackSection = () => {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 animate-fade-up">Technology</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            Our <span className="gradient-text-accent">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-up delay-200">
            Enterprise-grade technologies powering our AI solutions.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto animate-fade-up delay-300">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative px-6 py-3 rounded-full bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-lg bg-card border border-border text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {tech.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;