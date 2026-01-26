import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Enhancing Microservices Architecture',
    description: 'Final year research project focusing on intelligent function relocation detection and cross-service logic duplication resolution using a Backstage plugin for automated refactoring recommendations.',
    tech: ['Microservices', 'Backstage', 'Research', 'Architecture'],
    featured: true,
    type: 'Research',
  },
  {
    title: 'C & A Indoor Cricket Net System',
    description: 'Complete indoor cricket booking system with real-time scheduling, payment integration, and comprehensive admin controls for managing bookings and facilities.',
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
    featured: true,
    type: 'Full Stack',
  },
  {
    title: 'Smart Shopper',
    description: 'Intelligent shopping list management system featuring real-time price comparison across stores and optimized delivery route suggestions.',
    tech: ['React', 'Spring Boot', 'MySQL', 'APIs'],
    featured: true,
    type: 'Full Stack',
  },
  {
    title: 'Examination MIS',
    description: 'Comprehensive examination management system for NILIS handling student results, attendance tracking, and medical update management.',
    tech: ['Java', 'MySQL', 'JavaFX'],
    type: 'Enterprise',
  },
  {
    title: 'Pahasara Edu',
    description: 'Interactive learning management platform designed to seamlessly connect teachers and students for enhanced educational experiences.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    type: 'EdTech',
  },
  {
    title: 'Project Management System',
    description: 'Comprehensive project management tool featuring task management, project timelines, role assignments, and team communication features.',
    tech: ['React', 'Express.js', 'MongoDB'],
    type: 'Productivity',
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="section-subheading mx-auto">
            Showcasing my journey through various domains and technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🚀</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {project.type}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-xl">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-secondary rounded-md text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="font-display font-semibold text-2xl mb-6">Other Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card p-5 rounded-xl card-elevated group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-0.5 text-xs font-medium bg-secondary text-secondary-foreground rounded">
                  {project.type}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h4 className="font-display font-semibold mb-2">{project.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs bg-muted rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-4 h-4" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
