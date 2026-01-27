import { Code, Lightbulb, Target, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a software engineer with a strong foundation in full-stack development and a deep interest in designing scalable,
              well-architected systems. My journey in software engineering has been driven by a passion for problem solving and a
              curiosity to understand how reliable and efficient software systems are built and maintained.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I enjoy working across both frontend and backend technologies, allowing me to create seamless user experiences supported
              by robust and maintainable backend logic. I place a strong emphasis on writing clean, readable code and following best
              practices that ensure long-term maintainability, performance, and scalability.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am motivated to leverage modern technologies to build practical, real-world software solutions while continuously
              improving as a software engineer by learning new tools, exploring better design approaches, and contributing to
              impactful software products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
