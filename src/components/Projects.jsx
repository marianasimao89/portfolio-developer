function Projects() {
  const projects = [
    {
      name: "✶Kiki Sophia Artist Portfolio",
      description:
        "A responsive portfolio website showcasing my artwork, exhibitions and artistic practice.",
      technologies: ["HTML", "CSS"],
      website: "https://www.kikisophia.com",
      websiteLabel: "kikisophia.com",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
        <article className="project" key={project.name}>
          <h3>{project.name}</h3>

          <p className="project-description">{project.description}</p>

          <p className="project-technologies">
            {project.technologies.join(" • ")}
          </p>

          <p className="project-links">
            <a href={project.website} target="_blank" rel="noreferrer">
              {project.websiteLabel}
            </a>
          </p>
        </article>
      ))}
    </section>
  );
}

export default Projects;
