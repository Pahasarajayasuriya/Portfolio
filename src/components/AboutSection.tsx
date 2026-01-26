import { Code, Lightbulb, Target, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, efficient, and well-documented code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Approaching complex challenges with creative solutions',
  },
  {
    icon: Target,
    title: 'Goal Oriented',
    description: 'Focused on delivering impactful results',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies and best practices',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-foreground font-semibold">Software Engineer</span> with 
              a strong engineering mindset and dedication to building scalable, maintainable systems. 
              Currently completing my BSc (Hons) in Software Engineering at the{' '}
              <span className="text-foreground font-semibold">University of Colombo School of Computing</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My final-year research focuses on <span className="text-primary font-semibold">microservices architecture</span>, 
              specifically on intelligent function relocation detection and cross-service logic 
              duplication resolution. I'm deeply interested in system design, clean architecture, 
              and building solutions that make a real-world impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm actively seeking <span className="text-foreground font-semibold">Software Engineer roles</span> where 
              I can apply my skills, contribute to innovative projects, and continue growing as a developer.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Problem Solving', 'Team Collaboration', 'Agile', 'System Design'].map((tag) => (
                <span key={tag} className="skill-badge">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-2xl card-elevated group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
