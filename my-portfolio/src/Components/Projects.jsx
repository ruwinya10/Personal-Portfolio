import { portfolioData } from "../data/portfolioData";
import projectLogo from "../assets/logo.png";
import { GitHubIcon } from "./SocialIcons";

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
              <div className="project-image-wrapper">
                <img
                  src={project.image || projectLogo}
                  alt={project.title}
                  className={`project-image ${project.image ? "project-image-custom" : "project-image-fallback"}`}
                  style={project.objectFit ? { objectFit: project.objectFit } : {}}
                />
              </div>

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

              {project.githubUrl && (
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon size={16} />
                    GitHub
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
