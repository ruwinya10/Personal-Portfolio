import { Link } from "react-router-dom";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  return (
    <section className="section home">
      <div className="container home-grid">
        <div className="home-content">
          <p className="eyebrow">Hello, I'm</p>
          <h1>{portfolioData.name}</h1>
          <h2>{portfolioData.title}</h2>
          <p className="home-tagline">{portfolioData.tagline}</p>

          <div className="home-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>

          <div className="social-links">
            <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={portfolioData.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="home-visual">
          <div className="avatar-ring">
            <div className="avatar">
              <span>RK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
