import { Building2, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Software Engineer Intern',
    organization: 'Kingslake Engineering Systems (Pvt) Ltd',
    period: 'Nov 2024 - May 2025',
    description: 'Contributed to enterprise-level software development, gaining hands-on experience in building scalable backend systems and working in a professional engineering environment.',
    highlights: [
      'Development of enterprise-level software applications',
      'Designing and implementing reliable system components',
      'Collaboration within agile development teams',
      'Improving CI/CD and deployment workflows',
    ],
  },
];

const education = [
  {
    type: 'education',
    title: 'BSc (Hons) in Software Engineering',
    organization: 'University of Colombo School of Computing (UCSC)',
    period: 'Expected April 2026',
    description: 'Comprehensive software engineering curriculum with focus on modern development practices, system design, and research methodologies.',
    highlights: [
    'Final year research focused on enhancing microservices architecture',
    'Strong foundation in software engineering principles',
    'Hands on experience through academic and team-based projects',
    'Applied theoretical knowledge through practical, real world oriented coursework'
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.title}
                  className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  
                  <div className="bg-card p-6 rounded-2xl card-elevated border border-transparent hover:border-primary transition-colors duration-200">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h4 className="font-display font-semibold text-lg mb-1">{exp.title}</h4>
                    <p className="text-primary font-medium mb-3">{exp.organization}</p>
                    <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-xl">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.title}
                  className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-primary" />
                  <div className="bg-card p-6 rounded-2xl card-elevated border border-transparent hover:border-primary transition-colors duration-200">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <h4 className="font-display font-semibold text-lg mb-1">{edu.title}</h4>
                    <p className="text-primary font-medium mb-3">{edu.organization}</p>
                    <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
