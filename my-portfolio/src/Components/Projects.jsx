import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="section page projects">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Projects</p>
          <h2>Things I've Built</h2>
        </div>

        <div className="projects-grid">
          {portfolioData.projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-top">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.liveUrl}>Live Demo</a>
                <a href={project.githubUrl}>GitHub</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
