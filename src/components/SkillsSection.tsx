const skillCategories = [
  {
    title: 'Languages',
    skills: ['C / C++', 'Python', 'Java', 'JavaScript', 'PHP', 'SQL', 'HTML & CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'React.js', 'Express.js', 'Bootstrap', 'Node.js'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['VS Code', 'IntelliJ IDEA', 'Git', 'GitHub Workflows', 'Postman'],
  },
  {
    title: 'Design',
    skills: ['Figma', 'Canva'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="section-subheading mx-auto">
            A quick view of the technologies I use across frontend, backend, and tooling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="
                bg-card
                p-6
                rounded-2xl
                card-elevated
                category-box
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge px-2 py-1 text-xs bg-muted/60 rounded-md text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
