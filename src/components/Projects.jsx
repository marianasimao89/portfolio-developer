import artistPortfolioImage from "../assets/projects/artist-portfolio.jpg";

const projects = [
  {
    name: "Artist Portfolio",
    image: artistPortfolioImage,
    description:
      "A responsive portfolio showcasing my paintings, exhibitions and artistic practice.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/artist-portfolio",
    live: "https://yourwebsite.com",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <img src={project.image} alt={project.name} />

            <h3>{project.name}</h3>

            <p>{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span className="technology" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
