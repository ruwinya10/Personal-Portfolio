import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {portfolioData.name}. All rights reserved.
        </p>
        <div className="footer-links">
          <a href={portfolioData.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={portfolioData.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
