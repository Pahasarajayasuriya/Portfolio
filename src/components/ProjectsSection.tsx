import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import crustImage from '@/assets/crust.png';
import microservicesImage from '@/assets/Research.jpg';
import cricketImage from '@/assets/CAIndoor.jpg';
import eduImage from '@/assets/PahasaraEdu.jpg';
import proPath from '@/assets/ProPath.png';
import pms from '@/assets/pms1.png';

const projects = [
  {
    title: 'Enhancing Microservices Architecture',
    description: 'A final-year research project focused on improving microservice architectures by identifying duplicated business logic across services and recommending intelligent function relocation. The solution integrates with a developer platform to analyze microservice systems and provide actionable insights that reduce redundancy, improve modularity, and enhance long-term maintainability.',
    tech: ['React.js', 'TypeScript', 'JavaScript','Node.js', 'Backstage', 'OpenTelemetry', "Jaeger"],
    featured: true,
    type: 'May 2025 - Present',
    image: microservicesImage,
  },
  {
    title: 'C & A Indoor Cricket Net System',
    description: 'A real-world indoor cricket net booking system designed to manage reservations, payments, and notifications for both customers and administrators. The system supports complete booking and payment workflows and is deployed using containerization for reliable production use.',
    tech: ['React.js', 'TypeScript', 'Spring Boot', 'PostgreSQL', "Tailwind CSS"],
    featured: true,
    type: 'Dec 2024 - Sep 2025',
    image: cricketImage,
  },
  {
    title: 'ProPath',
    description: 'A modern job portal designed to connect Sri Lankan companies with job seekers through intelligent job discovery and career development features. The platform supports efficient job searching and matching, providing a scalable and user-friendly experience for both recruiters and candidates.',
    tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'Python'],
    featured: true,
    type: 'Jun 2024 - Oct 2024',
    image: proPath,
  },
  {
    title: ' The Frosted Crust',
    description: 'An online food delivery and e-commerce platform designed to manage orders, inventory, and deliveries for a bakery business. The system supports efficient order processing through branch-level order handling, delivery assignment, and integrated navigation for streamlined delivery operations.',
    tech: ['PHP', 'React.js', 'JavaScript', 'MySQL', 'HTML & CSS'],
    featured: true,
    type: 'Jun 2023 - Apr 2024',
    image: crustImage,
  },
  {
    title: 'Pahasara Edu',
    description: 'A learning management system designed to support interactive education between teachers and students. The platform provides core features for content management, controlled access to learning materials, and role-based system administration.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    featured: true,
    type: '2023',
    image: eduImage,
  },
  {
    title: 'Project Management System',
    description: 'A comprehensive project management system designed to support effective project planning and team collaboration. The platform enables task management, responsibility assignment, project tracking, and team communication through features such as task boards and project timelines.',
    tech: ['React.js', 'JavaScript', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    featured: true,
    type: '2024',
    image: pms,
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
            A curated set of my most impactful builds, covering full-stack development, and research-driven solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group flex flex-col min-h-[480px] border border-transparent hover:border-primary transition-colors duration-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-3xl">🚀</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted/60 rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {/* <h3 className="font-display font-semibold text-2xl mb-6">Other Projects</h3> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card p-5 rounded-xl card-elevated group border border-transparent hover:border-primary transition-colors duration-200"
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
                    className="px-2 py-0.5 text-xs bg-muted/60 rounded text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
{/* 
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-4 h-4" />
            View All on GitHub
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
